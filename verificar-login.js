function verificarLogin(cliente = null) {
    if (cliente != null) {
        carregarTelaPrincipal(cliente);
    } else {
        carregarFormularioDeLogin();
    }
}
