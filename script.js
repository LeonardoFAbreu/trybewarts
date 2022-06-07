const entrar = document.querySelector(".botao-login");
entrar.addEventListener("click", function () {
  const login = "tryber@teste.com";
  const senha = "123456";
  const usuario = document.querySelector("#email");
  const password = document.querySelector("#password");
  if (usuario.value === login && password.value === senha) {
    return window.alert("Olá, Tryber!");
  }
  return window.alert("Email ou senha inválidos");
});


