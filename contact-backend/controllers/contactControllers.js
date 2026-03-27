const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendContactMail = async (req, res) => {
  const { name, email, interest, message } = req.body;

  if (!name || !email || !interest || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const emailContent = {
    to: process.env.RECEIVER_EMAIL,
    from: process.env.SENDER_EMAIL,
    subject: "New Contact Form Lead",
    html: `
      <h2>New Lead</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Interested In:</strong> ${interest}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await sgMail.send(emailContent);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};
