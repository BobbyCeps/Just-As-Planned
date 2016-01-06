var date = Date.now;

function calcul_time()
{

  // ON DEJSON L'OBJET
  var pokemon = JSON.parse(localStorage.getItem('Pokemon'));
  // ON DECLARE UNE VARIABLE QUI CONTIENT LE RESULTAT DE LA DATE DU NAV - LA DATE DE L'OBJET
  var calculDate = dateNav - pokemon.date;
  window.alert(pokemon.date);
  // ON DIVISE LE NOMBE DE PART L'EQUIVALENT EN MILISECONDE 6000=1minute 3600000=1H
  calculMinute = Math.floor(calculDate / 6000);
  // ON ETABLIE UN IF POUR EMPECHER LE SPAM
  if(calculMinute > 1 ){
  // ON APPLIQUE LES CHANGEMENTS
  // ON CHANGE LA DATE DE L'OBJET
  var slip = Date.now();
  pokemon.date = slip;
  pokemon.ennui += 5;
  window.alert(calculMinute);
  window.alert(pokemon.date);
  window.alert(pokemon.ennui);
  // ON LA REJSON POUR CHANGER LA VALEUR DU LOCALSTORAGE
  localStorage.setItem("Pokemon", JSON.stringify(pokemon));
  // ET ÇA MARCHE PUTAIN

 }
}
