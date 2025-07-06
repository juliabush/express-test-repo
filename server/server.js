const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  // service: "Gmail",
  auth: {
    user: "j.elizabethbush@gmail.com",
    pass: "lytg fjzt fncb xynp",
  },
});

const app = express();
const port = 3000;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

// app.get("/", (req, res) => {
//   res.send("Hello World its me!");
// });

app.post("/sendmail", sendMail);
// Added (req, res), reading data from the request and sending data response

app.listen(port, () => {
  console.log("Example app listening on port 3000");
});

// function sendMail(to, sub, msg) {
//   transporter.sendMail({
//     to: to,
//     subject: sub,
//     html: msg,
//   });
// }
function sendMail(request) {
  const { to, sub, msg } = request.body;
  transporter.sendMail(
    { from: "j.elizabethbush@gmail.com", to, subject: sub, html: msg }
    // (err) => (err ? res.status(500).send("Failed") : res.send("Sent"))
  );
}

app.post("/sendmail", sendMail);

// sendMail(
//   "j.elizabethbush@gmail.com",
//   "This is SUBJECT 2",
//   "This is a test email"
// );
// module.exports = { sendMail };
// Module exports makes this function, sendMail, avaliable to other files
