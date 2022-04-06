//Express import
const express = require('express');
const app = express();
//EJS import
const ejs = require('ejs');
//BodyParser import
const bodyParser = require('body-parser');
//DataBase connection
const connection = require('./database/database');
//Models import
const serviceSolicitation = require('./database/ServiceSolicitation');

const port = process.env.PORT || 9000;

/*connection
    .authenticate()
    .then(() => {
        console.log('Banco conectado')
    }).catch((err) => {
        console.log('Erro na conexao do banco: ' + err)
    })*/

//Config
    //BodyParser
    app.use(bodyParser.urlencoded({ extended: false}));
    app.use(bodyParser.json());
    app.use(bodyParser.raw());
    app.use(bodyParser.text());

    //View Engine
    app.set('view engine', 'ejs');
    app.use(express.static('public')); //Aceita arquivos estáticos


app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.get('/requestService', (req, res) => {
    res.render('requestService.ejs');
});

app.post('/saveServiceRequest', (req, res) => {
    //Getting form inputs
    var nameInput = req.body.nameInput;
    var numberInput = req.body.numberInput;
    var emailInput = req.body.emailInput;
    var descriptionInput = req.body.descriptionInput;

    serviceSolicitation.create({
        clientName: nameInput,
        clientNumber: numberInput,
        emailInput: emailInput,
        descriptionInput: descriptionInput
    }).then(() => {
        res.redirect("/");
    });
})

app.get('/services', (req, res) => {
    res.render('services.ejs');
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.listen(port, function(err) {
    if(err) {
        console.error(err);
    }
    else {
        console.log("Rodando em http://localhost:9000")
    }
});