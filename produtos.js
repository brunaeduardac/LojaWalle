document.addEventListener('DOMContentLoaded', function() {
  // Adicione um evento de clique para os links das categorias
  var links = document.querySelectorAll('.dropdown-menu .dropdown-item');
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Evite que o link recarregue a página

      // Obtenha o ID da categoria alvo
      var targetId = this.getAttribute('href');
      // Redirecione para a página de produtos
      var targetPage = "./produtos.html#" + targetId.substring(1);
      window.location.href = targetPage;
    });
  });
});

    // Adicionando funcionalidade aos botões "LER MAIS" e "LER MENOS"
    document.querySelectorAll('.btn-read-more').forEach(function(btn) {
      btn.addEventListener('click', function() {
          // Exibir texto extra
          this.closest('.card-body').querySelector('.text-extra').style.display = 'block';
          // Esconder botão "LER MAIS" e mostrar botão "LER MENOS"
          this.style.display = 'none';
          this.closest('.card-body').querySelector('.btn-read-less').style.display = 'block';
      });
  });

  document.querySelectorAll('.btn-read-less').forEach(function(btn) {
      btn.addEventListener('click', function() {
          // Esconder texto extra
          this.closest('.card-body').querySelector('.text-extra').style.display = 'none';
          // Esconder botão "LER MENOS" e mostrar botão "LER MAIS"
          this.style.display = 'none';
          this.closest('.card-body').querySelector('.btn-read-more').style.display = 'block';
      });
  });
  
  
  