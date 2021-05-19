function efetuarLogin() {
    let cliente = obterDadosDoCliente(document.getElementById("inputCPF").value, document.getElementById("inputSenha").value);
    if (cliente != null) {
        verificarLogin(cliente);
        } else {
            mostrarLoginInvalido();
        }
 }
