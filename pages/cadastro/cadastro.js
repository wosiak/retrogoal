document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCadastro");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmarSenha").value;

    if (senha !== confirmar) {
      document.getElementById("mensagem").innerText = "⚠️ As senhas não são iguais!";
      return;
    }

    const usuario = { nome, email, cpf, senha };

    try {
      const resposta = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
      });

      if (resposta.ok) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        alert("✅ Cadastro realizado com sucesso!");
        window.location.href = "../login/login.html"; 
      } else {
        document.getElementById("mensagem").innerText = "Erro ao cadastrar!";
      }
    } catch (err) {
      document.getElementById("mensagem").innerText = "Erro na conexão com o servidor.";
    }
  });
});
