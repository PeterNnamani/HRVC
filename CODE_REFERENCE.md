# Code Examples & Reference

## How the Registration Form Sends Email

### Before (Old Method - Removed)
```typescript
// This opened the user's email client but didn't actually send anything
window.location.href = `mailto:peternnamani001@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
```

**Problems:**
- Didn't actually send email
- User had to manually send
- Unreliable and poor UX
- No email template

---

### After (New Method - Implemented)
```typescript
// components/VolunteerRegistrationForm.tsx

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Prepare the registration data
    const registrationData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      state: formData.state,
      localGovernment: formData.localGovernment,
      refereeFullName: formData.refereeFullName,
      refereeEmail: formData.refereeEmail,
      refereePhone: formData.refereePhone,
      refereeRole: formData.refereeRole,
      photoFilename: formData.photo ? formData.photo.name : null,
    };

    // Send the registration to the API
    const response = await fetch('/api/send-registration-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send registration email');
    }

    // Show success message
    alert('✓ Registration successful! An email has been sent to peternnamani001@gmail.com with your details.');

    // Reset the form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      state: 'Abia',
      localGovernment: NIGERIAN_STATES['Abia'][0],
      address: '',
      photo: null,
      refereeFullName: '',
      refereeEmail: '',
      refereePhone: '',
      refereeRole: '',
    });
    setPhotoPreview('');
  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred. Please try again.';
    alert(`⚠ ${errorMessage}`);
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Email API Route

```typescript
// app/api/send-registration-email/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateRegistrationEmailHTML, type RegistrationEmailData } from '@/lib/email-template';

// Create a transporter using your email service
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
      to: 'peternnamani001@gmail.com',
      subject: `New Volunteer Registration - ${emailData.firstName} ${emailData.lastName}`,
      html: htmlContent,
      replyTo: emailData.email,
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
```

---

## Email Template Function

```typescript
// lib/email-template.ts - Simplified Example

export interface RegistrationEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  localGovernment: string;
  refereeFullName: string;
  refereeEmail: string;
  refereePhone: string;
  refereeRole: string;
  photoFilename?: string;
}

export function generateRegistrationEmailHTML(data: RegistrationEmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* Professional styling with purple gradient */
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px;
          text-align: center;
        }
        .section {
          margin: 30px 0;
          padding: 20px;
          border-bottom: 1px solid #eee;
        }
        .donation-section {
          background: linear-gradient(135deg, #667eea08 0%, #764ba208 100%);
          border-left: 4px solid #667eea;
          padding: 20px;
          margin: 30px 0;
        }
        .donation-btn {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 6px;
          margin: 5px;
        }
      </style>
    </head>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div class="header">
        <h1>New Volunteer Registration</h1>
        <p>A new volunteer has submitted their registration form</p>
      </div>

      <div style="padding: 20px;">
        <!-- Personal Information Section -->
        <div class="section">
          <h2>📋 Personal Information</h2>
          <p><strong>Name:</strong> ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></p>
          <p><strong>Address:</strong> ${escapeHtml(data.address)}</p>
        </div>

        <!-- Location Section -->
        <div class="section">
          <h2>📍 Location</h2>
          <p><strong>State:</strong> ${escapeHtml(data.state)}</p>
          <p><strong>Local Government:</strong> ${escapeHtml(data.localGovernment)}</p>
        </div>

        <!-- Referee Section -->
        <div class="section">
          <h2>👤 Referee Details</h2>
          <p><strong>Name:</strong> ${escapeHtml(data.refereeFullName)}</p>
          <p><strong>Role:</strong> ${escapeHtml(data.refereeRole)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.refereeEmail)}">${escapeHtml(data.refereeEmail)}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${escapeHtml(data.refereePhone)}">${escapeHtml(data.refereePhone)}</a></p>
        </div>

        <!-- DONATION SECTION - YOUR REQUEST -->
        <div class="donation-section">
          <h3>🤝 Help Support Our Cause</h3>
          <p>
            If you're passionate about human rights and would like to contribute financially to our mission,
            we'd greatly appreciate your support. Every donation helps us continue our vital work.
          </p>
          <div>
            <a href="https://www.paypal.com/donate?hosted_button_id=XXXXX" class="donation-btn">💳 Donate via PayPal</a>
            <a href="#" class="donation-btn">🏦 Bank Transfer</a>
            <a href="#" class="donation-btn">📱 Mobile Money</a>
          </div>
        </div>

        <p style="color: #666; font-size: 14px;">
          Thank you for joining our volunteer network!
        </p>
      </div>

      <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666;">
        <p><strong>HRVC - Human Rights Volunteer Corps</strong></p>
        <p>© 2026 HRVC. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
```

---

## Environment Configuration

### `.env.local` (Your Secrets - Never Commit)
```bash
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
EMAIL_FROM=your-email@gmail.com
```

### `.env.example` (Template for Sharing)
```bash
# Email Configuration for Registration Form
# See EMAIL_SETUP.md for detailed setup instructions

# Gmail Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
EMAIL_FROM=your-email@gmail.com

# Alternative: SendGrid
# EMAIL_HOST=smtp.sendgrid.net
# EMAIL_PORT=587
# EMAIL_USER=apikey
# EMAIL_PASSWORD=your-sendgrid-api-key
```

---

## Usage Example

### How to Test Locally

```bash
# 1. Install dependencies
npm install

# 2. Configure .env.local with your Gmail credentials

# 3. Start development server
npm run dev

# 4. Navigate to http://localhost:3000/register

# 5. Fill out the form:
# - First Name: John
# - Last Name: Doe
# - Email: john.doe@example.com
# - Phone: +234 123 456 7890
# - Address: 123 Main Street, Lagos
# - State: Lagos
# - Local Gov: Ikeja
# - Referee Name: Jane Smith
# - Referee Role: Employer
# - Referee Email: jane@example.com
# - Referee Phone: +234 987 654 3210
# - Upload Photo: (optional)

# 6. Click "Complete Registration"

# 7. Check email inbox for the formatted email
```

---

## Error Handling Examples

### 1. Missing Required Fields
```
Request: {firstName: "John", lastName: "Doe"}
Response: 
{
  "success": false,
  "error": "Missing required fields: email, phone, address, state, localGovernment, refereeFullName, refereeEmail, refereePhone, refereeRole"
}
Status: 400
```

### 2. Successful Registration
```
Response:
{
  "success": true,
  "message": "Registration email sent successfully",
  "messageId": "<abc123@gmail.com>"
}
Status: 200
```

### 3. Email Sending Failed
```
Response:
{
  "success": false,
  "error": "Invalid login credentials"
}
Status: 500
```

---

## TypeScript Interfaces

```typescript
// Data structure for email template
export interface RegistrationEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  localGovernment: string;
  refereeFullName: string;
  refereeEmail: string;
  refereePhone: string;
  refereeRole: string;
  photoFilename?: string; // Optional
}

// API Response structure
interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
  messageId?: string;
}
```

---

## Customization Examples

### Change Recipient Email
```typescript
// In: app/api/send-registration-email/route.ts
// Line: to: 'peternnamani001@gmail.com'
// Change to:
to: 'your-email@example.com'
```

### Add Logo to Email Header
```html
<!-- In: lib/email-template.ts, inside .header div -->
<img src="https://your-domain.com/logo.png" alt="HRVC Logo" style="max-width: 200px;">
```

### Update Donation Links
```html
<!-- In: lib/email-template.ts -->
<!-- Before: -->
<a href="https://www.paypal.com/donate?hosted_button_id=XXXXX" class="donation-btn">💳 Donate via PayPal</a>

<!-- After: -->
<a href="https://www.paypal.com/donate?hosted_button_id=YOUR_ACTUAL_ID" class="donation-btn">💳 Donate via PayPal</a>
<a href="https://your-bank-link.com" class="donation-btn">🏦 Bank Transfer</a>
<a href="https://your-mobile-money-link.com" class="donation-btn">📱 Mobile Money</a>
```

### Change Email Subject
```typescript
// In: app/api/send-registration-email/route.ts
// Current:
subject: `New Volunteer Registration - ${emailData.firstName} ${emailData.lastName}`

// Can be changed to:
subject: `Welcome! New Volunteer Registration from ${emailData.firstName}`
```

---

## Testing with Different Environments

### Development (npm run dev)
- Uses .env.local credentials
- Errors shown in terminal
- Great for debugging

### Production (Deployed)
- Uses environment variables set in hosting platform
- Errors logged to service
- No .env.local file needed

### Using Different Email Services

```typescript
// SendGrid Example
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  auth: {
    user: 'apikey',
    pass: process.env.EMAIL_PASSWORD, // Your SendGrid API key
  },
});

// Brevo (Sendinblue) Example
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, // Your Brevo email
    pass: process.env.EMAIL_PASSWORD, // Your Brevo SMTP key
  },
});
```

---

This code reference covers all the key implementations for the registration email system!
