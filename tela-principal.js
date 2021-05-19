function carregarTelaPrincipal(cliente) {
    document.getElementById("conteudo").innerHTML = `
    <header>
    <h1>Bem Vindo ${cliente.nome}</h1>
    </header>
    <p>Seu Saldo é R$${cliente.saldo}</p>
    `;
    
}
