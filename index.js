var Statistic = require("./statistic.js");
 
var statisticsList = [];

var map = {};

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

var round = function(number, precision) {
  var factor = Math.pow(10, precision);
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

var getCo2Economise = function() {
	return calculCo2Economise();
}

var calculCo2Economise = function() {
	return calculCo2Total() - calculCo2Consomme();
}

var calculCo2Total = function() {
	var co2Total = 0;
	statisticsList.forEach(function(statistic) {
		co2Total += statistic.nb_personnes * statistic.co2;
	});
	return co2Total;
}

var calculCo2Consomme = function() {
	var co2Consomme = 0;
	statisticsList.forEach(function(statistic) {
		co2Consomme += statistic.co2;
	});
	return co2Consomme;
}

var getDistanceTotalParcourue = function(){
	var dis = 0;
	statisticsList.forEach(function (statistic) {
		dis += statistic.distance;
	});
	return dis;
}

var getDistanceMoyenneDesTrajets = function(){
	return getDistanceTotalParcourue()/getNbTrajet();
}

var getDureeTotaleDesTrajets = function(){
	var time = 0;
	statisticsList.forEach(function (statistic) {
		time += statistic.duree;
	});
	return time;
}

var getDureeMoyenDesTrajets = function(){
	var dureeMoy = getDureeTotaleDesTrajets()/getNbTrajet();
	var sec = Math.trunc((dureeMoy % 1) * 60);
	var min = Math.trunc(dureeMoy%60);
	var hour = Math.trunc(dureeMoy/60);

	var s = hour+" heures "+ min+" minutes "+sec+" secondes.";
	return s;
}

var getLaVilleLaPlusActive = function(){
	statisticsList.forEach(function(statistic){
		if(statistic.ville_arrivee in map ){
			map[statistic.ville_arrivee] += 1;
		} else {
			map[statistic.ville_arrivee] = 1;
		}

		if(statistic.ville_depart in map ){
			map[statistic.ville_depart] += 1;
		} else {
			map[statistic.ville_depart] = 1;
		}
	}); 

	return Object.keys(map).reduce(function(a, b){ return map[a] > map[b] ? a : b });
}

exports.getLaVilleLaPlusActive = getLaVilleLaPlusActive;
exports.getDureeTotaleDesTrajets = getDureeTotaleDesTrajets;
exports.getDureeMoyenDesTrajets = getDureeMoyenDesTrajets;
exports.getDistanceTotalParcourue = getDistanceTotalParcourue;
exports.getDistanceMoyenneDesTrajets = getDistanceMoyenneDesTrajets;
exports.round = round;
exports.initStatistics = initStatistics;
exports.displayTrajetsEffectues = displayTrajetsEffectues;
exports.getTauxRemplissage = getTauxRemplissage;
exports.getNbTrajet = getNbTrajet;
exports.getTauxCovoiturage = getTauxCovoiturage;
exports.getCo2Economise = getCo2Economise;