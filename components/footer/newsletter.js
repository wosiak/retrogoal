function inicializarNewsletter() {
  const form = document.getElementById("cadastro-newsletter");

  if (!form) {
    console.warn("Formulário de newsletter ainda não disponível. Tentando novamente em 100ms...");
    setTimeout(inicializarNewsletter, 100); // tenta de novo até o DOM ser injetado
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nome || !email) {
      document.getElementById("mensagem").innerText = "Por favor, preencha nome e e-mail.";
      return;
    }

    const subscriber = { nome, email };

    try {
      const resposta = await fetch("http://localhost:3000/newsletter-subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subscriber)
      });

      if (!resposta.ok) throw new Error("Erro ao enviar os dados");

      document.getElementById("mensagem").innerText = "Cadastro realizado com sucesso!";
      form.reset();
    } catch (error) {
      console.error(error);
      document.getElementById("mensagem").innerText = "Erro ao enviar cadastro. Tente novamente.";
    }
  });
}

// dispara a função inicial
inicializarNewsletter();
