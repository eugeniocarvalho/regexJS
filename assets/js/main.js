const testExpression = document.querySelector('#test-expression');
const res = document.querySelector('#res');
const expression = prompt('Expressão regular:');
const re = new RegExp(expression);

testExpression.focus();

testExpression.addEventListener('input', () => {


  if (!isNaN(testExpression.value)) {
    if (re.test(Number(testExpression.value))) {
      res.setAttribute('style', 'background-color: rgb(91, 245, 130);');

      res.innerHTML = 'Palavra aceita';
    } else {
      res.setAttribute('style', 'background-color: rgb(245, 91, 91);');

      res.innerHTML = 'Palavra rejeitada';
    }
  } else {
    if (re.test(testExpression.value)) {
      res.setAttribute('style', 'background-color: rgb(91, 245, 130);');

      res.innerHTML = 'Palavra aceita';
    } else {
      res.setAttribute('style', '  background-color: rgb(245, 91, 91);');

      res.innerHTML = 'Palavra rejeitada';
    }

  }
});