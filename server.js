// Get dependencies
const bodyParser = require('body-parser'),
    express = require('express'),
    http = require('http'),
    nodemailer = require('nodemailer'),
    path = require('path'),
    smtpTransport = require('nodemailer-smtp-transport'),
    app = express();


require('dotenv').config();


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/pdf', express.static(path.join(__dirname, '/pdf')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));

let smtpTrans = nodemailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com',
    secureConnection: true,
    port: 465,
    auth: {
        user: process.env.SERVER_MAIL_USER,
        pass: process.env.SERVER_MAIL_PWD
    }
}));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    let name = req.body.nom,
        email = req.body.email,
        subject = 'Missage enviat per ' + req.body.name,
        comment = req.body.message,
        text = 'Nom: ' + name + ' Email: ' + email + ' Comentari: ' + comment,
        mailOptions = {
            to: process.env.DESTINATION_MAIL,
            subject: subject,
            text: text
        };

    res.message = 'Missatge enviat!';
    smtpTrans.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error);
            res.end('An error occur');
        } else {
            console.log(response);
            res.end('Send');
        }
    });
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8088';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Server running on localhost:${port}`));
