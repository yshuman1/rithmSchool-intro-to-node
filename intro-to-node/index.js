var express = require('express');

var app = express();

app.use((req, res, next) => {
  req.dog = 'dawg';
  next();
})
app.get('/', (req, res, next) => {
  return res.send('hello world');
});
app.get('/:func/:number1/:number2', (req, res, next) => {
  const num1 = Number(req.params.number1);
  const num2 = Number(req.params.number2);
  const func = req.params.func;
  let answer = 0;
  switch(func) {
    case 'add':
      answer = num1 + num2;  
      res.send(answer.toString());
        break;
    case 'subtract':
      answer = num1 - num2;
      res.send(answer.toString());
      break;
    case 'multiply':
      answer = num1 * num2;
      res.send(answer.toString());
      break; 
    case 'divide':
      answer = num1 / num2;
      res.send(answer.toString());
      break;  
    default:
      return;
} 
});


app.get('/greeting/:person', (req, res, next) => {  
  var person = req.params.person;
  if (person === 'yasin') {
    return res.send(`idfwu ` + req.dog);
  }
  res.send(`hello ` + person);
});




app.listen(3000, () => {
  console.log('my first express server listening on 3000'); 
});