# 📧 Email Setup Guide - Aarcee Casting

## ✅ Email Configuration Complete

Your email has been configured to: **anshshrama60oo@gmail.com**

## 🚀 Quick Setup Steps

### 1. Install Nodemailer (if not already installed)
```bash
npm install nodemailer @types/nodemailer
```

### 2. Gmail App Password Setup

Since you're using Gmail, you need to generate an **App Password** (NOT your regular Gmail password):

#### Step-by-Step:
1. **Go to Google Account**: https://myaccount.google.com/
2. **Enable 2-Step Verification**:
   - Click on "Security" in the left menu
   - Find "2-Step Verification" and enable it
   - Follow the setup process
3. **Create App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: **Mail**
   - Select device: **Other (Custom name)** → Type "Aarcee Casting Website"
   - Click "Generate"
   - Copy the **16-character password** (it will look like: `abcd efgh ijkl mnop`)
4. **Update `.env.local` file**:
   - Open `.env.local` in your project root
   - Replace `your-16-character-app-password-here` with the generated password
   - Remove spaces from the password

### 3. Update Environment Variables

Open `.env.local` and set:
```env
SMTP_USER=anshshrama60oo@gmail.com
SMTP_PASS=your-generated-app-password-here
CONTACT_EMAIL=anshshrama60oo@gmail.com
```

### 4. Restart Development Server

After updating `.env.local`, restart your Next.js server:
```bash
# Stop the server (Ctrl+C)
# Start again
npm run dev
```

## 📝 What's Configured

### Contact Form (`/api/send-email`)
- Sends contact form submissions to: **anshshrama60oo@gmail.com**
- Includes: Name, Email, Phone, Message
- Styled HTML email with your brand colors

### Quotation Form (`/api/send-quotation`)
- Sends quotation requests to: **anshshrama60oo@gmail.com**
- Includes: Product details, Customer info, Specifications
- Sends confirmation email to customer
- Styled HTML email with your brand colors

## 🎨 Email Features

### Admin Notification Email:
✅ Professional HTML template  
✅ Brand colors (#8E1616, #E8C999)  
✅ All form data organized  
✅ Timestamp  
✅ Clickable customer email  

### Customer Confirmation Email (Quotation):
✅ Thank you message  
✅ Request summary  
✅ Company branding  
✅ Professional response time commitment  

## 🔒 Security Notes

1. **Never commit `.env.local` to Git** (already in .gitignore ✅)
2. **Use App Password**, not regular Gmail password
3. **App Password** is more secure and allows app-specific access
4. Keep your `.env.local` file private

## 🧪 Testing

Once setup is complete, test the forms:

1. **Contact Form**: Fill and submit from homepage
2. **Quotation Form**: Click "Request Quotation" on any product

You should receive emails at: **anshshrama60oo@gmail.com**

## ⚠️ Troubleshooting

### Email not sending?
- Check if `nodemailer` is installed: `npm list nodemailer`
- Verify App Password in `.env.local` (16 characters, no spaces)
- Restart Next.js server after changing `.env.local`
- Check browser console for errors

### Gmail blocking emails?
- Make sure 2-Step Verification is enabled
- Use App Password, not regular password
- Check Gmail "Less secure app access" is OFF (we're using App Password instead)

### "Invalid login" error?
- Regenerate App Password
- Make sure there are no spaces in the password
- Verify email address is correct

## 📱 Production Deployment

When deploying (Vercel, Netlify, etc.), add these environment variables:

```
SMTP_USER=anshshrama60oo@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=anshshrama60oo@gmail.com
```

## 🎉 All Set!

Your email system is ready to receive:
- ✉️ Contact form submissions
- 📋 Quotation requests
- 🔔 Customer confirmations

---

**Email Recipient**: anshshrama60oo@gmail.com  
**Last Updated**: ${new Date().toLocaleDateString()}
