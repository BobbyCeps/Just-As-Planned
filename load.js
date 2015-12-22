
function load_all() {

  dateNav = Date.now(); /* apelle l'objet dateNav */


    /* pour fermer les pages lors du retour a l'acceuil */
  document.getElementById("content_details").style.display = "none";
  document.getElementById("content_dressage").style.display = "none";
  document.getElementById("content_activites").style.display='none';
  document.getElementById("content_boutique").style.display='none';
    /* pour fermer le pokedex a l'acceuil */
  document.getElementById("content_pokedex").style.display='none';


  /* on affiche le pokemon */
  var pokemon = JSON.parse(localStorage.getItem('Pokemon'));
  document.getElementById("sprite").src = pokemon.image;
  document.getElementById("nom").innerHTML = pokemon.nom ;
  document.getElementById("progress_santé").value = pokemon.santé;
  document.getElementById("progress_humeur").value = pokemon.humeur;
  document.getElementById("progress_faim").value = pokemon.faim;
  document.getElementById("progress_ennui").value = pokemon.ennui;

} /* fin fonction load_all */
