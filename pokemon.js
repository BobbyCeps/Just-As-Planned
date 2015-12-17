function Pokemon (nom, surnom, numero, sexe, santé, humeur, faim, ennui, image, date) {
  this.nom = nom;
  this.surnom = surnom;
  this.numero = numero;
  this.sexe = sexe;
  this.santé = santé;
  this.humeur = humeur;
  this.faim = faim;
  this.ennui = ennui;
  this.image = image;
  this.date = Date.now();
  var dateDiff = this.date - dateNav;
  savePokemon(this);

  this.update = function() {
    this.faim += 5;
    this.ennui += 5;
    this.date = Date.now();
    savePokemon(this);
  }

}

function loadPokemon(name) {
  var tmpPokemon = JSON.parse(localStorage.getItem(name));
  if(!tmpPokemon) {
    return null;
  }
  else {
    var pokemon = new Pokemon(tmpPokemon.nom,tmpPokemon.surnom,tmpPokemon.numero,tmpPokemon.sexe,tmpPokemon.santé,tmpPokemon.humeur,tmpPokemon.faim,tmpPokemon.ennui,tmpPokemon.image,tmpPokemon.date);
    return pokemon;
  }
}

function savePokemon(pokemon) {
  localStorage.setItem(pokemon.nom, JSON.stringify(pokemon));
}
