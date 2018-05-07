
![Polytech Paris-sud](https://www.usinenouvelle.com/mediatheque/3/4/0/000268043_image_260x175.jpg)
# etc-statistics
Un module qui calcule des statistiques pour des trajets effectués.


## Documentation

{ville_depart, ville_arrivee, distance, co2, nb_personnes, nb_places, duree}
Structure de l’objet Statistique.
### Exemple d’utilisation :
var list = [['Ormes', 'Orsay', 104, 68, 3, 5, 75], ['Bures sur Yvette', 'Orsay', 4, 2, 1, 5, 10], ['Ormes', 'Orléans', 9, 6, 2, 5, 25]];

initStatistics(list)
Méthode qui permet d’initialiser la liste des trajets effectués pour pouvoir calculer les statistiques par la suite.

### Exemple d’utilisation :
```javascript
statistics.initStatistics(list);
```

displayTrajetsEffectues()
Méthode qui permet d’afficher la liste des trajets effectués.

### Exemple d’utilisation :
statistics.displayTrajetsEffectues();

round(valeur, precison)
valeur : valeur à afficher
precision : nombre de décimal
Méthode qui permet d’afficher le nombre (valeur) avec une précision (precision).

### Exemple d’utilisation :
statistics.displayTrajetsEffectues();

getNbTrajet()
Méthode qui permet de récupérer le nombre de trajet effectué.

### Exemple d’utilisation :
var nbTrajet = statistics.getNbTrajet();

getTauxRemplissage()
Méthode qui permet de calculer le taux de remplissage des voitures.

### Exemple d’utilisation :
var tauxRemplissage = statistics.getTauxRemplissage();

getTauxCovoiturage()
Méthode qui permet de calculer le taux de covoiturage effectués. C’est à dire les trajets où le nombre de personne est strictement supérieur à 1.

### Exemple d’utilisation :
var tauxCovoiturage = statistics.getTauxCovoiturage();

getCo2Economise();
Méthode qui permet de calculer l’impact sur l’empreinte écologique en kg eq. CO₂ économisé.

### Exemple d’utilisation :
var co2Economise = statistics.getCo2Economise();
