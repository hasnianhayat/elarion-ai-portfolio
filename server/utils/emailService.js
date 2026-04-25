const nodemailer = require('nodemailer');

console.log('📧 Configuring company email: sales@elarionltd.com');
console.log(`Host: ${process.env.EMAIL_HOST}`);
console.log(`Port: ${process.env.EMAIL_PORT}`);

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  requireTLS: true,
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log('❌ Company email connection error:', error.message);
  } else {
    console.log('✅ Company email is ready to send messages');
  }
});

const sendAutoReply = async (lead) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return;
  }

  const templates = {
    general_contact: {
      subject: 'Thank you for contacting Elarion',
      html: `
        <h2>Hi ${lead.name}!</h2>
        <p>Thank you for reaching out to Elarion. We've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>The Elarion Team</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Sent from sales@elarionltd.com</p>
      `
    },
    ai_consultation: {
      subject: 'AI Consultation Request Received',
      html: `
        <h2>Hi ${lead.firstName}!</h2>
        <p>Thank you for your interest in our AI Agents. Our team will contact you soon to schedule your consultation.</p>
        <p>Best regards,<br>The Elarion AI Team</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Sent from sales@elarionltd.com</p>
      `
    },
    newsletter: {
      subject: 'Welcome to Elarion Newsletter!',
      html: `
        <h2>Welcome to Elarion!</h2>
        <p>You've successfully subscribed to our newsletter. You'll receive weekly insights on AI and automation.</p>
        <p>Best regards,<br>The Elarion Team</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Sent from sales@elarionltd.com</p>
      `
    }
  };

  const template = templates[lead.formType] || templates.general_contact;

  try {
    // AUTO-REPLY: Goes to the person who submitted the form
    await transporter.sendMail({
      from: `"Elarion" <${process.env.EMAIL_USER}>`,
      to: lead.email, // This sends to the form submitter (najeebkhanlaku@gmail.com)
      subject: template.subject,
      html: template.html
    });
    console.log(`✅ Auto-reply sent to ${lead.email}`);
  } catch (error) {
    console.log('❌ Failed to send auto-reply:', error.message);
  }
};

const sendAdminNotification = async (lead) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return;
  }

  const formTypeLabels = {
    general_contact: '📧 General Contact',
    ai_consultation: '🤖 AI Consultation',
    newsletter: '📰 Newsletter',
    demo_request: '📅 Demo Request'
  };

  try {
    // ADMIN NOTIFICATION: Goes ONLY to the company email (sales@elarionltd.com)
    await transporter.sendMail({
      from: `"Elarion System" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL, // This should be sales@elarionltd.com
      subject: `New Lead: ${formTypeLabels[lead.formType]}`,
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Type:</strong> ${formTypeLabels[lead.formType]}</p>
        <p><strong>Name:</strong> ${lead.name || lead.firstName + ' ' + lead.lastName || 'Not provided'}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Company:</strong> ${lead.company || 'Not provided'}</p>
        <p><strong>Message:</strong> ${lead.message || lead.workflowDescription || 'N/A'}</p>
        <p><strong>Time:</strong> ${new Date(lead.createdAt).toLocaleString()}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This notification was sent to the admin email: ${process.env.ADMIN_EMAIL}</p>
      `
    });
    console.log(`✅ Admin notification sent to ${process.env.ADMIN_EMAIL}`);
  } catch (error) {
    console.log('❌ Failed to send admin notification:', error.message);
  }
};

module.exports = { sendAutoReply, sendAdminNotification };