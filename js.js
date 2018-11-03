



/**fonction d'ajout utilisateur */  
function add_user(){
 
    /**inputs de formulaire ajout employe */
    /**variable pour extraire l'objet key (admin) de localstorage */
   var v_key=localStorage.getItem("cle");
  alert(v_key);
    var id_user = document.getElementById("inputid").value;
   var image=document.getElementById("img").value;
    var nom_user = document.getElementById("inputnom_user").value;
    var Prenom_user = document.getElementById("inputprenom_user").value;
    var Email_user = document.getElementById("inputEmail_user").value;
    var Pwd_user = document.getElementById("inputpwd_user").value;
    var CIN_user = document.getElementById("inputCin_user").value;
    var date_nais = document.getElementById("inputdatenais").value;
    var Adresse_user = document.getElementById("inputadresse_user").value;
    var Tel_user = document.getElementById("inputtel_user").value;
    var Societe=v_key;
    var salaire = document.getElementById("inpusalaire").value;
    var congé = document.getElementById("inputconge").value;
    
    var employe = {
      'id': id_user,
     /* 'img':image,*/
      'lastname': nom_user,
      'firstname': Prenom_user,
      'datenais':date_nais,
      'pwd': Pwd_user,
      'email': Email_user,
      'CIN': CIN_user,
      'adresse': Adresse_user,
      'tel': Tel_user,
      'societe': Societe,
  'salaire':salaire,
  'congé':congé,
  'Img':image
  
    };
    /**tableau des employes */
    var userTab = [];
  var test=1;
    var i,j;
   var v_email=document.getElementById("inputEmail_user").value;
      if("tabemploye" in localStorage)
   {   
   
     
    
    userTab=JSON.parse(localStorage.getItem("tabemploye"));
    for(j=0;j<userTab.length;j++)
    {
if(userTab[j].email==v_email)
{
  myFunctionSnackbarEchoué();
  test=0;
  break;
}
    }

  if(test==1)
   { userTab.push(employe); 
    localStorage.setItem("tabemploye",JSON.stringify(userTab));
    myFunctionSnackbarReussi();
   }
  }
  else{
    userTab.push(employe);
    localStorage.setItem("tabemploye",JSON.stringify(userTab));
    myFunctionSnackbarReussi();
  }
}
  
  
  // Fonction Snackbar Création Réussie
function myFunctionSnackbarReussi() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
}

//Fonction Snackbar Création échoué
function myFunctionSnackbarEchoué() {
  var x = document.getElementById("snackbarFailed");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);

}

   
  /***afficher la liste des employés */
  function affiche_profil()
  {
    
    var i;
    var profil = "<tr class=\"first\"></tr><tr><b>ID</b><br></tr><tr><b>Prenom</b><br></tr><tr><b>Nom</b><br></tr><tr><b>Date De Naissance</b><br></tr><tr><b> CIN:</b><br></tr><tr><b>Mot De Passe </b><br></tr><tr><b>Tel</b><br></tr><tr><b>Adresse</b><br></tr><tr><b>Salaire</b><br></tr><tr><b>Congé</b><br></tr></tr> \n";
    document.getElementById("profil").innerHTML = profil;
    /**valeur de recupertion de de l'email de l'utilisateur connecté */
 var l=localStorage.getItem("objlogin");
    var res=JSON.parse(localStorage.getItem("tabemploye"));
   
    for(i=0;i<res.length;i++)
    {
     
      if(res[i].email==l)
    {
    document.getElementById("img").innerHTML="<img src=C:\finalproject\InterfaceAdmin\images height=42 width=42>";
     profil = "<td class=\"first\"></tr><tr></tr><tr><td><b>Email/ID:</b></td><td>"+res[i].id+"</td></tr><tr><td><b>Nom:</b></td><td>"+res[i].lastname+"</td></tr><tr><td><b>Prenom:</b></td><td>"+res[i].firstname+"</td></tr><tr><td><b>Date de naissance:</b></td><td>"+res[i].datenais+"</td></tr><tr><td><b>Mot de passe:</b></td><td>"+res[i].pwd+"</td></tr><tr><td><b>CIN:</b></td><td>"+res[i].CIN+"</td></tr><tr><td><b>Adresse:</b></td><td>"+res[i].adresse+"</td></tr><tr><td><b>Tel:</b></td><td>"+res[i].tel+"</td></tr><tr><td><b>Societe:</b></td><td>"+res[i].societe+"</td></tr><tr><td><b>Salaire:</b></td><td>"+res[i].salaire+"</td></tr><tr><td><b>Congé:</b></td><td>"+res[i].congé+"</td></td> \n";
   
     document.getElementById("profil").innerHTML = profil;
  }
}}



  /**fonction affichage de profil employe */

function user_profil()
{
  
  var i;
  var paire = "<tr class=\"first\"><td><b>ID</b></td><td><b>Email</b></td><td><b>Prenom</b></td><td><b>Nom</b></td><td><b>Date De Naissance</b></td><td><b>Mot de passe</b></td><td><b>CIN</b></td><td><b>Adresse</b></td><td><b>Tel</b></td><td><b>Sciete</b></td><td><b>Salaire</b></td><td><b>Congé</b></td><td><b>Action</b></td></tr> \n";
  
  document.getElementById("paire").innerHTML = paire;
  /**valeur de recupertion de de l'email de l'utilisateur connecté */
 
  var retrivedTabmploye=JSON.parse(localStorage.getItem("tabemploye"));
  var x = localStorage.getItem("cle");

  
  for(i=0;i<retrivedTabmploye.length;i++)
  {
   
if(x ==retrivedTabmploye[i].societe)
{

   paire+="<tr><td>" + retrivedTabmploye[i].id + "</td>\n<td>" +retrivedTabmploye[i].lastname + "</td>\n<td>" + retrivedTabmploye[i].firstname  + "</td>\n<td>" + retrivedTabmploye[i].datenais + "</td> \n<td>" + retrivedTabmploye[i].pwd + "</td> \n<td>" +retrivedTabmploye[i].tel+ "</td> \n<td>" + retrivedTabmploye[i].CIN + "</td> \n<td>" + retrivedTabmploye[i].adresse + "</td> \n<td>" + retrivedTabmploye[i].tel + "</td> \n<td>" + retrivedTabmploye[i].societe + "</td> \n<td>" + retrivedTabmploye[i].salaire + "</td> \n<td>" + retrivedTabmploye[i].congé + "</td>\n<td>"+"<button type='button' onclick='doEdit(this)' id='editingRow'>Modifier </button>"+"<button type='button' onclick='doEdit(this)' id='editingRow'>Supprimer </button></td> </tr>\n";
   document.getElementById("paire").innerHTML = paire;
}
}
}
/**se deconnecter */
function deconnecter()
{
localStorage.removeItem("cle");

location.href="../login.html";

}
/**fonction ajouter mission */
function ajout_mission()
{
  var id_user = document.getElementById("inputId").value;
  var v_mission = document.getElementById("inputMission").value;
  var debut_miss = document.getElementById("inputDatedmission").value;
  var fin_miss = document.getElementById("inputDatefmission").value;
 
Mission={
  'matricule':id_user ,
  'miss': v_mission,
  'datedebutmiss':debut_miss,
  'datefinmiss': fin_miss
}

 /**tableau des employes */
 var userTab = [];
 var test=0;
   var i,j;
   /**tester sil existe une table des emplyees dans local storag */
   if("tabemploye" in localStorage)
   {   

    userTab=JSON.parse(localStorage.getItem("tabemploye"));
    for(i=0;i<userTab.length;i++)
    {
      /**tester si la matricule user ajouter avec la mission existe dans la table employes */
if(userTab[i].id==Mission.matricule)
{
  
  test=1;
  break;
}
    }}
    else{
      myFunctionSnackbarEchoué();
    }
    /**yester si il existe un table mission dans local storage */
if(("tabmission" in localStorage)&&(test==1))
  {   
 
   userTab=JSON.parse(localStorage.getItem("tabmission"));
   
   userTab.push(Mission); 
   localStorage.setItem("tabemission",JSON.stringify(Mission));
   myFunctionSnackbarReussi();
  }
 
 else{
   userTab.push(Mission);
   localStorage.setItem("tabemission",JSON.stringify(Mission));
   myFunctionSnackbarReussi();
 }
}




 