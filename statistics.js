function Statistics() {

  function constructor(ville_depart, ville_arrivee, distance, co2, nb_personnes, nb_places, duree) {
    this.ville_depart = ville_depart;
    this.ville_arrivee = ville_arrivee;
    this.distance = distance;
    this.co2 = co2;
    this.nb_personnes = nb_personnes;
    this.nb_places = nb_places;
    this.duree = duree;
  }

}

module.exports = Statistics;