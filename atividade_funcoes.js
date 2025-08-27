// Atividade 1
function calcularSoma() {
    let n1 = parseFloat(document.getElementById("valor1").value);
    let n2 = parseFloat(document.getElementById("valor2").value);

    let resultado = n1 + n2;
    document.getElementById("resultado").innerHTML = resultado.toFixed(1);
}
function calcularMultiplicacao() {
    let n1 = parseFloat(document.getElementById("valor1").value);
    let n2 = parseFloat(document.getElementById("valor2").value);

    let resultado = n1 * n2;
    document.getElementById("resultado").innerHTML = resultado.toFixed(1);
}
function calcularDivisao() {
    let n1 = parseFloat(document.getElementById("valor1").value);
    let n2 = parseFloat(document.getElementById("valor2").value);

    let resultado = n1 / n2 ;
    document.getElementById("resultado").innerHTML = resultado.toFixed(1);
}
function calcularSubtracao() {
    let n1 = parseFloat(document.getElementById("valor1").value);
    let n2 = parseFloat(document.getElementById("valor2").value);

    let resultado = n1 - n2 ;
    document.getElementById("resultado").innerHTML = resultado.toFixed(1);
}

// Atividade 2
function calcularDesconto() {
    let nome = document.getElementById("nome").value;
    let quantidade = parseFloat(document.getElementById("quantidade").value);
    let preco = parseFloat(document.getElementById("preco").value);

    let desconto = (quantidade <= 5) ? 0.02 : (quantidade <= 10) ? 0.03 : 0.05;
    let total = quantidade * preco
    let resultado = preco - desconto
    document.getElementById("resultado").innerHTML = `Olá! Você comprou o produto ${nome}.<br>Preço: ${total} com desconto de ${resultado}<br>Total a pagar com desconto: R$ ${resultado.toFixed(2)}`
}
// Atividade 3
function calcularSalario() {
    let nivel = document.getElementById("nivel").value;
    let quantidade = parseFloat(document.getElementById("quantidade").value);

    let valorAula = (nivel >= 3) ? 25 : (nivel == 2) ? 17 : 12;

    let resultado = valorAula * quantidade
    document.getElementById("resultado").innerHTML = `Olá! Você lecionou ${quantidade} aulas!<br>Salário final do Professor: R$ ${resultado.toFixed(2)}`
}
// Atividade 4
function calcularIMC(){
    let altura = document.getElementById("altura").value / 100;
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso / (altura * altura)
    let resultado

    if(imc < 16.9){
        resultado = 'Muito abaixo do peso'
    }else if(imc >= 17 && imc <= 18.4){
        resultado = 'Abaixo do peso'
    }else if(imc >= 18.5 && imc <= 24.9){
        resultado = 'Peso normal'
    }else if(imc >= 25 && imc <= 29.9){
        resultado = 'Acima do peso'
    }else if(imc >= 30 && imc <= 34.9){
        resultado = 'Obesidade grau I'
    }else if(imc >= 35 && imc <= 40){
        resultado = 'Obesidade grau II'
    }else if(imc >= 40){
        resultado = 'Obesidade grau III'
    }

    document.getElementById("resultado").innerHTML = `Olá! Você se encontra <br>${resultado}<br>
    com imc de ${imc.toFixed(2)}`

}