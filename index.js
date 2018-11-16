const express = require('express'); //Express
const hbs = require('express-handlebars'); 
const app = express();
const fs = require('fs'); //File system
const download = require('download');

var first = 0; //Visitas primera pagina
var second= 0; //visitas segunda pagina
var third= 0; //visitas tercera pagina

function visits(params) {
    var message = "first: "+first;
    console.log(message);
    
}

//carpeta publica
app.use(express.static('public'));
//render handlebars
app.engine('handlebars', hbs());
//setear el motor de render
app.set('view engine', 'handlebars');


//primera pagina
app.get('/first',function(req , res){
    res.render('first');                    
});

//segunda pagina
app.get('/second',function(req , res){
    res.render('second');                    
});

//tercera pagina
app.get('/third',function(req , res){
    res.render('third');                    
});





app.listen(5500); //Puerto
