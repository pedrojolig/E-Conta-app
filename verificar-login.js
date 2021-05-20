function verificarLogin() {
    if (cliente != null) {
        carregarTelaPrincipal(cliente);
    } else {
        carregarFormularioDeLogin();
    }
}
