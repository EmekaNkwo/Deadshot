//Import Dependencies
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const config = require('./config.json')
const handlebars = require('express-handlebars')

//App Init
const app = express()
const port = config.port || 3001;

//Middlewares Init
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, 'public/views'));

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

//Mail Sender Init
const transporter = nodemailer.createTransport({
  service: config.emailService,
  auth: {
    user: config.senderEmail,
    pass: config.senderPassword
  }
});

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/services', (req, res) => {
  res.render('services')
})

app.post('/submit-message', (req, res) => {
  console.log(req.body.name);
  const { name, email, phone, message } = req.body;
  const text = composeMail(name, message, email, phone);
  
  const mailOptions = {
    from: config.senderName +'<'+config.senderEmail+'>',
    to: config.receiverEmail,
    subject: config.subject,
    html: text
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
  res.render("contact", { response: "<div class='alert alert-success text-center'>Message Delivered</div>" });
})
    
function composeMail(name, message, email, phone) {
  return '<p>Dear Sir,</p>' +
    '<p>My name is ' + name + '. ' + message +".</p>"+
    '<p>You can reach me on ' + phone + " or email me at "+email +".</p> "+
    '<p>Regards.</p>';
}

app.listen(port, () => console.log(`DeadShot Online started on port ${port}...`))