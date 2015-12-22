  function Pokemon (nom, santé, humeur, faim, ennui, image, date) {
  this.nom = document.getElementById("select").value;
  this.santé = santé;
  this.humeur = humeur;
  this.faim = faim;
  this.ennui = ennui;
  this.image = "sprite/" + this.nom + ".gif";
  this.date = Date.now();
}
/* user */
function User(nom, mdp, argent) {
  this.nom = document.getElementById("login_ng").value;
  this.mdp = document.getElementById("mdp_ng").value;
  this.argent = argent;
}

function new_game() {
  document.getElementById("content_log").style.display = "none";
  document.getElementById("content_ng").style.display = "block";
}
/* fonction de fake connection au "compte" */
function valider(){
 var login = document.getElementById("login").value;
 var mdp = document.getElementById("mdp").value;
 if(localStorage.getItem(login)== mdp){
   document.location.href="index.html";
 }
 else {
   {
     window.alert("ERROR ERROR");
   }
 }
}

function creation(){
  var nom = document.getElementById("login_ng").value;
  var mdp = document.getElementById("mdp_ng").value;
  document.getElementById("content_log").style.display = "block";
  document.getElementById("content_ng").style.display = "none";
  var choix_pokemon = document.getElementById("select").value;
  localStorage[nom]= mdp;
  /* pokemon + local storage */
  var pokemon = new Pokemon("",0,0,0,0,"");
  localStorage.setItem("Pokemon", JSON.stringify(pokemon));
  /* USER */
  var user = new User("","",0);
  localStorage.setItem("User", JSON.stringify(user));
}
