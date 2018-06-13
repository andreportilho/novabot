const mongoose = require('mongoose');

if (process.env.PRODUCTION) {
	mongoose.connect(process.env.MONGODB_URI);
	console.log("Ambiente de produção");
} else {
	mongoose.connect('mongodb://localhost/novabot');
	console.log("Ambiente de desenvolvimento");
}

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