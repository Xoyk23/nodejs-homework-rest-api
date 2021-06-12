const nodemailer = require('nodemailer');
// const config = require('../config/config');

require('dotenv').config();

class CreateSenderNodemailer {
  async send(msg) {
    const options = {
      host: 'smtp.meta.ua',
      port: 465,
      secure: true,
      auth: {
        user: 'kiringa23@meta.ua',
        pass: process.env.PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(options);
    const emailOptions = {
      from: 'kiringa23@meta.ua',
      ...msg,
    };

    return await transporter.sendMail(emailOptions);
  }
}

module.exports = CreateSenderNodemailer;
