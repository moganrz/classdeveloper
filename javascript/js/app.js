function perguntaNome(){
  var nome = prompt("Qual e o seu nome?");
  alert("Ola " + nome);
}

function compararNumero(){
  var numero = prompt("Digite um numero para ser comparado com 10");

  if (numero < 10){
    alert("Menor que 10");
  }
  else if (numero == 10) {
      alert("Igual a 10");
  }
  else {
      alert("Maior que 10");
  }
}
