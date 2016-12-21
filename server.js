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
app.use(express.static(path.join(__dirname, process.env.CLIENT_FOLDER)));
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
    res.sendFile(path.join(__dirname, process.env.CLIENT_FOLDER, 'index.html'));
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    let subject = req.body.subject || 'Nou missage a camins ONG',
        text = 'Nou missage de ' + req.body.name +
            ' amb email: ' + req.body.email +
            'i comentari: ' + req.body.message,
        html = `<p>Nou missage de ${req.body.nom} amb email: ${req.body.email}, i comentari:</p>
            <p>${req.body.message}</p>`,
        mailOptions = {
            to: process.env.DESTINATION_MAIL,
            subject: subject,
            text: text,
            html: html
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

app.post('/festamic', (req, res) => {
    console.log(req.body);
    let subject = 'Nou amic de Camins ONG',
        text = 'Nou amic de camins ONG amb ' +
            ' nom: ' + req.body.name +
            ', email: ' + req.body.email +
            ', dni: ' + req.body.dni +
            ', direccio: ' + req.body.direccio +
            ', cp: ' + req.body.cp +
            ', poblacio: ' + req.body.poblacio +
            ', provincia: ' + req.body.provincia +
            ', telefon: ' + req.body.telefon +
            ', telefon: ' + req.body.telefon +
            ', data: ' + req.body.data +
            ', compte: ' + req.body.compte +
            'i comentari: ' + req.body.comentaris,
        html = `<h1>Nou amic:</h1>
            <p><strong>nom: </strong>${req.body.nom}</p>
            <p><strong>dni: </strong>${req.body.dni}</p>
            <p><strong>email: </strong>${req.body.email}</p>
            <p><strong>direccio: </strong>${req.body.direccio}</p>
            <p><strong>cp: </strong>${req.body.cp}</p>
            <p><strong>poblacio: </strong>${req.body.poblacio}</p>
            <p><strong>provincia: </strong>${req.body.provincia}</p>
            <p><strong>telefon: </strong>${req.body.telefon}</p>
            <p><strong>data: </strong>${req.body.data}</p>
            <p><strong>compte: </strong>${req.body.compte}</p>
            <p><strong>comentaris: </strong>${req.body.comentaris}</p>`,
        mailOptions = {
            to: process.env.DESTINATION_MAIL,
            subject: subject,
            text: text,
            html: html
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
