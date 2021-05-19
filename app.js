let login = false;

const telaPrincipal = `
<header>
<h1>Bem Vindo José Pedro</h1>
</header>
<p>Seu Saldo é R$1990,53</p>


`;

const formularioDeLogin = `
<header>
    <h1>Login Do E-Conta</h1>
</header>
<form>
    <label for="inputCPF">CPF: </label>
    <input type="text" id="inputCPF" placeholder="Informe Seu CPF" />
    <br />
    <label for="inputSenha">Senha: </label>
    <input type="password" id="inputSenha" placeholder="Informe a Sua Senha" />
    <br />
    <br />
    <input type="button" id="botaoLogin" value="Efetuar Login" />
</form>
`;

function verificarLogin() {
    if (login) {
        document.getElementById("conteudo").innerHTML = telaPrincipal;
    }
    else {
        document.getElementById("conteudo").innerHTML = formularioDeLogin;
    }
}

verificarLogin();


function efetuarLogin() {
    login = true;
    verificarLogin();
}

document.getElementById("botaoLogin").addEventListener("click", efetuarLogin);