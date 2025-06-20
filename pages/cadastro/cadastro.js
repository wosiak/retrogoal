document.addEventListener("DOMContentLoaded", () => {
  
  $('#cpf').mask('000.000.000-00');

  const form = document.getElementById("formCadastro");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmarSenha").value;

    if (senha !== confirmar) {
      return document.getElementById("mensagem").innerText = "⚠️ As senhas não são iguais!";
    }

    const usuario = { nome, email, cpf, senha };

    try {
      const resp = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
      });

      if (!resp.ok) throw new Error("Falha no cadastro");

      localStorage.setItem("usuario", JSON.stringify(usuario));
      alert("✅ Cadastro realizado com sucesso!");
      window.location.href = "../login/login.html";
    } catch {
      document.getElementById("mensagem").innerText = "Erro ao cadastrar. Tente novamente.";
    }
  });
});
