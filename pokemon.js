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
  this.date = new Date();

}

var magicarpe = new Pokemon("Magicarpe", "", 129,"male",0,0,0,0, "images/magikarp.gif", dateNav);
var pikachu = new Pokemon("Pikachu", "", 25, "male", 0,0,0,0, "images/pikachu.gif", dateNav);
var porygon = new Pokemon("Porygon", "", 137, "male", 0,0,0,0, "images/porygon.gif", dateNav);

document.getElementById("sprite").src = magicarpe.image;
document.getElementById("Nom").innerHTML = magicarpe.nom ;
document.getElementById("progress_santé").value = magicarpe.santé
document.getElementById("progress_humeur").value = magicarpe.humeur
document.getElementById("progress_faim").value = magicarpe.faim
document.getElementById("progress_ennui").value = magicarpe.ennui
