//Algoritmo
// 1 Definir o valor da hora;
// 2 Definir a quantidade de horas de trabalho;
// 3 Encontrar o resultado; 
// 4 Realizar a function para descobrir o valor do projeto;
// 5 Colocar o valor nas casas decimais correta;



//definindo o valor da hora trabalhada
var valorHora = document.getElementById("valor-hora")
console.log(valorHora)


//definindo horas trabalhadas
var quantidadeHoras = document.getElementById("horas-projeto")
console.log(quantidadeHoras)


//econtrando o resultado
var resposta = document.getElementById("resposta")
console.log(resposta)


//ligando o clique do botão
function calcular() {
 var valorTotal = (valorHora.valueAsNumber * quantidadeHoras.valueAsNumber).toFixed(2).replace('.', ',')
 resposta.textContent = "O valor total do seu projeto será de R$ " + valorTotal
}
