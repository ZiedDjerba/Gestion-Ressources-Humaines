

/*
 var login = anime({
    targets: '#login .el',
    translateX: 250
  });
*/


/***InterfaceAdmin ****/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/*** Storage******/
id = 0;
function Save() {
  //var id = document.getElementById("inputId").value;
  var Nom = document.getElementById("inputLogin").value;
  var Prenom = document.getElementById("inputPrenom").value;
  var Pwd = document.getElementById("inputPassword").value;
  var Email = document.getElementById("inputEmail").value;
  var Adresse = document.getElementById("inputAdresse").value;
  var CIN = document.getElementById("inputCin").value;
  var Tel = document.getElementById("inputTel").value;
  var Societe = document.getElementById("inputSociete").value;






  // Create an object:
  var person = {
    'id': id,
    'lastName': Nom,
    'firstName': Prenom,
    'pwd': Pwd,
    'email': Email,
    'adresse': Adresse,
    'cin': CIN,
    'tel': Tel,
    'societe': Societe



  };


  // Retrieve the object from storage
  var retrievedTab = JSON.parse(localStorage.getItem("tableauAdmin"));
  if (retrievedTab == null) {

    if ((document.getElementById("inputLogin").value == "") || (document.getElementById("inputPrenom").value == "") || (document.getElementById("inputPassword").value == "") || (document.getElementById("inputEmail").value == "") || (document.getElementById("inputAdresse").value == "") || (document.getElementById("inputCin").value == "") || (document.getElementById("inputTel").value == "") || (document.getElementById("inputSociete").value == "")) {

      myFunctionSnackbarEchoué()
    }
    else {
      retrievedTab = [];
      id == id++;

      retrievedTab.push(person);
      localStorage.setItem("tableauAdmin", JSON.stringify(retrievedTab));

      console.log(retrievedTab);
      myFunctionSnackbarReussi()
    }
  }
  if (retrievedTab != null) {


    for (i = 0; i < retrievedTab.length; i++) {
      //Contrôle InputText 
      if ((document.getElementById("inputLogin").value == "") || (document.getElementById("inputPrenom").value == "") || (document.getElementById("inputPassword").value == "") || (document.getElementById("inputEmail").value == "") || (document.getElementById("inputAdresse").value == "") || (document.getElementById("inputCin").value == "") || (document.getElementById("inputTel").value == "") || (document.getElementById("inputSociete").value == "") || (document.getElementById("inputPrenom").value == retrievedTab[i].firstName) || (document.getElementById("inputEmail").value == retrievedTab[i].email) || (document.getElementById("inputCin").value == retrievedTab[i].cin) || (document.getElementById("inputSociete").value == retrievedTab[i].societe)) {
        resultat = 0;




      }
      else {
        resultat = 1;


      }
      a = resultat;
      console.log(a);
    }
    if (a == 1) {
      id == id++;

      retrievedTab.push(person);
      localStorage.setItem("tableauAdmin", JSON.stringify(retrievedTab));
      myFunctionSnackbarReussi();
      var key = retrievedTab[i].societe;

    }
    if (a == 0) {
      console.log('user mawjoud');
      myFunctionSnackbarEchoué()
    }
  }


}


/*****Fonction Sncakbar ******/

// Fonction Snackbar Création Réussie
function myFunctionSnackbarReussi() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

//Fonction Snackbar Création échoué
function myFunctionSnackbarEchoué() {
  var x = document.getElementById("snackbarFailed");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

}

/**fonction de recuperation de passwd */
function recuperer_passwd() {
  var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

  if (!(expressionReguliere.test(document.getElementById("email").value))) {
    document.getElementById("pemail").innerHTML = "adresse email non valide!";
  }
  else {
    sendemail();
  }

}
/**fonction d'envoi d'email */
function sendemail() {
  var email = document.getElementById("email").value;
  var subject = ("nouveau mot de passe");
  var body = ("..");
  location.href = "mailto:" + email + '?subject=' + subject + '&body=' + body + "";
}




/******Se Connecter() As User and Admin*******/

function Login() {
  var resultatAdmin;
  var resultatUser;
  var login = document.getElementById("inputLogin").value;
  var pwd = document.getElementById("inputPassword").value;

  //Retrieve from local storage table
  var retrievedTab = JSON.parse(localStorage.getItem("tableauAdmin")) || [];
  var retrievedTabUser = JSON.parse(localStorage.getItem("tabemploye")) || [];





  //Control Table User and Admin
  if ((retrievedTab == null)) {

  }

  if (retrievedTab != null) {
    if ((document.getElementById("inputLogin").value === "") || (document.getElementById("inputPassword").value === "")) {

      console.log("input missed");

    }
    if ((document.getElementById("inputLogin").value !== "") && (document.getElementById("inputPassword").value !== "")) {
      key = false;

      for (i = 0; i < retrievedTab.length; i++) {

        if ((document.getElementById("inputLogin").value == retrievedTab[i].email) && (document.getElementById("inputPassword").value == retrievedTab[i].pwd)) {
          resultatAdmin = 1;
          resultatUser = 0;
          key = retrievedTab[i].societe;
          i= retrievedTab.lengt;


        }


     else  if ((document.getElementById("inputLogin").value != retrievedTab[i].email) && (document.getElementById("inputPassword").value !== retrievedTab[i].pwd)) {

          if (retrievedTabUser == null) {

          }


          if (retrievedTabUser !== null) {
            for (j = 0; j < retrievedTabUser.length; j++) {

              if (((document.getElementById("inputLogin").value == retrievedTabUser[j].email) && (document.getElementById("inputPassword").value == retrievedTabUser[j].pwd))) {
                resultatAdmin = 0;
                resultatUser = 1;
                key = retrievedTabUser[j].societe;
                j = retrievedTabUser.length;
                

                // console.log('resultatUser',resultatUser);
              }
          else  if (((document.getElementById("inputLogin").value !== retrievedTabUser[j].email) && (document.getElementById("inputPassword").value !== retrievedTabUser[j].pwd))) {
                resultatAdmin = 0;
                resultatUser = 0;
              }

            }

          }

        }
      }

      console.log('resultatAdmin', resultatAdmin);
      console.log('resultatUser', resultatUser);



    }
  }




  if (resultatAdmin == 1) {
    location.href = "InterfaceAdmin/Admin.html";
    //Store

    localStorage.setItem("cle", key);
    localStorage.setItem("objlogin", document.getElementById("inputLogin").value);
  }
  if (resultatUser == 1) {
    location.href = "InterfaceEmploye/g_consulter_profil.html";
    localStorage.setItem("cle", key);

    localStorage.setItem("objlogin", document.getElementById("inputLogin").value);
  }
  if ((resultatAdmin == 0) && (resultatUser == 0)) {
    // myFunctionSnackbarEchoué()
  }

}



/****user_profil_à_modifier() *****/

function user_profil_à_modifier() {


  var i;
  var paire_à_modifier = "<tr class=\"first\"><td><b>ID</b></td><td><b>Email</b></td><td><b>Prenom</b></td><td><b>Nom</b></td><td><b>Date De Naissance</b></td><td><b>Mot de passe</b></td><td><b>CIN</b></td><td><b>Adresse</b></td><td><b>Tel</b></td><td><b>Sciete</b></td><td><b>Salaire</b></td><td><b>Congé</b></td><td><b>Action</b></td></tr> \n";

  document.getElementById("paire_à_modifier").innerHTML = paire_à_modifier;
  /**valeur de recupertion de de l'email de l'utilisateur connecté */

  var retrivedTabmploye = JSON.parse(localStorage.getItem("tabemploye"));
  var x = localStorage.getItem("cle");

  var M = [];
  j = 0;
  for (i = 0; i < retrivedTabmploye.length; i++) {

    if (x == retrivedTabmploye[i].societe) {
      M[j] = retrivedTabmploye[i];
      j = j + 1;

      paire_à_modifier += "<tr><td>" + retrivedTabmploye[i].id + "</td>\n<td>" + retrivedTabmploye[i].lastname + "</td>\n<td>" + retrivedTabmploye[i].firstname + "</td>\n<td>" + retrivedTabmploye[i].datenais + "</td> \n<td>" + retrivedTabmploye[i].pwd + "</td> \n<td>" + retrivedTabmploye[i].tel + "</td> \n<td>" + retrivedTabmploye[i].CIN + "</td> \n<td>" + retrivedTabmploye[i].adresse + "</td> \n<td>" + retrivedTabmploye[i].tel + "</td> \n<td>" + retrivedTabmploye[i].societe + "</td> \n<td>" + retrivedTabmploye[i].salaire + "</td> \n<td>" + retrivedTabmploye[i].congé + "</td>\n<td>" + "<button type='button' onclick='doEdit(this)' id='editingRow'>Modifier </button></td> </tr>\n";
      document.getElementById("paire_à_modifier").innerHTML = paire_à_modifier;
      localStorage.setItem("M", JSON.stringify(M));
      

    }
  }
}



/****Function EditRow *****/

function doEdit(r) {
  var x = r.parentNode.parentNode.rowIndex;
  //  document.getElementById('MyTable').editRow(i);
  //document.getElementById("editingRow").value = r;
  console.log(x);
  // Retrieve the object from storage
  var retrievedM = JSON.parse(localStorage.getItem("M"));
  var retrievedTabEmpl = JSON.parse(localStorage.getItem("tabemploye"));
  var nouveauSalaire = document.getElementById("inputSalaire").value;
  var pwnouveauCongé = document.getElementById("inputCongé").value;

  retrievedM[x-1].salaire = nouveauSalaire;
  retrievedM[x-1].congé = pwnouveauCongé;
  localStorage.setItem("M", JSON.stringify(retrievedM));


  for(i=0; i<retrievedTabEmpl.length;i++){
if(retrievedM[x-1].email === retrievedTabEmpl[i].email){
  
  y=i;


}
  }
console.log ('y', y);
  retrievedTabEmpl[y].salaire = nouveauSalaire;
retrievedTabEmpl[y].congé = pwnouveauCongé;

  retrievedM[x-1].salaire = nouveauSalaire;
  retrievedM[x-1].congé = pwnouveauCongé;
  localStorage.setItem("M", JSON.stringify(retrievedM));

  localStorage.setItem("tabemploye", JSON.stringify(retrievedTabEmpl));

}  

/****Users à supprimer ******/
function user_profil_à_supprimer() {

  var i;
  var retrivedTabmploye = JSON.parse(localStorage.getItem("tabemploye"));
  var x = localStorage.getItem("cle");
  var render = "<table id='MyTableSupp' >";
  render += "<tr class=\"first\"><td><b>ID</b></td><td><b>Email</b></td><td><b>Prenom</b></td><td><b>Nom</b></td><td><b>Date De Naissance</b></td><td><b>Mot de passe</b></td><td><b>CIN</b></td><td><b>Adresse</b></td><td><b>Tel</b></td><td><b>Sciete</b></td><td><b>Salaire</b></td><td><b>Congé</b></td><td><b>Action</b></td></tr> \n";

  // document.getElementById("paire_à_supprimer").innerHTML = paire_à_supprimer;
  /**valeur de recupertion de de l'email de l'utilisateur connecté */


  var T = [];
  j = 0;
  for (i = 0; i < retrivedTabmploye.length; i++) {

    if (x == retrivedTabmploye[i].societe) {
      T[j] = retrivedTabmploye[i];
      j = j + 1;
      
      render += "<tr><td>" + retrivedTabmploye[i].id + "</td>\n<td>" + retrivedTabmploye[i].lastname + "</td>\n<td>" + retrivedTabmploye[i].firstname + "</td>\n<td>" + retrivedTabmploye[i].datenais + "</td> \n<td>" + retrivedTabmploye[i].pwd + "</td> \n<td>" + retrivedTabmploye[i].tel + "</td> \n<td>" + retrivedTabmploye[i].CIN + "</td> \n<td>" + retrivedTabmploye[i].adresse + "</td> \n<td>" + retrivedTabmploye[i].tel + "</td> \n<td>" + retrivedTabmploye[i].societe + "</td> \n<td>" + retrivedTabmploye[i].salaire + "</td> \n<td>" + retrivedTabmploye[i].congé + "</td>\n<td>" + "<button type='button' onclick='doDelete(this)' >Supprimer </button></td> </tr>\n";
      // document.getElementById("paire_à_supprimer").innerHTML = paire_à_supprimer;
      localStorage.setItem("T", JSON.stringify(T));
    }


  }
  render += "</table>";
  paire_à_supprimer.innerHTML = render;




}



/****Fuction DeleteRow *****/
function doDelete(r) {
  var V = [];
  var W = [];



  var x = r.parentNode.parentNode.rowIndex;
  console.log('x ', x);

  //Etat x , x==T[0]
  if (x == 1) {
    var retrievedT = JSON.parse(localStorage.getItem("T"));
    var retrivedTabmploye = JSON.parse(localStorage.getItem('tabemploye'));



    var W = [];
    
    //Determiner l'indice du tableau de tabemploye à supprimer
    for (i = 0; i < retrivedTabmploye.length; i++) {
      if (retrievedT[0].email == retrivedTabmploye[i].email) {
       console.log('i ', i);
         y = i;
        
      }
      console.log('y ', y);
    }
    if (y == 0) {
      
      paire_à_supprimer.deleteRow(x);

      //Suppression premier ligne de tableau tabemploye
      retrivedTabmploye.shift();
      
      localStorage.setItem("tabemploye", JSON.stringify(retrivedTabmploye));
      var retrivedTabmploye = JSON.parse(localStorage.getItem("tabemploye"));

    }

    if (y != 0) {

    }
    //Suppression premier ligne de Tableau T
    
    paire_à_supprimer.deleteRow(x);

    //Suppression premier ligne de tableau tembemploye

    //permutation  d'objet d'indice 0 par indice à supprimer
    W[0] = retrivedTabmploye[y];
    retrivedTabmploye[y] = retrivedTabmploye[0];
    retrivedTabmploye[0] = W[0];

    //suppression
    retrivedTabmploye.shift();
    
    localStorage.setItem("tabemploye", JSON.stringify(retrivedTabmploye));
    var retrivedTabmploye = JSON.parse(localStorage.getItem("tabemploye"));
  }

  // Etat x en T , x!=T[0]
  
  if (x != 1) {
    var retrievedT = JSON.parse(localStorage.getItem("T"));
    var retrivedTabmploye = JSON.parse(localStorage.getItem("tabemploye"));
    V[0] = retrievedT[x-1];
    retrievedT[x-1] = retrievedT[0];
    retrievedT[0] = V[0];
    

    var W = [];
    var y;
    //Determiner l'indice du tableau de tabemploye à supprimer
    for (i = 0; i<retrivedTabmploye.length; i++) {
      if (retrievedT[0].email == retrivedTabmploye[i].email) {
        y = i;
        
      }
    }
console.log('y ', y);
    if (y == 0) {

      

     
    

      //Suppression premier ligne de tableau tabemploye
      retrivedTabmploye.shift();
      
      localStorage.setItem("tabemploye", JSON.stringify(retrivedTabmploye));
     

      paire_à_supprimer.deleteRow(x);

    }
    if (y != 0) {
      
     // var retrievedT = JSON.parse(localStorage.getItem("T"));

      //Suppression premier ligne de tableau tembemploye

      //permutation  d'objet d'indice 0 par indice à supprimer
      W[0] = retrivedTabmploye[y];
      retrivedTabmploye[y] = retrivedTabmploye[0];
      retrivedTabmploye[0] = W[0];

      //suppression
      retrivedTabmploye.shift();
      
      localStorage.setItem("tabemploye", JSON.stringify(retrivedTabmploye));
    //  var retrivedTabmploye = JSON.parse(localStorage.getItem("tabemploye"));

    }



  }


}


