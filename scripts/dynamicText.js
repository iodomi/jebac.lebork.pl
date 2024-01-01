const changingText = document.getElementById('changingText');
const texts = [
'Pracujemy nad tym...', 
'Już niedługo... (chyba)',
'Strona czeka, nie ty :P', 
'Do cierpliwych świat należy ;)',
'Prace wykończeniowe trwają...',
'Lepiej zaparz sobie kawę :3',
'Może odwiedź naszego discorda?',
'Nie rozumiem czemu to czytasz.',
'Może idź poczytaj sobie książkę?',
'Albo chociaż trawy dotknij :(',
'Zaczynam się o ciebie martwić',
'Weź ty może od komputera odejdź',
'Myślę że detox by ci się przydał',
'Czytanie tego jest takie ciekawe?',
'Albo wiesz co, dam ci spokój.',
];
let index = 0;

function typeText(text, i, callback) {
  if (i < text.length) {
    changingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(function () {
      typeText(text, i, callback);
    }, 25); // delay
  } else {
    setTimeout(callback, 500); // after typing
  }
}

function changeText() {
  changingText.innerHTML = '';
  typeText(texts[index], 0, function () {
    index = (index + 1) % texts.length;
    setTimeout(changeText, 500); // before typing
  });
}

changeText();
