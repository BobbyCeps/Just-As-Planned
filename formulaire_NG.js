function Pokemon (nom, santé, humeur, faim, ennui, image, date) {
  this.nom = document.getElementById("select").value;
  this.santé = santé;
  this.humeur = humeur;
  this.faim = faim;
  this.ennui = ennui;
  this.image = "images/" + this.nom + ".gif";
  this.date = Date.now();
}
function new_game() {
  document.getElementById("content_log").style.display = "none";
  document.getElementById("content_NG").style.display = "block";
}

function valider(){

}

function creation(){
  var nom = document.getElementById("login_ng").value;
  var mdp = document.getElementById("mdp_ng").value;
  var choix_pokemon = document.getElementById("select").value;
  window.alert(nom);
  window.alert(mdp);
  localStorage[nom]= mdp;
  var pokemon = new Pokemon("",0,0,0,0,"");
  window.alert(pokemon.nom);
  window.alert(pokemon.image);
}
