import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateRegistrationEmailHTML, type RegistrationEmailData } from '@/lib/email-template';

// Create a transporter using your email service
// For Gmail, you'll need to use an app-specific password
// For other services, configure accordingly
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'state', 'localGovernment', 'refereeFullName', 'refereeEmail', 'refereePhone', 'refereeRole'];
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const emailData: RegistrationEmailData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      address: body.address,
      state: body.state,
      localGovernment: body.localGovernment,
      refereeFullName: body.refereeFullName,
      refereeEmail: body.refereeEmail,
      refereePhone: body.refereePhone,
      refereeRole: body.refereeRole,
      photoFilename: body.photoFilename,
    };

    // Generate HTML email
    const htmlContent = generateRegistrationEmailHTML(emailData);

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: 'peternnamani001@gmail.com', // The recipient email
      subject: `New Volunteer Registration - ${emailData.firstName} ${emailData.lastName}`,
      html: htmlContent,
      replyTo: emailData.email, // So they can reply to the volunteer
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
