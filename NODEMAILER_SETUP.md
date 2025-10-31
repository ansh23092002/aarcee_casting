# Nodemailer Setup Guide for Quotation System

## Overview
The quotation system is now ready to send emails using Nodemailer. Follow these steps to configure email sending.

## Installation

First, install Nodemailer:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Addresses
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=sales@aarcee.com
QUOTATION_EMAIL=quotes@aarcee.com
```

## Gmail Setup (Recommended for Testing)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → 2-Step Verification
   - App passwords → Generate new app password
   - Select "Mail" and "Other (Custom name)"
   - Copy the generated password
   - Use this password as `SMTP_PASS`

## Alternative SMTP Providers

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
```

### Amazon SES
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-ses-access-key
SMTP_PASS=your-ses-secret-key
```

## Activation Steps

### For Quotation Emails

1. Open `src/app/api/send-quotation/route.ts`
2. Uncomment the Nodemailer code section (lines with `/* ... */`)
3. The code will automatically use environment variables
4. Restart your development server

### For Contact Form Emails

1. Open `src/app/api/send-email/route.ts`
2. Uncomment the Nodemailer code section
3. Restart your development server

## Testing

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the products page
3. Click "Request Quotation" on any product
4. Fill out the form and submit
5. Check your email inbox for the quotation request

## Features

### Quotation System Features:
- ✅ Product name automatically populated
- ✅ Product category included
- ✅ User can specify quantity and size
- ✅ Additional specifications field
- ✅ Email to company admin with quotation details
- ✅ Confirmation email to customer
- ✅ Beautiful email template with company branding

### Email Content Includes:
- Product details (name, category, quantity, size, specifications)
- Customer information (name, email, phone, company)
- Timestamp of request
- Professional HTML formatting

## Production Deployment

For production, use a reliable SMTP service:
- **SendGrid** (Recommended - 100 emails/day free)
- **Mailgun** (Good deliverability)
- **Amazon SES** (Cost-effective for high volume)
- **Postmark** (Transactional emails)

## Security Notes

⚠️ **Important**:
- Never commit `.env.local` to version control
- Add `.env.local` to `.gitignore`
- Use environment variables in production hosting
- Rotate SMTP passwords regularly
- Use app-specific passwords, not account passwords

## Troubleshooting

### Common Issues:

1. **"Invalid login" error**
   - Verify SMTP credentials
   - Check if 2FA is enabled (Gmail)
   - Use app-specific password

2. **"Connection timeout"**
   - Check SMTP_HOST and SMTP_PORT
   - Verify firewall settings
   - Try alternative port (587 or 465)

3. **Emails not received**
   - Check spam folder
   - Verify sender reputation
   - Check email service logs

## Support

For issues with the quotation system, contact the development team or open an issue in the repository.

## Next Steps

1. Install Nodemailer packages
2. Configure environment variables
3. Uncomment email code in API routes
4. Test the system
5. Configure production SMTP service
6. Deploy to production

---

**Note**: The quotation system is fully functional. Email sending is optional but recommended for production use.
