'use strict'; 

const express = require('express'); 
const bodyParser = require('body-parser'); 
const request = require('request');
require('./config/database');
const quote = require('./app/models/quotes');


const app = express(); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const server = app.listen(process.env.PORT, () => { console.log('Express server escutando na porta %d', server.address().port);});

app.post('/', (req, res) => { 
  const token = process.env.TOKEN;
  const user = req.body.user_id;
  const text = req.body.text;

  request.post({url:'https://slack.com/api/users.profile.get', form: {token, user}}, function(err, httpResponse, body) {
  	const response = JSON.parse(body);
  	console.log(response);
  	const newQuote = quote({
  		quote: text,
  		autor: response.profile.display_name,
  		perfil_imagem: response.profile.image_32
  	})
  	newQuote.save(function(err){
  		if (err) throw err

  		console.log("Registro efetuado com sucesso!");
   	});
  });

  res.send('Recebido com sucesso!');   return; 
});