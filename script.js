const entrar = document.querySelector('.botao-login'); // cria constante para atribuir o valor do botão login
entrar.addEventListener('click', () => { // cria evento de click para o botão
  const login = 'tryber@teste.com'; // cria variável com o valor correto do email para ser verificado
  const senha = '123456'; // cria variável com valor correto da senha para ser verificada
  const usuario = document.querySelector('#email'); // cria contante para atribuir o valor do campo email
  const password = document.querySelector('#password'); // cria contante para atribuir o valor do campo senha
  if (usuario.value === login && password.value === senha) { // cria condição para verificar se oq foi digitado no email tem o mesmo valor do email/senha 'corretos'
    return window.alert('Olá, Tryber!'); // retorna uma janela com a mensagem
  }
  return window.alert('Email ou senha inválidos'); // retorna a janela com mensagem
});


// -------------- cria evento para habilitar o botão "Enviar"

const botao = document.querySelector('#submit-btn'); 
const enviar = document.querySelector('#agreement');
botao.disabled = true;

enviar.addEventListener ('click', function() {
  if (enviar.checked) {
    botao.disabled = false; //se o botão estiver marcado o 'desabilitado' será 'falso', então ele irá manter o botão 'habilitado' (Habilita o botão)
  } else {
    botao.disabled = true; // se o botão não estiver marcado o 'desabilitado' será 'verdadeiro', então ele irá 'desabilitar o botão' (Desabilita o botão)
  }

})
