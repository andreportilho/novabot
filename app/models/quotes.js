const mongoose = require('mongoose');

const schema = mongoose.Schema({
	quote: {
		type: String,
		required: true
	},
	autor: {
		type: String,
		required: true
	}
	perfil_imagem: {
		type: String,
		required: true
	}
});

const model = mongoose.model('model', schema);

module.exports = model;