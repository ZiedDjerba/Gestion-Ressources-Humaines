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
    'img':image,
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
'congé':congé

  };
  /**tableau des employes */
  var userTab = [];

  var i;
 
    if("tabemploye" in localStorage)
 {   
 
   
  
  userTab=JSON.parse(localStorage.getItem("tabemploye"));
  userTab.push(employe); 
  localStorage.setItem("tabemploye",JSON.stringify(userTab));
  
  
 }
 

 else
 {
  userTab.push(employe); 
  localStorage.setItem("tabemploye",JSON.stringify(userTab));
 
 }


}  
  /***afficher la liste des employés */
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
