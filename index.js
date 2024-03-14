"use strict";
const nodemailer = require('nodemailer');


    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth:{
            user: 'karthikars1999@gmail.com',
            pass: 'fzpx hzcg glyr zrfm',
        },
    });

    let mailOptions = {
        from: 'karthikars1999@gmail.com',
        to: 'kathukat99@gmail.com',
        subject: 'Hello from Nodemailer',
        text: 'This is a test email sent from Nodemailer.'
      };;

  

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    