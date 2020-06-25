/* Exercice 1: affiche Hello World dans une boite de dialogue
alert('Hello World'); */

/*Exercice 2: Place ton code précédent en commentaire, dans un prompt, demande son prénom à l'utilisateur, ensuite, à l'aide d'un alert() affiche "Salut" + le prénom de l'utilisateur */
/* const whatsYourName = prompt('Comment vous vous appelez ?');
console.log(whatsYourName);
alert(`Salut ${whatsYourName}`); */

/* Exercice 3: Place ton code précédent en commentaire. Dans un prompt, demande son âge à l'utilisateur, ensuite, à l'aide d'un .confirm() vérifie si l'âge de l'utilisateur est bien supérieur à 18 ans, si oui, demande à l'utilisateur de confirmer son âge et affiche "Bienvenue" dans une alert() */
const age = prompt('Quel age avez vous ?');
if (age >= 18) {
  const isMajor = confirm('Etes vous Majeurs ?');
  if (isMajor) {
    alert('Bienvenue');
  }
}
console.log();
