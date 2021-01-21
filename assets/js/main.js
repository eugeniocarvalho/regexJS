const textExpression = document.querySelector('#test-expression');
const res = document.querySelector('#res');
const re = new RegExp(prompt('Expressão regular:'));

textExpression.focus();

textExpression.addEventListener('input', () => {


  if (!isNaN(textExpression.value)) {
    if (re.test(Number(textExpression.value))) {
      res.setAttribute('style', 'background-color: rgb(91, 245, 130);');

      res.innerHTML = 'Palavra aceita';
    } else {
      res.setAttribute('style', 'background-color: rgb(245, 91, 91);');

      res.innerHTML = 'Palavra rejeitada';
    }
  } else {
    if (re.test(textExpression.value)) {
      res.setAttribute('style', 'background-color: rgb(91, 245, 130);');

      res.innerHTML = 'Palavra aceita';
    } else {
      res.setAttribute('style', '  background-color: rgb(245, 91, 91);');

      res.innerHTML = 'Palavra rejeitada';
    }
  }
});