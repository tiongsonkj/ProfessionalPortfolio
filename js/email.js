const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kelvintiongson30@gmail.com',
        pass: 'Dustars305'
    }
});

const mailOptions = {
    from: '',
    to: 'kelvintiongson30@gmail.com',
    subject: 'Portfolio Email',
    
}