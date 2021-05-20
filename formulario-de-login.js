function carregarFormularioDeLogin() {
    document.getElementById("conteudo").innerHTML = `
    <dialog open>
    <p>testando</p>
    </dialog>
    <header>
        <h1>Login Do E-Conta</h1>
    </header>
    <div id="mensagemLoginInvalido"></div>
    <form>
        <label for="inputCPF">CPF: </label>
        <input type="text" id="inputCPF" placeholder="Informe Seu CPF" autofocus="true" required="true" pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}" title="Informe seu CPF incluindo os pontos e o hífem" />
        <br />
        <label for="inputSenha">Senha: </label>
        <input type="password" id="inputSenha" placeholder="Informe a Sua Senha" required="true" />
        <br />
        <br />
        <input type="button" id="botaoLogin" value="Efetuar Login" />
    </form>
    `;
    document.getElementById("botaoLogin").addEventListener("click", efetuarLogin);
}
