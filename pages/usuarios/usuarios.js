async function carregarUsuarios() {
  const container = document.getElementById("listaUsuarios");

  try {
    const resposta = await fetch("http://localhost:3000/newsletter-subscribers");
    const usuarios = await resposta.json();

    if (usuarios.length === 0) {
      container.innerHTML = "<p class='text-center w-100'>Nenhum usuário cadastrado.</p>";
      return;
    }

    usuarios.forEach(user => {
      const card = document.createElement("div");
      card.classList.add("col");

      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${user.nome}</h5>
            <p class="card-text"><strong>Email:</strong> ${user.email}</p>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (erro) {
    console.error("Erro ao carregar usuários:", erro);
    container.innerHTML = "<p class='text-danger'>Erro ao carregar dados. Verifique o servidor.</p>";
  }
}
