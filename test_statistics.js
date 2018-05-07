var statistics = require('./index.js');

var list = [['Ormes', 'Orsay', 104, 68, 3, 5, 75], ['Bures sur Yvette', 'Orsay', 4, 2, 1, 5, 10], ['Ormes', 'Orléans', 9, 6, 2, 5, 25]];

statistics.initStatistics(list);

console.log("---------- MODULE DE STATISTIQUES ----------");

var nbTrajet = statistics.getNbTrajet();
if(nbTrajet == 0) {
	console.log("Il n'y a pas eu de trajet effectué.");
} else {
	statistics.displayTrajetsEffectues();
	if(nbTrajet == 1) {
		console.log("Le nombre de trajets effectués est " + nbTrajet + " trajet");
	} else {
		console.log("Le nombre de trajets effectués est " + nbTrajet + " trajets");
	}

	var tauxRemplissage = statistics.getTauxRemplissage();
	console.log("Le taux de remplissage des voitures est de " + statistics.round(tauxRemplissage) + "%.");

	var tauxCovoiturage = statistics.getTauxCovoiturage();
	console.log("Le taux de covoiturage parmi tout les trajets effectués est de " + statistics.round(tauxCovoiturage) + "%.");

}