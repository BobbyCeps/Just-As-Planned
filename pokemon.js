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

  this.update = function () {
   this.santé--;
   this.ennui++;
   this.date = Date.now();
  localStorage.setItem(this.nom, JSON.stringify(this));
 }
 localStorage.setItem(this.nom, JSON.stringify(this));
}
