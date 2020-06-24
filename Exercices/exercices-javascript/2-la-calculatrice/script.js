//Crée une fonction calculatrice: A l'aide des attributs name des éléments HTML input, récupère la valeur entrée par l'utilisateur dans ces inputs à l'aide de la méthode .value;  Ensuite, à l'aide des id des éléments button, effectue l'opération se rapportant au signe du bouton sur les valeurs récupérées des input. Pour terminer, affiche le résultat dans une boite de dialogue alert().
//Utilisez le bout de code suivant pour ajouter un évennement sur chaque bouton en remplacant le paramètre de getElementById par l'ID correspondant au bouton

function additionOnClick() {
  document
    .getElementById('addition')
    .addEventListener('click', function addition() {
      const firstNumberValue = document.getElementById('first-number').value;
      const secondNumberValue = document.getElementById('second-number').value;
      alert(parseInt(firstNumberValue, 10) + parseInt(secondNumberValue, 10));
    });
}

function substractionOnClick() {
  document
    .getElementById('soustraction')
    .addEventListener('click', function substract() {
      const firstNumberValue = document.getElementById('first-number').value;
      const secondNumberValue = document.getElementById('second-number').value;
      alert(parseInt(firstNumberValue, 10) - parseInt(secondNumberValue, 10));
    });
}

function divisionOnClick() {
  document
    .getElementById('division')
    .addEventListener('click', function division() {
      const firstNumberValue = document.getElementById('first-number').value;
      const secondNumberValue = document.getElementById('second-number').value;
      alert(parseInt(firstNumberValue, 10) / parseInt(secondNumberValue, 10));
    });
}

function multiplicationOnClick() {
  document
    .getElementById('multiplication')
    .addEventListener('click', function multiplication() {
      const firstNumberValue = document.getElementById('first-number').value;
      const secondNumberValue = document.getElementById('second-number').value;
      alert(parseInt(firstNumberValue, 10) * parseInt(secondNumberValue, 10));
    });
}
