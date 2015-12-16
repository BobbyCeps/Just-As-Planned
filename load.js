var dateNav = new Date();
function load_all() {
  pokedex(); /* apelle la fonction pokedex */
  dateNav = Date.now(); /* apelle l'objet dateNav */

    /* pour fermer les pages lors du retour a l'acceuil */
  document.getElementById("content_details").style.display = "none";
  document.getElementById("content_dressage").style.display = "none";
  document.getElementById("content_activites").style.display='none';
  document.getElementById("content_boutique").style.display='none';
    /* pour fermer le pokedex a l'acceuil */
  document.getElementById("content_pokedex").style.display='none';


  /* on créé les pokemons */
  var magicarpe = JSON.parse(localStorage.getItem("Magicarpe"));
    if (!magicarpe) { var magicarpe = new Pokemon("Magicarpe", "", 129,"male",0,0,0,0, "images/magikarp.gif", dateNav);}
  var pikachu = JSON.parse(localStorage.getItem("Pikachu"));
  if (!pikachu) {
    var pikachu = new Pokemon("Pikachu", "", 25, "male", 0,0,0,0, "images/pikachu.gif", dateNav);
  }
  var porygon = new Pokemon("Porygon", "", 137, "male", 0,0,0,0, "images/porygon.gif", dateNav);
  /* on affiche magicarpe */
  document.getElementById("sprite").src = magicarpe.image;
  document.getElementById("Nom").innerHTML = magicarpe.nom ;
  document.getElementById("progress_santé").value = magicarpe.santé
  document.getElementById("progress_humeur").value = magicarpe.humeur
  document.getElementById("progress_faim").value = magicarpe.faim
  document.getElementById("progress_ennui").value = magicarpe.ennui

} /* fin fonction load_all */
