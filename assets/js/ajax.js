  //Execute un appel AJAX GET
  //Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
  function ajaxGet(url,callback){

    // Création d'une requête HTTP
    var req = new XMLHttpRequest();

  //La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
    req.open("GET", url, true);

    req.addEventListener("load", function () {
      if (req.status >= 200 && req.status < 400) {

        // Appelle la fonction callback en lui passant la réponse de la requête
        callback(req.responseText);
      } else {
        console.error(req.status + " " + req.statusText + " " + url);
      }
    });

    req.addEventListener("error", function(){
      console.error("Erreur réseau avec l'URL " + url);
    });

    req.send(null);
  }

  function afficher(reponse){
    console.log(reponse);
  }

  ajaxGet("http://127.0.0.1:4000/assets/data/films.json", function (reponse) {
   //Transforme la réponse en tableau d'objet javascript
    var films = JSON.parse(reponse);
    //Affiche le film de chaque film
    films.forEach(function(film){
     // console.log(film.titre);
    })
  });

  ajaxGet("http://127.0.0.1:4000/assets/data/tableaux.json", function (reponse) {
    //Transforme la réponse en tableau d'objet javascript
    var tableaux = JSON.parse(reponse);

    var _table = document.getElementById("peintres");

    tableaux.forEach(function(tableau){
      var _row = _table.insertRow();
      var _cell0 = _row.insertCell(0),
          _cell1 = _row.insertCell(1),
          _cell2 = _row.insertCell(2);
      _cell0.innerHTML = tableau.nom;
      _cell1.innerHTML = tableau.annee;
      _cell2.innerHTML = tableau.peintre;
    })
  });


  ajaxGet("http://127.0.0.1:4000/assets/data/langages.txt", function (reponse) {
    // Séparation du texte pour obtenir un tableau contenant les langages
    var _langues = reponse.split(";");
    var listeElt = document.getElementById("langages");

    _langues.forEach(function(_langue){
      var langageElt = document.createElement("li");
      langageElt.textContent = _langue;
      listeElt.appendChild(langageElt);
    })
  });


  var articlesElt = document.getElementById("articles");

  /*ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var articles = JSON.parse(reponse);

    articles.forEach(function (article) {
      // Ajout du titre et du contenu de chaque article
      var titreElt = document.createElement("h2");
      titreElt.textContent = article.titre;

      var contenuElt = document.createElement("p");
      contenuElt.textContent = article.contenu;

      articlesElt.appendChild(titreElt);
      articlesElt.appendChild(contenuElt);
    });
  });*/

  var premMinElt = document.getElementById("premMin");
  ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function(reponse){
    var premierMinistre = JSON.parse(reponse);
    //Ajout de la descrition et du logo dans la page web
    var desciptionElt = document.createElement("p");
    desciptionElt.textContent = premierMinistre.description;
    //console.log(premierMinistre.description);
  });


  ajaxGet("http://api.vw.devpalm.com/aftersales/offers", function(reponse){
 // var _reponse = JSON.parse(reponse);
 // var _reponse = JSON.parse(reponse);
   // console.log(_reponse);

  });
