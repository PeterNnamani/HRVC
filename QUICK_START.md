# Quick Start: Registration Email

## 5-Minute Setup

### 1. Get Gmail App Password
- Go to: https://myaccount.google.com/apppasswords
- Select "Mail" → "Windows Computer" (or your device)
- Copy the 16-character password

### 2. Update `.env.local`
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=paste-16-char-password-here
EMAIL_FROM=your-gmail@gmail.com
```

### 3. Test
```bash
npm run dev
```
- Go to `/register` page
- Fill out form and submit
- Check your email inbox

---

## What Happens When Form is Submitted?

1. Form data goes to `/api/send-registration-email`
2. Server validates all fields
3. Beautiful HTML email is generated
4. Email is sent to `peternnamani001@gmail.com`
5. User sees success message
6. Form is cleared

---

## Email Includes

✅ Volunteer's full details
✅ Location information  
✅ Referee information
✅ Photo filename
✅ **Professional donation section**
✅ Links to donate via PayPal, Bank, or Mobile Money

---

## Customize Donation Links

Edit `lib/email-template.ts`, find the donation buttons section:
```html
<a href="https://www.paypal.com/donate?hosted_button_id=XXXXX" class="donation-btn">
```

Replace with your actual links!

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Email not sending | Check `.env.local` exists with correct values |
| Gmail connection fails | Use app password, not regular password |
| Email formatting broken | Check HTML in email client (usually fine) |
| Want to change recipient | Edit `to:` in `app/api/send-registration-email/route.ts` |

---

## Files Created

```
lib/email-template.ts                          - Email template
app/api/send-registration-email/route.ts       - Email API
.env.local                                      - Your credentials
.env.example                                    - Template reference
EMAIL_SETUP.md                                  - Full guide
IMPLEMENTATION_SUMMARY.md                       - What was done
```

---

Ready to go! 🚀
