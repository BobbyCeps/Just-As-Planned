
function pokedex() { /* Pokedex aléatoire dans details */
  var description = ["Magicarpe est virtuellement inutile en combat. Il se contente de faire des ronds dans l’eau. On le considère plutôt faible. Pourtant, ce Pokémon est très robuste et peut survivre dans n’importe quel environnement, même très pollué.",
                     "Magicarpe est un Pokémon ridicule qui ne sait faire que des ronds dans l'eau ou se laisser porter par les courants. Son comportement a donné envie aux savants d'étudier son cas.",
                     "On raconte qu'autrefois, Magicarpe était beaucoup plus puissant qu'aujourd'hui. Il ne sait faire que des ronds et des bonds dans l'eau. Il est malheureusement devenu célèbre pour son inutilité…cet étrange Pokémon a poussé de nombreux chercheurs a étudier son cas, mais aucune théorie plausible n'a été avancée.",
                     "Autrefois, il était beaucoup plus puissant que cette créature minablement faible.",
                     "Célèbre pour son inutilité, on en trouve beaucoup dans les océans, les étangs et les rivières.",
                     "Un Pokémon tout à fait pathétique. Il peut juste sauter haut en de rares occasions.",
                     "Il effectue des bonds hors de l'eau, faisant de lui une proie facile pour les roucoups.",
                     "Un Pokémon tout à fait pathétique. Il ne peut que subir les courants.",
                     "Ses muscles ne sont pas assez puissants pour qu'il puisse lutter contre le courant. On peut souvent voir des Magicarpe là où l'eau a tendance à stagner. ",
                     "Ce Pokémon est réputé pour être le plus faible au monde. Nul ne sait comment son espèce perdure.",
                     "Il serait bien incapable de remonter le courant le plus faible. Il passe son temps à barboter.",
                     "Un vénérable Magicarpe peut franchir une montagne en utilisant Trempette. Mais c’est tout...",
                     "Un Pokémon tout à fait pathétique. C'est à peine s'il peut sauter plus de 2 mètres en hauteur.",
                     "Magicarpe manque totalement de vitesse et de force. C’est le Pokémon le plus pathétique sur terre.",
                     "La puissance de cette créature a beaucoup régressé au fil des siècles."]

  var resultat = melangeur()
  for (var i=0;i<description.length ;i++)
  document.getElementById("description_pokedex").innerHTML = "<span class='txt_pokedex'> ► &nbsp" + "</span>" +(description[resultat]);
}
/* Fonction permettant d'afficher aléatoirement une description de pokedex sur la page d'acceuil */
function melangeur() {
            return Math.round(Math.random() * 14);
}
