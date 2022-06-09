/* eslint-disable no-else-return */
const entrar = document.querySelector(".botao-login");
// eslint-disable-next-line prefer-arrow-callback
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
