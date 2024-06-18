botao = document.getElementById("btnEnviar");
botaoVerificar = document.getElementById("btnVerificar");
input = document.getElementById("iptNome");

numeroSorteado = null;

botao.onclick = clicou;
botaoVerificar.onclick = verificar;


function clicou() {
    sortearNumero();
}

function verificar() {
    if (numeroSorteado == input.value) {
        alert("acertou")
    } else {
        alert("numero diferente");
    }
}

function sortearNumero() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let numeroAleatorio = Math.random(); 

    numeroSorteado = min + Math.trunc(dif * numeroAleatorio);
    console.log(numeroSorteado);
}





// document.getElementById("iptNome").value = "testando..."

// Funções
// var x = 1;
// var y = 3;

// alert(soma(x,y));

// var x = "Granbery";
// alert(x);

// alert("1");
// alert("2");
// alert("3");
// alert("4");
// alert("5");
function soma(numero1, numero2) {
    return numero1 + numero2;
}