var express = require('express');
var texto= require('../modulo1.js');
var app= require('./app/config/server.js');


app.get('/', function(req, res){
    res.render('home/index');
});
app.get('/formulario_adicionar_usuario', function(req,res){
    res.render("admin/adicionar_usuario");
});
app.get('/informacao/historia', function(req, res){
    res.render("informacao/historia");
});
app.get('/informacao/cursos', function(req, res){
    res.render("informacao/cursos");
});
app.get('/informacao/professores', function(req, res){
    res.render("informacao/professores");
});
app.listen(3000, function(){
    console.log(texto);
});
