const { createTransport } = require('nodemailer');

const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: "parmarrahul536@gmail.com",
        pass: "xsmtpsib-bd052964d2a9ada143f1c85d78ced7627b501171a25dbc35ec39d3627867bedb-VOzvwgZ6MbcSD2EA",
    },
});

const mailOptions = {
    from: 'parmarrahul536@gmail.com',
    to: 'rahul.p@3rddigital.com',
    subject: `Your subject`,
    text: `Your text content`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});