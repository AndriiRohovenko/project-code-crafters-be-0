import nodemailer from "nodemailer";

const {
  UKR_NET_IMAP_USER,
  UKR_NET_IMAP_PASSWORD,
  UKR_NET_IMAP_HOST,
  UKR_NET_IMAP_PORT,
} = process.env;

const config = {
  host: UKR_NET_IMAP_HOST,
  port: UKR_NET_IMAP_PORT,
  secure: true,
  auth: {
    user: UKR_NET_IMAP_USER,
    pass: UKR_NET_IMAP_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

export async function sendEmail(to, subject, html) {
  const mailOptions = {
    from: UKR_NET_IMAP_USER,
    to,
    subject,
    html,
  };
  transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.log("Email sent: " + info.response);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}
