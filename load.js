var dateNav = new Date();

function load_all() {
  pokedex(); /* apelle la fonction pokedex */

  dateNav = Date.now();

window.alert(dateNav);


    /* pour fermer les pages lors du retour a l'acceuil */
  document.getElementById("content_details").style.display = "none";
  document.getElementById("content_dressage").style.display = "none";
  document.getElementById("content_activites").style.display='none';
  document.getElementById("content_boutique").style.display='none';
    /* pour fermer le pokedex a l'acceuil */
  document.getElementById("content_pokedex").style.display='none';
} /* fin fonction load_all */
