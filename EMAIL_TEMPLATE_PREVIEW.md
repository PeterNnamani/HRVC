# Email Template Preview

## What the Registration Email Looks Like

### Header Section
```
┌─────────────────────────────────────────┐
│                                         │
│    ✓ New Registration Received          │
│                                         │
│    New Volunteer Registration            │
│                                         │
│  A new volunteer has submitted their     │
│      registration form                  │
│                                         │
│          (Purple Gradient Background)    │
└─────────────────────────────────────────┘
```

### Main Content - Organized Sections

#### 📋 Personal Information
- **First Name:** John
- **Last Name:** Doe
- **Email:** john@example.com (clickable link)
- **Phone:** +234 123 456 7890 (clickable link)
- **Address:** 123 Main Street, Lagos

#### 📍 Location
- **State:** Lagos
- **Local Government:** Ikeja

#### 👤 Referee Information
- **Full Name:** Jane Smith
- **Role:** Employer
- **Email:** jane@example.com (clickable link)
- **Phone:** +234 987 654 3210 (clickable link)

#### 📷 Photo
- **Filename:** profile_photo.jpg

---

### 🤝 Donation/Support Section (As Requested)

```
╔════════════════════════════════════════════╗
║                                            ║
║  🤝 Help Support Our Cause                 ║
║                                            ║
║  If you're passionate about human rights   ║
║  and would like to contribute financially  ║
║  to our mission, we'd greatly appreciate   ║
║  your support. Every donation helps us     ║
║  continue our vital work in advocacy and   ║
║  protection.                               ║
║                                            ║
║  ┌──────────────  ┌──────────────┐        ║
║  │ 💳 Donate via  │ 🏦 Bank      │ 📱     ║
║  │    PayPal      │   Transfer   │ Mobile │
║  └────────────────┴──────────────┘        ║
║       (Purple Gradient Buttons)            ║
║                                            ║
╚════════════════════════════════════════════╝
```

---

## Design Features

### Colors
- **Primary:** Purple gradient (#667eea → #764ba2)
- **Accent:** Light purple backgrounds
- **Text:** Dark gray (#333)
- **Links:** Purple (clickable)

### Typography
- **Header:** Large, bold, white text
- **Section Titles:** Bold purple
- **Labels:** Small, uppercase, purple
- **Values:** Regular, dark gray

### Layout
- **Max Width:** 600px (perfect for email)
- **Padding:** Generous spacing
- **Borders:** Subtle separators
- **Shadows:** Professional depth

### Responsive
- Works on desktop, tablet, and mobile
- Single column layout
- Readable on all screen sizes
- Compatible with all email clients

---

## Button Styling

### Donation Buttons
- **Background:** Purple gradient
- **Text:** White, bold
- **Hover:** Slight upward animation (in preview)
- **Shape:** Rounded corners
- **Padding:** Comfortable click area

---

## Special Features

✨ **Professional Badges**
- "✓ New Registration Received" badge at top

✨ **Clickable Elements**
- Email addresses link to email client
- Phone numbers link to phone dialer
- Buttons link to donation pages

✨ **Well-Organized**
- Clear section breaks
- Icons for visual interest (📋 📍 👤 📷 🤝)
- Proper information hierarchy

✨ **Secure**
- HTML properly escaped (no injection risks)
- Server-side rendering (credentials safe)
- No external dependencies in email

---

## Email Flow

```
Volunteer fills form
         ↓
Clicks "Complete Registration"
         ↓
Data sent to /api/send-registration-email
         ↓
Server validates all fields
         ↓
HTML template generated with data
         ↓
Email sent via SMTP to peternnamani001@gmail.com
         ↓
User sees "✓ Registration successful!" message
         ↓
Form is cleared and ready for next volunteer
```

---

## Customization Tips

### To Change Colors:
Edit the `background` and `color` properties in `lib/email-template.ts`

### To Add Sections:
Add more `.section` divs with `.section-title` and `.info-grid`

### To Modify Donation Section:
Update the donation button links and text

### To Add Logo:
Add an `<img>` tag in the header section

### To Change Email Subject:
Edit the `subject` line in `app/api/send-registration-email/route.ts`

---

## Browser/Client Compatibility

| Client | Compatibility |
|--------|---------------|
| Gmail | ✅ Full support |
| Outlook | ✅ Full support |
| Apple Mail | ✅ Full support |
| Yahoo | ✅ Full support |
| Mobile Apps | ✅ Responsive design |

---

## Example Email Raw HTML

The template generates clean, inline CSS HTML like:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* All CSS is inlined for email compatibility */
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><!-- Header content --></div>
    <div class="content">
      <div class="section"><!-- Personal Info --></div>
      <div class="section"><!-- Location --></div>
      <div class="section"><!-- Referee --></div>
      <div class="donation-section"><!-- Donations --></div>
    </div>
    <div class="footer"><!-- Footer --></div>
  </div>
</body>
</html>
```

All CSS is inline, so email clients render it consistently.

---

This email template provides a professional, branded experience while clearly showcasing the volunteer's information and donation opportunities!
