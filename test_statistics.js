var statistics = require('./index.js');

var list = [['Ormes', 'Orsay', 104, 68, 3, 5, 75], ['Bures sur Yvette', 'Orsay', 4, 2, 1, 5, 10]];

//statistics.initStatistics('Ormes', 'Orsay', 104, 68, 2, 5, 75);
statistics.initStatistics(list);

var nbTrajet = statistics.getNbTrajet();
console.log("nb trajet="+nbTrajet);

var tauxRemplissage = statistics.getTauxRemplissage();
console.log("taux remplissage="+tauxRemplissage);