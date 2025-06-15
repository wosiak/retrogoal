document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) return;

  fetch(`http://localhost:3000/camisas/${id}`)
    .then(res => res.json())
    .then(camisa => {
      document.getElementById('camisa-img').src = camisa.imagem;
      document.getElementById('camisa-img').alt = camisa.nome;
      document.getElementById('camisa-nome').textContent = camisa.nome;
      document.getElementById('camisa-preco').textContent = `R$ ${camisa.preco}`;
      document.getElementById('descricao').textContent = `${camisa.descricao}`
    })
    .catch(err => console.error("Erro ao carregar o produto:", err));
});
