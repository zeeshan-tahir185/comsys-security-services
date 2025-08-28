import nodemailer from "nodemailer";

export async function POST(req) {
  const { firstName, lastName, email, phone, company, itService } = await req.json();

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
    to: "emarketing@comsys.co.nz", // Add the email address where you want to receive the submissions
    subject: `New Consultation Request from ${firstName} ${lastName}`,
    html: `
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 8px; border: 1px solid #ddd;">
          <h2 style="color: #3a4e62; font-size: 24px; border-bottom: 2px solid #53B289; padding-bottom: 10px;">New Lead - Consultation Request</h2>
          
          <div style="display: flex; align-items: center; margin-top: 20px;">
            <div style="background-color: #53B289; width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: #fff;">
              <span style="font-size: 20px;">🖋️</span>
            </div>
            <h3 style="margin-left: 10px; color: #3a4e62; font-size: 18px;">Full Name:</h3>
          </div>
          <p style="margin-left: 50px; color: #333; font-size: 16px; margin-top: 5px;">${firstName} ${lastName}</p>
          
          <div style="display: flex; align-items: center; margin-top: 15px;">
            <div style="background-color: #53B289; width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: #fff;">
              <span style="font-size: 20px;">📧</span>
            </div>
            <h3 style="margin-left: 10px; color: #3a4e62; font-size: 18px;">Email:</h3>
          </div>
          <p style="margin-left: 50px; color: #333; font-size: 16px; margin-top: 5px;">${email}</p>

          <div style="display: flex; align-items: center; margin-top: 15px;">
            <div style="background-color: #53B289; width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: #fff;">
              <span style="font-size: 20px;">📞</span>
            </div>
            <h3 style="margin-left: 10px; color: #3a4e62; font-size: 18px;">Phone:</h3>
          </div>
          <p style="margin-left: 50px; color: #333; font-size: 16px; margin-top: 5px;">${phone}</p>

          <div style="display: flex; align-items: center; margin-top: 15px;">
            <div style="background-color: #53B289; width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: #fff;">
              <span style="font-size: 20px;">🏢</span>
            </div>
            <h3 style="margin-left: 10px; color: #3a4e62; font-size: 18px;">Company:</h3>
          </div>
          <p style="margin-left: 50px; color: #333; font-size: 16px; margin-top: 5px;">${company}</p>

          <div style="display: flex; align-items: center; margin-top: 15px;">
            <div style="background-color: #53B289; width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: #fff;">
              <span style="font-size: 20px;">🌐</span>
            </div>
            <h3 style="margin-left: 10px; color: #3a4e62; font-size: 18px;">Requested Service:</h3>
          </div>
          <p style="margin-left: 50px; color: #333; font-size: 16px; margin-top: 5px;">${itService}</p>

          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 5px solid #53B289;">
            <h3 style="color: #3a4e62; font-size: 18px; margin-bottom: 10px;">Consultation Request Details:</h3>
            <p style="color: #333; font-size: 16px;">Looking forward to helping with your consultation request.</p>
          </div>

          <footer style="margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #ddd; padding-top: 15px;">
            <p>COMSYS IT Services - New Zealand's Most Trusted IT Support</p>
            <p>Email: <a href="mailto:info@comsys.co.nz" style="color: #53B289;">info@comsys.co.nz</a> | Phone: <a href="tel:0800724526" style="color: #53B289;">0800 724 526</a></p>
            <p>This email was automatically generated from the COMSYS website consultation form. Please respond to the customer within 24 hours for best results.</p>
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
