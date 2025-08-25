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
