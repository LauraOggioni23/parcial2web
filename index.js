const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const fs = require('fs');
const download = require('download');
const fs = require('fs');

//para definir la carpeta publica
app.use(express.static('public'));
//para registrar el motor de render handlebars
app.engine('handlebars', hbs());
//para setear el motor de render a utilizar
app.set('view engine', 'handlebars');
