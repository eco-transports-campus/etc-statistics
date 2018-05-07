var statistics = require('./index.js');

var list = [['Ormes', 'Orsay', 104, 68, 3, 5, 75], ['Bures sur Yvette', 'Orsay', 4, 2, 1, 5, 10]];

statistics.initStatistics(list);

console.log("---------- MODULE DE STATISTIQUES ----------");

var nbTrajet = statistics.getNbTrajet();
if(nbTrajet == 0) {
	console.log("Il n'y a pas eu de trajet effectué.");
} else {
	if(nbTrajet == 1) {
		console.log("Le nombre de trajets effectués est " + nbTrajet + " trajet");
	} else {
		console.log("Le nombre de trajets effectués est " + nbTrajet + " trajets");
	}

	var tauxRemplissage = statistics.getTauxRemplissage();
	console.log("Le taux de remplissage des voitures est de " + tauxRemplissage + "%.");
}