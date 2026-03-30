# HRVC Registration Email Setup Guide

## Overview
When volunteers submit the registration form, an email is automatically sent to `peternnamani001@gmail.com` with a beautifully formatted HTML template containing:
- Volunteer's personal information
- Location details
- Referee information
- A professional donation/support section

## Setup Instructions

### 1. Configure Email Service (Gmail Recommended)

#### Using Gmail:
1. **Enable 2-Factor Authentication:**
   - Go to [Google Account Settings](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled

2. **Generate App Password:**
   - Visit [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer"
   - Google will generate a 16-character password
   - Copy this password

3. **Update `.env.local`:**
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   EMAIL_FROM=your-email@gmail.com
   ```

#### Using Other Email Services:
- **SendGrid:** Update HOST to `smtp.sendgrid.net`, USER to `apikey`, and PASSWORD to your API key
- **Brevo:** Update HOST to `smtp-relay.brevo.com`, PORT to `587`
- **Office 365:** Update HOST to `smtp.office365.com`, PORT to `587`

### 2. File Structure

New files created:
```
lib/
  └── email-template.ts          # HTML email template generator
app/
  └── api/
      └── send-registration-email/
          └── route.ts            # API endpoint for sending emails
.env.local                         # Email credentials (DO NOT COMMIT)
.env.example                       # Template for environment variables
```

### 3. How It Works

1. **Form Submission:**
   - User fills out the registration form and clicks "Complete Registration"
   - Form data is validated on the client side

2. **API Request:**
   - Registration data is sent to `/api/send-registration-email`
   - Server-side validation checks all required fields

3. **Email Generation:**
   - Beautiful HTML email is generated using the template
   - Includes all volunteer information with proper formatting
   - Features a donation/support section

4. **Email Sending:**
   - Email is sent to `peternnamani001@gmail.com`
   - Reply-To header is set to the volunteer's email
   - Success/error message is shown to the user

### 4. Email Template Features

The email template includes:
- **Header:** Gradient purple background with "New Volunteer Registration" title
- **Personal Information:** Name, email, phone, address
- **Location:** State and local government
- **Referee Details:** Complete referee information with clickable email/phone
- **Photo Info:** Filename of uploaded photo (if any)
- **Donation Section:** 
  - Eye-catching call-to-action
  - Links for PayPal, Bank Transfer, and Mobile Money
  - Can be customized to link to your actual donation pages
- **Professional Footer:** Organization info and copyright

### 5. Customization

#### Update Donation Links:
In `lib/email-template.ts`, find this section:
```html
<a href="https://www.paypal.com/donate?hosted_button_id=XXXXX" class="donation-btn">💳 Donate via PayPal</a>
<a href="#" class="donation-btn">🏦 Bank Transfer</a>
<a href="#" class="donation-btn">📱 Mobile Money</a>
```

Replace the URLs with your actual donation links.

#### Change Recipient Email:
In `app/api/send-registration-email/route.ts`, update:
```typescript
to: 'peternnamani001@gmail.com', // Change this email address
```

#### Customize Email Template:
Edit `lib/email-template.ts` to:
- Change colors (currently purple gradient)
- Add/remove sections
- Modify styling
- Add your logo or branding

### 6. Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_HOST` | SMTP server address | `smtp.gmail.com` |
| `EMAIL_PORT` | SMTP port | `587` |
| `EMAIL_SECURE` | Use TLS/SSL | `false` (for port 587), `true` (for port 465) |
| `EMAIL_USER` | Email account | `your-email@gmail.com` |
| `EMAIL_PASSWORD` | Email password or app password | Your app password |
| `EMAIL_FROM` | Sender email address | `your-email@gmail.com` |

### 7. Testing

1. **Local Testing:**
   - Fill out the registration form with test data
   - Submit the form
   - Check for success message
   - Verify email arrives in inbox

2. **Verify Email Content:**
   - Check HTML formatting
   - Verify all form data appears correctly
   - Test clickable email/phone links
   - Check donation links work

### 8. Troubleshooting

**Email not sending?**
- Check `.env.local` file exists and has correct credentials
- Verify EMAIL_HOST and EMAIL_PORT are correct for your service
- For Gmail: ensure App Password (not regular password) is used
- Check server logs: `npm run dev` shows errors

**Gmail connection fails?**
- Verify 2-Factor Authentication is enabled
- Generate new App Password
- Ensure you're using the 16-character app password, not your account password

**Email arrives but formatting is broken?**
- Check HTML in email client (some clients have CSS limitations)
- Test in different email clients (Gmail, Outlook, Apple Mail)
- CSS is inlined so should work in most clients

**Want to see the email template?**
- Check `lib/email-template.ts` for HTML and styles
- Modify styles in the `<style>` section

### 9. Security Notes

- **Never commit `.env.local`** - This file contains sensitive credentials
- `.env.local` is already in `.gitignore`
- Use app-specific passwords, not your main account password
- Regenerate app passwords periodically for security
- Email credentials are only used server-side (safe)

### 10. Next Steps

1. Fill in `.env.local` with your email credentials
2. Test the form with sample data
3. Customize donation links in the email template
4. Deploy to production
5. Monitor email delivery

## Support

For issues or questions about the email setup, check:
- Email service provider's documentation
- API route logs in server console
- Browser console for client-side errors
- Email spam folder if email doesn't arrive

---

**Created:** March 26, 2026
**Email Library:** Nodemailer v8.0.4
