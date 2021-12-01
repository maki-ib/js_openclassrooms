//-----CODE NON DRY------
function saluer() {
    //On met la première lettre en majuscule, on donne le nombre de lettre dans son prénom et on salue la personne
    let prenom = personne1[0].toUpperCase() + personne1.substr(1);
    const longueurPrenom = personne1.length;
    console.log(`Bonjour ${prenom}, ton prénom contient ${longueurPrenom} lettres`);
}
//variable de différentes personnes
let personne1 = "Jean";
let personne2 = "Paul";
let person3 = "Marcel";

saluer(personne1);
saluer(personne2);
saluer(person3);

//-----CODE MAL NOMMÉ------

//tableau des ages des élèves dans la classe
const ageEleves = [14, 14, 15, 14, 16, 14, 14, 13];
// Nombre d'élèves
const nombreEleves = ageEleves.length;
// variable pour calculer la somme des ages
let sommeAges = 0;
for (let age of ageEleves) {
    sommeAges += age;
}
//moyenne d'age dans la classe
const moyenneAge = sommeAges / nombreEleves;
console.log('Il y a ' + nombreEleves + " élèves dans la classe et la moyenne d'age est " + moyenneAge);

//-----CODE MAL MIS EN FORME------

const temperature = 25;

if (temperature < 10) {
    console.log("Il fait très froid");
} else if (temperature < 0) {
    console.log("Il fait froid");
} else if (temperature < 10) {
    console.log("Il fait frais");
} else if (temperature < 20) {
    console.log("Il fait doux");
} else if (temperature < 30) {
    console.log("Il fait bon");
} else {
    console.log("Il fait chaud");
}