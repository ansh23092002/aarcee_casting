import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    console.log("Server using credentials:", process.env.SMTP_USER);

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Ensure environment variables are present
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP credentials missing in environment variables");
      return NextResponse.json(
        { error: "Email service not configured properly" },
        { status: 500 }
      );
    }
    const smtpUser = process.env.SMTP_USER 
    const smtpPass = process.env.SMTP_PASS 
    // Create a transporter using Gmail service and App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass, 
      },
    });

    // Send the email
    const mailOptions = {
      from: smtpUser,
      to: smtpUser,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission - Aarcee Casting</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #8E1616 0%, #B91C1C 100%); padding: 30px 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px;">Aarcee Casting</h1>
              <p style="color: #E8C999; margin: 5px 0 0 0; font-size: 14px; font-weight: 300;">Precision Steel Casting Solutions</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #8E1616; margin: 0 0 30px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #E8C999; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>

              <div style="background-color: #F8F9FA; border-left: 4px solid #8E1616; padding: 25px; margin: 25px 0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 16px; font-weight: 600;">Customer Information</h3>

                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #555555; width: 120px;">Name:</td>
                    <td style="padding: 8px 0; color: #333333;">${name}</td>
                  </tr>
                  <tr style="background-color: #ffffff;">
                    <td style="padding: 8px 0; font-weight: 600; color: #555555;">Email:</td>
                    <td style="padding: 8px 0; color: #333333;">
                      <a href="mailto:${email}" style="color: #8E1616; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #555555;">Phone:</td>
                    <td style="padding: 8px 0; color: #333333;">${phone || "Not provided"}</td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #F8F9FA; border-left: 4px solid #E8C999; padding: 25px; margin: 25px 0;">
                <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">Message</h3>
                <div style="background-color: #ffffff; padding: 20px; border-radius: 5px; border: 1px solid #E8C999; color: #333333; line-height: 1.6;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <!-- Footer -->
              <div style="border-top: 1px solid #E8C999; padding-top: 20px; margin-top: 30px;">
                <p style="color: #666666; font-size: 12px; margin: 0; text-align: center;">
                  This message was sent from the Aarcee Casting website contact form<br>
                  Received on: ${new Date().toLocaleString()}<br>
                  <span style="color: #8E1616; font-weight: 600;">Please respond within 24 hours</span>
                </p>
              </div>
            </div>

            <!-- Company Footer -->
            <div style="background-color: #F8F9FA; padding: 20px; text-align: center; border-top: 1px solid #E8C999;">
              <p style="margin: 0; color: #666666; font-size: 12px;">
                Aarcee Casting | Excellence in Steel Casting Since 1985<br>
                <a href="mailto:info@aarceecasting.com" style="color: #8E1616; text-decoration: none;">info@aarceecasting.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    console.log("Sending email with options:", mailOptions);

    await transporter.sendMail(mailOptions);

    // Send thank you email to client
    const thankYouMailOptions = {
      from: smtpUser,
      to: email,
      subject: `Thank You for Contacting Aarcee Casting - ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You - Aarcee Casting</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #8E1616 0%, #B91C1C 100%); padding: 30px 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px;">Aarcee Casting</h1>
              <p style="color: #E8C999; margin: 5px 0 0 0; font-size: 14px; font-weight: 300;">Precision Steel Casting Solutions</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #8E1616; margin: 0 0 20px 0; font-size: 22px; font-weight: 600; text-align: center;">
                Thank You for Your Interest!
              </h2>

              <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0; text-align: center;">
                Dear ${name},
              </p>

              <div style="background-color: #F8F9FA; border-left: 4px solid #8E1616; padding: 25px; margin: 25px 0;">
                <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">
                  Thank you for reaching out to Aarcee Casting. We have received your message and appreciate your interest in our precision steel casting solutions.
                </p>

                <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">
                  Our team of experts will review your inquiry carefully and get back to you within 24 hours with detailed information about how we can help with your steel casting requirements.
                </p>

                <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0;">
                  We look forward to discussing your project and providing you with the highest quality casting solutions.
                </p>
              </div>

              <div style="background-color: #F8F9FA; border-left: 4px solid #E8C999; padding: 20px; margin: 25px 0;">
                <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">Your Message Summary:</h3>
                <div style="background-color: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #E8C999; color: #333333; line-height: 1.6;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <!-- Contact Information -->
<div style="background-color: #f7f7f7; padding: 24px; margin: 24px 0; border-radius: 8px; border: 1px solid #e0e0e0;">
  <h3 style="color: #222222; margin: 0 0 16px 0; font-size: 18px; font-weight: 600; text-align: center;">
    Contact Information
  </h3>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <tr>
      <td style="padding: 8px 0; font-weight: 600; color: #444444; text-align: center;">📞 Phone:</td>
      <td style="padding: 8px 0; color: #222222; text-align: center;">+91-XXXXXXXXXX</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: 600; color: #444444; text-align: center;">📧 Email:</td>
      <td style="padding: 8px 0; text-align: center;">
        <a href="mailto:info@aarceecasting.com" style="color: #1a73e8; text-decoration: none;">
          info@aarceecasting.com
        </a>
      </td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: 600; color: #444444; text-align: center;">🏢 Address:</td>
      <td style="padding: 8px 0; color: #222222; text-align: center;">
        [Your Company Address]
      </td>
    </tr>
  </table>
</div>


              <!-- Footer -->
              <div style="border-top: 1px solid #E8C999; padding-top: 20px; margin-top: 30px;">
                <p style="color: #666666; font-size: 12px; margin: 0; text-align: center;">
                  Best regards,<br>
                  <span style="color: #8E1616; font-weight: 600; font-size: 14px;">The Aarcee Casting Team</span><br>
                  Excellence in Steel Casting Since 1985
                </p>
              </div>
            </div>

            <!-- Company Footer -->
            <div style="background-color: #F8F9FA; padding: 20px; text-align: center; border-top: 1px solid #E8C999;">
              <p style="margin: 0; color: #666666; font-size: 12px;">
                Aarcee Casting | Precision Steel Casting Solutions<br>
                <a href="mailto:info@aarceecasting.com" style="color: #8E1616; text-decoration: none;">info@aarceecasting.com</a> |
                <a href="https://www.aarceecasting.com" style="color: #8E1616; text-decoration: none;">www.aarceecasting.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    console.log("Sending thank you email to client:", email);
    await transporter.sendMail(thankYouMailOptions);

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully! We will get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
