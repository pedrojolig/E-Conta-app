function efetuarLogin() {
    cliente = obterDadosDoCliente(document.getElementById("inputCPF").value, document.getElementById("inputSenha").value);
    if (cliente != null) {
        verificarLogin();
        } else {
            mostrarLoginInvalido();
        }
 }
