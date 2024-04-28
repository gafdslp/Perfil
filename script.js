

// Rolar Suavemente para o Topo da Pagina ao clicar no elemento HOME

document.addEventListener("DOMContentLoaded", function() {

    var homeLink = document.querySelector('.logo-home');
  
    homeLink.addEventListener('click', function(event) {
      event.preventDefault(); 

      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });


// Rolar Suavemente para a seção "SOBRE MIM" da Pagina ao clicar no elemento SOBRE

    var sobreLink = document.querySelector('.sobre');
  
    sobreLink.addEventListener('click', function(event) {
      event.preventDefault(); 
  
      window.scrollTo({
        top: 301,
        behavior: 'smooth' 
      });
    });

// Rolar Suavemente para a seção "EXPERIENCIAS" da Pagina ao clicar no elemento EXPERIENCIA.

var experienciaLink = document.querySelector('.experiencia');
  
experienciaLink.addEventListener('click', function(event) {
  event.preventDefault(); 

  window.scrollTo({
    top: 849,
    behavior: 'smooth' 
  });
});

// Rolar Suavemente para a seção "Educação" da Pagina ao clicar no elemento Educação.

var experienciaLink = document.querySelector('.educação');
  
experienciaLink.addEventListener('click', function(event) {
  event.preventDefault(); 

  window.scrollTo({
    top: 2964,
    behavior: 'smooth' 
  });
});

// Rolar Suavemente para a seção "Habilidades" da Pagina ao clicar no elemento Habilidades.

var experienciaLink = document.querySelector('.habilidades');
  
experienciaLink.addEventListener('click', function(event) {
  event.preventDefault(); 

  window.scrollTo({
    top: 4309,
    behavior: 'smooth' 
  });
});

// Rolar Suavemente para a seção "CONTATOS" da Pagina ao clicar no elemento Contato.

var contatoLink = document.querySelector('.contato');
  
contatoLink.addEventListener('click', function(event) {
  event.preventDefault(); 

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' 
  });
});



});
  