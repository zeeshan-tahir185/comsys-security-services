// app/api/heroForm/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, service, company, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 2525,
    secure: false, 
    auth: {
      user: "infocctv",
      pass: "fgUGhTQceRvBJApv",
    },
  });

  const mailOptions = {
    from: "no-reply@comsys.co.nz",
    to: "emarketing@comsys.co.nz",
    subject: `New Lead - Hero Section - ${name}`,
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 8px; border: 1px solid #ddd;">
            <h2 style="color: #3a4e62; font-size: 24px;">New Lead from Hero Section - ${name}</h2>
            <div>
              <strong>Full Name:</strong> ${name}
              <br>
              <strong>Email:</strong> ${email}
              <br>
              <strong>Phone:</strong> ${phone}
              <br>
              <strong>Service:</strong> ${service}
              <br>
              <strong>Company:</strong> ${company}
              <br>
              <strong>Message:</strong> ${message}
            </div>
            <footer style="font-size: 12px; color: #888;">
              <p>COMSYS IT Services</p>
            </footer>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully." }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send message.",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
