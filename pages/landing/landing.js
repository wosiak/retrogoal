document.addEventListener('DOMContentLoaded', function () {
  fetch('http://localhost:3000/camisas')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('lista-camisas');

      data.forEach(c => {
        const HTML = `
          <div class="col">
            <div class="card h-100">
              <img src="${c.imagem}" class="card-img-top" alt="Camisa">
              <div class="card-body text-center">
                <h5 class="card-title">${c.nome}</h5>
                <p class="mb-1"><strong>R$ ${c.preco}</strong></p>
                <a href="../camisa/camisa.html?id=${c.id}" class="btn btn-retro w-100">Ver produto</a>
              </div>
            </div>
          </div>
        `;
        container.innerHTML += HTML;
      });
    })
    .catch(err => console.error('Erro ao carregar camisas:', err));
});