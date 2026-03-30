# System Architecture Diagram

## Registration Email System Flow

```
┌──────────────────────────────────────────────────────────────────────┐
│                        CLIENT SIDE (Browser)                         │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │          VolunteerRegistrationForm Component                │   │
│  │  ┌────────────────────────────────────────────────────────┐ │   │
│  │  │ Form Fields:                                           │ │   │
│  │  │ • First Name, Last Name                                │ │   │
│  │  │ • Email, Phone, Address                                │ │   │
│  │  │ • State, Local Government                              │ │   │
│  │  │ • Photo Upload                                         │ │   │
│  │  │ • Referee Information (4 fields)                       │ │   │
│  │  └────────────────────────────────────────────────────────┘ │   │
│  │                                                             │   │
│  │  ┌────────────────────────────────────────────────────────┐ │   │
│  │  │ "Complete Registration" Button                         │ │   │
│  │  │ onClick → handleSubmit()                               │ │   │
│  │  └────────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                            │                                        │
│                            │ Form Data (JSON)                       │
│                            │ POST /api/send-registration-email      │
│                            ↓                                        │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ Response Handling                                           │   │
│  │ • Success: Show alert + reset form                          │   │
│  │ • Error: Show error message                                 │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└──────────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP POST
                              │ JSON Payload
                              ↓
┌──────────────────────────────────────────────────────────────────────┐
│                        SERVER SIDE (Next.js)                         │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐│
│  │ API Route: /api/send-registration-email/route.ts             ││
│  │                                                                ││
│  │ POST Handler:                                                 ││
│  │ 1. Parse request JSON                                         ││
│  │ 2. Validate all required fields                               ││
│  │ 3. Create RegistrationEmailData object                        ││
│  │ 4. Call generateRegistrationEmailHTML()                       ││
│  │ 5. Create mail options                                        ││
│  │ 6. Send via nodemailer transporter                            ││
│  │ 7. Return success/error response                              ││
│  └────────────────────────────────────────────────────────────────┘│
│                            │                                        │
│                            │ generateRegistrationEmailHTML()        │
│                            ↓                                        │
│  ┌────────────────────────────────────────────────────────────────┐│
│  │ lib/email-template.ts                                          ││
│  │                                                                ││
│  │ export function generateRegistrationEmailHTML(data):          ││
│  │ • Receives RegistrationEmailData                              ││
│  │ • Returns HTML string with:                                   ││
│  │   - Beautiful styling (inline CSS)                            ││
│  │   - All volunteer information                                 ││
│  │   - Professional donation section                             ││
│  │   - Secure HTML escaping                                      ││
│  └────────────────────────────────────────────────────────────────┘│
│                            │                                        │
│                            │ HTML Email Content                    │
│                            ↓                                        │
│  ┌────────────────────────────────────────────────────────────────┐│
│  │ Nodemailer SMTP Transporter                                   ││
│  │                                                                ││
│  │ Configuration (from .env.local):                              ││
│  │ • host: EMAIL_HOST (smtp.gmail.com)                           ││
│  │ • port: EMAIL_PORT (587)                                      ││
│  │ • secure: EMAIL_SECURE (false for 587)                        ││
│  │ • auth.user: EMAIL_USER (your-email@gmail.com)                ││
│  │ • auth.pass: EMAIL_PASSWORD (app password)                    ││
│  └────────────────────────────────────────────────────────────────┘│
│                            │                                        │
│                            │ SMTP Protocol                         │
│                            ↓                                        │
│  ┌────────────────────────────────────────────────────────────────┐│
│  │ Mail Options:                                                  ││
│  │ • from: EMAIL_FROM                                            ││
│  │ • to: peternnamani001@gmail.com                               ││
│  │ • subject: "New Volunteer Registration - [Name]"              ││
│  │ • html: (generated HTML)                                      ││
│  │ • replyTo: volunteer's email                                  ││
│  └────────────────────────────────────────────────────────────────┘│
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
                              │
                              │ SMTP Connection
                              │
                              ↓
┌──────────────────────────────────────────────────────────────────────┐
│                         EXTERNAL MAIL SERVER                         │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Gmail SMTP Server: smtp.gmail.com:587                              │
│  • Authenticates with EMAIL_USER and EMAIL_PASSWORD                │
│  • Receives email from transporter                                  │
│  • Relays email to recipient                                        │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
                              │
                              │ Email Delivery
                              │
                              ↓
┌──────────────────────────────────────────────────────────────────────┐
│                        RECIPIENT INBOX                               │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Email received: peternnamani001@gmail.com                          │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐│
│  │ EMAIL CONTENT                                                  ││
│  ├────────────────────────────────────────────────────────────────┤│
│  │                                                                ││
│  │  ✓ New Registration Received                                  ││
│  │  New Volunteer Registration                                   ││
│  │                                                                ││
│  │  [Purple Gradient Header]                                     ││
│  │                                                                ││
│  │  📋 Personal Information                                      ││
│  │  • Names, email, phone, address                               ││
│  │                                                                ││
│  │  📍 Location                                                  ││
│  │  • State and local government                                 ││
│  │                                                                ││
│  │  👤 Referee Information                                       ││
│  │  • Full contact details                                       ││
│  │                                                                ││
│  │  📷 Photo                                                     ││
│  │  • Filename                                                   ││
│  │                                                                ││
│  │  ╔════════════════════════════════════════════╗              ││
│  │  ║  🤝 Help Support Our Cause               ║              ││
│  │  ║                                            ║              ││
│  │  ║  [Call to action text about donations]   ║              ││
│  │  ║                                            ║              ││
│  │  ║  💳 Donate PayPal  🏦 Bank Transfer      ║              ││
│  │  ║  📱 Mobile Money                          ║              ││
│  │  ║                                            ║              ││
│  │  ╚════════════════════════════════════════════╝              ││
│  │                                                                ││
│  │  [Professional Footer with HRVC info]                         ││
│  │                                                                ││
│  └────────────────────────────────────────────────────────────────┘│
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## File Dependencies

```
components/
  └── VolunteerRegistrationForm.tsx
        │
        ├── Imports from: app/api/send-registration-email
        │   POST /api/send-registration-email
        │
        └── Uses: UI Components
            • Input, Label, Button
            • Select, SelectTrigger, SelectValue
            • Card

app/api/
  └── send-registration-email/
      └── route.ts
            │
            ├── Imports: nodemailer
            │
            ├── Imports from: lib/email-template
            │   generateRegistrationEmailHTML()
            │   RegistrationEmailData interface
            │
            ├── Reads from: .env.local
            │   • EMAIL_HOST
            │   • EMAIL_PORT
            │   • EMAIL_SECURE
            │   • EMAIL_USER
            │   • EMAIL_PASSWORD
            │   • EMAIL_FROM
            │
            └── Sends to: SMTP Server
                Gmail SMTP (smtp.gmail.com:587)

lib/
  └── email-template.ts
        │
        ├── Exports: generateRegistrationEmailHTML()
        │
        ├── Exports: RegistrationEmailData interface
        │
        └── Contains: HTML template with inline CSS

Config Files:
  ├── .env.local (local development credentials - not in git)
  ├── .env.example (template for configuration)
  ├── .gitignore (protects .env.local)
  └── package.json (includes nodemailer dependency)
```

---

## Data Flow Diagram

```
                    FORM SUBMISSION
                         │
                         ↓
        ┌────────────────────────────────┐
        │   Volunteer Registration Data   │
        ├────────────────────────────────┤
        │ firstName                       │
        │ lastName                        │
        │ email                           │
        │ phone                           │
        │ address                         │
        │ state                           │
        │ localGovernment                 │
        │ refereeFullName                 │
        │ refereeEmail                    │
        │ refereePhone                    │
        │ refereeRole                     │
        │ photoFilename (optional)        │
        └────────────────────────────────┘
                         │
                         │ JSON Serialization
                         ↓
        ┌────────────────────────────────┐
        │      HTTP POST Request           │
        │  /api/send-registration-email   │
        │  Content-Type: application/json │
        └────────────────────────────────┘
                         │
                         │ Server Processing
                         ↓
        ┌────────────────────────────────┐
        │   Field Validation              │
        │ (all required fields present?)  │
        └────────────────────────────────┘
                         │ Valid
                         ↓
        ┌────────────────────────────────┐
        │ RegistrationEmailData Object    │
        │ (TypeScript interface)          │
        └────────────────────────────────┘
                         │
                         │
                         ↓
        ┌────────────────────────────────┐
        │ generateRegistrationEmailHTML()  │
        │ (email-template.ts)             │
        └────────────────────────────────┘
                         │
                         │ Returns
                         ↓
        ┌────────────────────────────────┐
        │   HTML Email String             │
        │  (with inline CSS styling)      │
        ├────────────────────────────────┤
        │ • Purple gradient design        │
        │ • All volunteer information     │
        │ • Donation section              │
        │ • Professional formatting       │
        └────────────────────────────────┘
                         │
                         │ Creates
                         ↓
        ┌────────────────────────────────┐
        │    Mail Options Object          │
        ├────────────────────────────────┤
        │ from: EMAIL_FROM                │
        │ to: recipient email             │
        │ subject: "[Name] Registration"  │
        │ html: <HTML content>            │
        │ replyTo: volunteer email        │
        └────────────────────────────────┘
                         │
                         │
                         ↓
        ┌────────────────────────────────┐
        │ transporter.sendMail()          │
        │ (Nodemailer)                    │
        └────────────────────────────────┘
                         │
                         │ SMTP Connection
                         │ (Gmail SMTP)
                         ↓
        ┌────────────────────────────────┐
        │   Email Sent Successfully       │
        │   (messageId returned)          │
        └────────────────────────────────┘
                         │
                         │ Response
                         ↓
        ┌────────────────────────────────┐
        │   HTTP 200 OK Response          │
        │  { success: true, messageId }   │
        └────────────────────────────────┘
                         │
                         │ Received by Client
                         ↓
        ┌────────────────────────────────┐
        │   User Sees Success Message     │
        │  "✓ Registration successful!"   │
        └────────────────────────────────┘
                         │
                         │ Form Reset
                         ↓
        ┌────────────────────────────────┐
        │  Empty Form Ready for Next      │
        │       Volunteer                 │
        └────────────────────────────────┘
```

---

## Technology Stack Layers

```
┌─────────────────────────────────────────────┐
│         USER INTERFACE LAYER                │
│  React Components (TypeScript/TSX)          │
│  • VolunteerRegistrationForm                │
│  • Form validation and UX                   │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│       CLIENT-SERVER COMMUNICATION           │
│  HTTP/HTTPS with JSON                       │
│  • fetch() API calls                        │
│  • Request/Response handling                │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│         APPLICATION SERVER LAYER            │
│  Next.js App Router                         │
│  • API routes (/api/*)                      │
│  • Server-side logic                        │
│  • Environment variable access              │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│         EMAIL GENERATION LAYER              │
│  Template Engine (Custom HTML)              │
│  • Dynamic HTML generation                  │
│  • Data-driven content                      │
│  • Style application (inline CSS)           │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│       EMAIL TRANSPORT LAYER                 │
│  Nodemailer SMTP Client                     │
│  • SMTP authentication                      │
│  • Email construction                       │
│  • Delivery orchestration                   │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│        EXTERNAL MAIL SERVER                 │
│  Gmail SMTP (smtp.gmail.com:587)            │
│  • Authentication                           │
│  • Email relay                              │
│  • Delivery to recipient                    │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│       EMAIL CLIENT (RECIPIENT)              │
│  Gmail, Outlook, Apple Mail, etc.           │
│  • Email display                            │
│  • User interaction                         │
│  • Action links (donate, reply)             │
└─────────────────────────────────────────────┘
```

---

This architecture provides a robust, secure email system integrated with your Next.js registration form!
