
function load_all() {

  dateNav = Date.now(); /* apelle l'objet dateNav */


    /* pour fermer les pages lors du retour a l'acceuil */
  document.getElementById("content_details").style.display = "none";
  document.getElementById("content_dressage").style.display = "none";
  document.getElementById("content_activites").style.display='none';
  document.getElementById("content_boutique").style.display='none';
    /* pour fermer le pokedex a l'acceuil */
  document.getElementById("content_pokedex").style.display='none';


  /* on affiche magicarpe */
/*  document.getElementById("sprite").src = magicarpe.image;
  document.getElementById("Nom").innerHTML = magicarpe.nom ;
  document.getElementById("progress_santé").value = magicarpe.santé
  document.getElementById("progress_humeur").value = magicarpe.humeur
  document.getElementById("progress_faim").value = magicarpe.faim
  document.getElementById("progress_ennui").value = magicarpe.ennui */

} /* fin fonction load_all */

function new_game() {

}
