import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateRegistrationEmailHTML, type RegistrationEmailData } from '@/lib/email-template';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userProvided = body.userProvided ?? body;
    const telemetry = body.telemetry ?? null;
    const forwardedFor = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? request.headers.get('cf-connecting-ip');
    const ipValue = forwardedFor ? forwardedFor.split(',')[0]?.trim() ?? null : null;

    if (telemetry) {
      telemetry.ipAddress = {
        address: ipValue,
        source: ipValue ? 'request_header' : 'not_collected',
      };
      telemetry.time = {
        ...telemetry.time,
        capturedAt: new Date().toISOString(),
        utcDateTime: new Date().toISOString(),
        localDateTime: new Date().toLocaleString(),
        timezoneOffsetMinutes: new Date().getTimezoneOffset(),
      };
    }

    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'address',
      'state',
      'localGovernment',
      'refereeFullName',
      'refereeEmail',
      'refereePhone',
      'refereeRole',
    ];
    const missingFields = requiredFields.filter((field) => !userProvided[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const emailData: RegistrationEmailData = {
      userProvided: {
        firstName: userProvided.firstName,
        lastName: userProvided.lastName,
        email: userProvided.email,
        phone: userProvided.phone,
        address: userProvided.address,
        state: userProvided.state,
        localGovernment: userProvided.localGovernment,
        refereeFullName: userProvided.refereeFullName,
        refereeEmail: userProvided.refereeEmail,
        refereePhone: userProvided.refereePhone,
        refereeRole: userProvided.refereeRole,
        photoFilename: userProvided.photoFilename,
      },
      telemetry,
    };

    const htmlContent = generateRegistrationEmailHTML(emailData);

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: 'peternnamani001@gmail.com',
      subject: `New Volunteer Registration - ${emailData.userProvided.firstName} ${emailData.userProvided.lastName}`,
      html: htmlContent,
      replyTo: emailData.userProvided.email,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);

    return NextResponse.json(
      {
        success: true,
        message: 'Registration email sent successfully',
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send email',
      },
      { status: 500 }
    );
  }
}
