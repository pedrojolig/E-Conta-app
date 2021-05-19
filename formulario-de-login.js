function carregarFormularioDeLogin() {
    document.getElementById("conteudo").innerHTML = `
    <header>
        <h1>Login Do E-Conta</h1>
    </header>
    <div id="mensagemLoginInvalido"></div>
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
    document.getElementById("botaoLogin").addEventListener("click", efetuarLogin);
}
