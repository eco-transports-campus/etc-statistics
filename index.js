var Statistic = require("./statistic.js");
 
var statisticsList = [];

var initStatistics = function(liste) {

	liste.forEach(function(statisticElement) {
		var ville_depart = statisticElement[0];
		var ville_arrivee = statisticElement[1];
		var distance = statisticElement[2];
		var co2 = statisticElement[3];
		var nb_personnes = statisticElement[4];
		var nb_places = statisticElement[5];
		var duree = statisticElement[6];
		var statistic = new Statistic(ville_depart, ville_arrivee, distance, co2, nb_personnes, nb_places, duree);
    	statisticsList.push(statistic);
	});
}

var round = function(number) {
  var factor = Math.pow(10, 2);
  return Math.round(number * factor) / factor;
}

var displayTrajetsEffectues = function() {	
	statisticsList.forEach(function(statistic) {
	  	console.log(statistic);		
	});
}

 
var getTauxRemplissage = function() {
    return calculTauxRemplissage();
}

var calculTauxRemplissage = function() {
	var taux = 0;
	statisticsList.forEach(function(statistic) {
		taux += statistic.nb_personnes * 100 / statistic.nb_places;
	});
	return taux / getNbTrajet();
}

var getNbTrajet = function() {
    return calculNbTrajet();
}

var calculNbTrajet = function() {
	var nb = 0;
	statisticsList.forEach(function(statistic) {
		nb += 1;
	});
	return nb;
}

var getTauxCovoiturage = function() {
	return calculTauxCovoiturage();
}

var calculNbTrajetCovoiturage = function() {
	var nb = 0;
	statisticsList.forEach(function(statistic) {
		if(statistic.nb_personnes > 1) {
			nb += 1;
		}
	});
	return nb;
}

var calculTauxCovoiturage = function() {
	return calculNbTrajetCovoiturage() / calculNbTrajet() * 100;
}

exports.round = round;
exports.initStatistics = initStatistics;
exports.getTauxRemplissage = getTauxRemplissage;
exports.getNbTrajet = getNbTrajet;
exports.getTauxCovoiturage = getTauxCovoiturage;
exports.displayTrajetsEffectues = displayTrajetsEffectues;