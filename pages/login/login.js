document.addEventListener("DOMContentLoaded", () => { // aguardando o HTML carregar completamente para rodar o script
  const form = document.getElementById("formLogin"); // pego o elemento do Formulário de Login e guardo dentro da variável 'form'
  
  form.addEventListener("submit", async (e) => { // escuto o submit do form ser enviado
    e.preventDefault(); // não deixa que a página seja recarregada dps do form ser enviado

    const email = document.getElementById("emailLogin").value; // linha 7 e 8: guardo o conteúdo digitado pelo user em variáveis
    const senha = document.getElementById("senhaLogin").value;

    try {
      const resposta = await fetch("http://localhost:3000/users"); // dou um get pra buscar os usuários cadastrados
      const usuarios = await resposta.json(); // transformo a resposta em um json válido

      const usuario = usuarios.find(user => user.email === email && user.senha === senha); // 'procuro' nos users se tem email + senha ==

      if (usuario) { // se true
        localStorage.setItem("usuario", JSON.stringify(usuario)); // guardo o usuário no localStorage + envio msg de boas vindas
        alert(`✅ Bem-vindo, ${usuario.nome}!`);
        window.location.href = "../landing/index.html"; // direciono pra página principal
      } else { // senão encontrar...
        document.getElementById("mensagemLogin").innerText = "❌ E-mail ou senha inválidos!"; //envio mensagem de erro
      }

    } catch (erro) { // se o servidor não está rodando, aponta erro 
      console.error("Erro ao fazer login:", erro);
      document.getElementById("mensagemLogin").innerText = "Erro de conexão com o servidor.";
    }
  });
});
