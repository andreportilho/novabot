'use strict'; 

const express = require('express'); 
const bodyParser = require('body-parser'); 
const request = require('request');
require('./config/database');

const app = express(); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const server = app.listen(3000, () => { console.log('Express server listening on port %d in %s mode', server.address().port,   app.settings.env);});

app.post('/', (req, res) => { 
  const token = "xoxp-381103429639-379509751345-381317432055-e160e892c4c9c846ce89e665bfdf51a5";
  const user = req.body.user_id;
  const text = req.body.text;

  request.post('https://slack.com/api/users.profile.get', {form:{token, user}}, (err, httpResponse, body) => {
  	console.log(body);
  });

/*  console.log(JSON.stringify(token));
  console.log(JSON.stringify(user));
  console.log(JSON.stringify(text));*/
  res.send('Recebido com sucesso!');   return; 
});