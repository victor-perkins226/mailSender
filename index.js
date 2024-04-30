const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
require("dotenv").config();

const mailSender = require("./mail");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post("/mailSender", (req, res) => {
//   try {
//     const { to, from, subject, html } = req.body;
//     // NOTE: SendGrid uzerinden generate olmus tokenlar ayda 40.000 mail iletebilmektedir.
//     // API KEY kullanım süresi 100 gündür.
//     mailSender.MailProcess(to, from, subject, html, function(responseCode) {
//       if (responseCode === 401) {
//         res.statusCode = responseCode;
//         res.send({
//           message: "Hata olustu = kullanıcı token süresi bitmiştir",
//           status: false,
//         });
//       } else {
//         res.send({ message: "Başarılı", status: true });
//       }
//     });
//   } catch (error) {
//     res.send({ message: `Hata Olustu --> ${error}`, status: false });
//   }
// });

// app.listen(PORT, () => {
//   console.log("Application Started");
// });

mailSender.MailProcess("victorperkins02262@gmail.com", "victorperkins02262@outlook.com", 'Collaboration', `
Hi
I am Hoshi and I live in Japan.
I am a senior developer who has over 8 years of experience in software development.
I am earning about 10K in a month by working on several projects.
However, my friends are getting over 10K from the only one project.
The goal is that they are working on American Upwork account.
So I want to collaborate with you.
I will really appreciate if you lend me your Upwork account.
I will pay 300 ~ 500$ according to your support.
I know it is not much money but if you want and if you provide good support, I will pay up to 20% of my profit.
I hope we can keep excellent relationship.
If you are interested in my suggestion, let me know.
Thanks.

Mail: victorperkins02262@outlook.com
Skype: live:.cid.500f77651849e4bd
`, (respondCode) => {
  console.log('respondCode', respondCode);
})