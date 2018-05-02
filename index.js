
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets
var Statistics = require("./statistics.js");
 
var statisticsList = [];

var initStatistics = function(liste) {

	liste.forEach(function(statistic) {
		var statistics = new Statistics();
	  console.log(statistic);
			var ville_depart = statistic[0];
			var ville_arrivee = statistic[1];
			var distance = statistic[2];
			var co2 = statistic[3];
			var nb_personnes = statistic[4];
			var nb_places = statistic[5];
			var duree = statistic[6];
		statistics.constructor(ville_depart, ville_arrivee, distance, co2, nb_personnes, nb_places, duree);
			/*console.log("ville_depart="+ville_depart);
			console.log("ville_arrivee="+ville_arrivee);
			console.log("distance="+distance);
			console.log("co2="+co2);
			console.log("nb_personnes="+nb_personnes);
			console.log("nb_places="+nb_places);
			console.log("duree="+duree);*/



    	statisticsList.push(statistics);
	});
}


 
var getTauxRemplissage = function() {
    return calculTauxRemplissage();
  }

var calculTauxRemplissage = function() {
	var taux = 0;
	statisticsList.forEach(function(statistic) {
		console.log("STAT="+statistic.duree);
		taux += statistic[4] * 100 / statistic[5];
	});
	return taux / calculNbTrajet;
}

var getNbTrajet = function() {
    return calculNbTrajet();
  }

var calculNbTrajet = function() {
	var nb = 0;
	statisticsList.forEach(function(statistic) {
		console.log("stat="+statistic);
		nb += 1;
	});
	return nb;
}

exports.initStatistics = initStatistics;
exports.getTauxRemplissage = getTauxRemplissage;
exports.getNbTrajet = getNbTrajet;