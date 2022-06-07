const entrar = document.querySelector(".botao-login");
entrar.addEventListener("click", function formulario() {
    const login = "tryber@teste.com";
    const senha = "123456";
    const usuario = document.querySelector("#email");
    const password = document.querySelector("#password");
        if (usuario.value === login && password.value === senha) {
            return window.alert("Olá, Tryber!");
        } else if (usuario.value != login && password.value != senha) {
            return window.alert("Email ou senha inválidos");
            }
});

formulario();
