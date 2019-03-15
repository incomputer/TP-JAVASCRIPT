var annee = prompt('Entrer une annee');
var sortie = document.getElementById('sortie');
var yyy = '';

var repeat = true;


isAnneBissextile(annee);

function isAnneBissextile(yyy){
	if(yyy % 4 == 0 || yyy % 400 == 0){
		sortie.innerHTML += yyy + " est une annee bissextile ";
	}
	/*else if (yyy == null){
		sortie.innerHTML += yyy + " n'est pas une annee bissextile";
	}*/
	else{
		sortie.innerHTML += yyy + " n'est pas une annee bissextile"
	}
}
