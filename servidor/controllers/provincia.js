'use strict'

//Esto nos permite sacar las rutas donde se guardan las imagenes
var path = require('path');
var Provincia = require('../models/provincia');
var Pais = require('../models/pais');

var Controlador = require('./controladorSentencias');
var Mensaje = require('../models/mensaje');

var message = new Mensaje();
var consulta;

function getProvinciasXPais(req, res){

	var id = req.params.id;
	message.error = "No hay provincias.";
	consulta = Provincia.find({}).where('pais', id);
	Controlador.ejecutarSentencia(res, message, consulta);
	consulta = null;

}

function getAllProvincias(req, res){
	message.error = "No hay provincias.";
	consulta = Provincia.find({});
	Controlador.ejecutarSentencia(res, message, consulta);
	consulta = null;
}

module.exports = {
	getProvinciasXPais,
	getAllProvincias
}
