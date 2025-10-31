import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      company, 
      quantity, 
      size, 
      specifications, 
      productName, 
      productCategory 
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !quantity || !size || !productName) {
      return NextResponse.json(
        { error: 'Name, email, phone, quantity, size, and product name are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Nodemailer
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER || 'your-email@gmail.com',
        pass: process.env.SMTP_PASS || 'your-app-password',
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER || 'your-email@gmail.com',
      to: 'anshshrama60oo@gmail.com',
      subject: `New Quotation Request for ${productName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8E1616; border-bottom: 3px solid #E8C999; padding-bottom: 10px;">
            New Quotation Request
          </h2>
          
          <div style="background-color: #F8EEDF; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #8E1616; margin-top: 0;">Product Details</h3>
            <p><strong>Product Name:</strong> ${productName}</p>
            <p><strong>Category:</strong> ${productCategory}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Size/Dimensions:</strong> ${size}</p>
            ${specifications ? `<p><strong>Specifications:</strong><br/>${specifications.replace(/\n/g, '<br/>')}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #E8C999;">
            <h3 style="color: #8E1616; margin-top: 0;">Customer Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Request received on: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER || 'your-email@gmail.com',
      to: email,
      subject: `Quotation Request Received - ${productName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8E1616;">Thank You for Your Quotation Request</h2>
          <p>Dear ${name},</p>
          <p>We have received your quotation request for <strong>${productName}</strong>.</p>
          
          <div style="background-color: #F8EEDF; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #8E1616; margin-top: 0;">Your Request Summary:</h3>
            <p><strong>Product:</strong> ${productName}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Size:</strong> ${size}</p>
          </div>
          
          <p>Our team will review your request and get back to you within 24-48 hours with a detailed quotation.</p>
          <p>If you have any urgent queries, please feel free to contact us directly.</p>
          
          <p style="margin-top: 30px;">Best regards,<br/><strong>Aarcee Casting Team</strong></p>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        success: true,
        message: 'Your quotation request has been submitted successfully! We will contact you soon with a detailed quote.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing quotation request:', error);
    return NextResponse.json(
      { error: 'Failed to submit quotation request. Please try again later.' },
      { status: 500 }
    );
  }
}
