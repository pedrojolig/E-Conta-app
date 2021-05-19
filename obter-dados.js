function obterDadosDoCliente(cpf, senha) {
    const clientes = JSON.parse(dados);
    let cliente = null;
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].cpf == cpf && clientes[i].senha == senha) {
            cliente = clientes[i];
        }
    }
    return cliente;
}
