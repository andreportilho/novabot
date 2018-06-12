const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/novabot');
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', function(){
	console.log('Conectando ao mongodb');
});

mongoose.connection.on('error', function(error) {
    console.log('Erro na conexão: ' + error);
});   

mongoose.connection.on('disconnected', function() {
    console.log('Desconectado do MongoDB')
});

process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log('Aplicação terminada, conexão fechada')
		process.exit(0);
	});
	
})