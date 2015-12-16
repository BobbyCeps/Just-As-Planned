function menu(d, b) { /*MENU A DROITE */
   /* on ferme tout les div pour etre sur de pas les superposer en ouvrant les pages du menu */
  document.getElementById("content_details").style.display='none';
  document.getElementById("content_dressage").style.display='none';
  document.getElementById("content_activites").style.display='none';
  document.getElementById("content_boutique").style.display='none';
  document.getElementById("content_pokedex").style.display='none';
  document.getElementById("acceuil").style.display='none'; /* div de l'acceuil */

   var div = document.getElementById(d);
   if (div.style.display=="none") {
       div.style.display = "block"; /* et on rouvre celle demandé */

     }
   if (d == "content_details"){ /* si on ouvre le bloque details pokedex = ouvert */
      document.getElementById("content_pokedex").style.display='block';
   }
   else { /* si on ouvre un autre block alors pokedex = fermé */
     document.getElementById("content_pokedex").style.display='none';
  }

     document.getElementById("button_details").style.marginLeft= '-38px'; /* Pour que les bouton du menu soit 'connecté' */
     document.getElementById("button_dressage").style.marginLeft= '-38px';
     document.getElementById("button_activites").style.marginLeft= '-38px';
     document.getElementById("button_boutique").style.marginLeft= '-38px';

  var button = document.getElementById(b);
      button.style.marginLeft = "-41px";
      button.style.borderLeft = "2px solid white";
} /*MENU A DROITE */
