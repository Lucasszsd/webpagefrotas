
let tentativaDeLogin = 3;


function logar() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    verificaLogin(senha,login);
}

function verificaLogin(senha, login){
    if (senha === "admin" && login === "admin") {
        window.open("./main.html","_self");
    }else{
        alert("Login ou senha incorretos " + (tentativaDeLogin-1) + " Tentativas restantes");
        tentativaDeLogin--;
        if(tentativaDeLogin === 0){
            alert("Conta bloqueada");
        }
    }

    console.log(tentativaDeLogin);
}

function volta(){
    window.open("./main.html","_self");
}

function cadastra(){
    window.open("./cadastro.html","_self");
}

function recebeSenha(){
    
    let senhaConfirma = document.getElementById("senha").value;
    let confirmacaoConfirma = document.getElementById("confirmacao").value;
    confereSenha(senhaConfirma, confirmacaoConfirma);
}


function confereSenha(senha,confirmacao){
    if (senha != confirmacao) {
        alert("Senhas não conferem");
    }
}

function reserva(){
    window.open("./reserva.html" ,"_self");
}

function inspecao(){
    window.open("./inspecao.html","_self");
}

function devolucao(){
    window.open("./devolucao.html","_self");
}

function requisicoes(){
    window.open("./requisicoes.html" ,"_self");
}

function relatorios(){
    window.open("./relatorios.html" ,"_self");
}

function disponiveis(){
    window.open("./disponiveis.html","_self");
}

function manutencao(){
    window.open("./manutencao.html", "_self");
}

function ajustes(){
    window.open("./ajustes.html", "_self");
}



