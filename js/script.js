//algoritmo
//1- Capturar os elementos html e guardar em variaveis - da linha 9 até a 23
//2- ligar o clique do botao e mostrar no console que está funcionando
//3- Calcular quantidade total de horas no mes, usando a quantidade de horas/dia digitado no input e mostre mo console
//4- Calcular a divisao do salario por total de horas e guardar numa variavel - converti para 2 casas o resultado
//5 - Trocar resposta pelo resultado da divisao


//pega elemteno de ganhas no mês

var salario = document.getElementById("ganho-mes")
console.log(salario)

//pega elemento de horas dia

var horasDia = document.getElementById("horas-dia")
console.log(horasDia)


//pega o resultado
var resposta = document.getElementById("resposta")
console.log(resposta)


//ligando o clique do botão
function calcularValorHora() {
    //bloco de execução
    console.log("o clique está funcionando")
    var totalDeHoras = horasDia.valueAsNumber * 22
    console.log(totalDeHoras)
    var resultado = (salario.valueAsNumber/totalDeHoras).toFixed(2).replace('.', ',')
    console.log(resultado)
    //trocar o resultado na tela
    resposta.textContent = "R$" + resultado
}