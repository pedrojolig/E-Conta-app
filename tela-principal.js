function carregarTelaPrincipal() {
    document.getElementById("conteudo").innerHTML = `
    <header>
        <h1>Bem Vindo/a ${cliente.nome}</h1>
    </header>
    <p>Seu Saldo é ${cliente.saldo}</p>
    <button id="verExtrato">Ver Extrato</button>
    <asid id="extrato">
    </asid>
    `;
    document.getElementById("verExtrato").addEventListener("click", carregarExtrato);
}
