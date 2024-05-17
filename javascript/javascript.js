const botao = document.querySelector('#botao')

botao.addEventListener('click', () => {
    window.scroll({top: 750, behavior: "smooth"})
});

const botaoNovidades = document.querySelector('#botaoNovidades')

botaoNovidades.addEventListener('click', () => window.scrollTo({
    top: 1200,
    behavior: 'smooth',
  }));

const botaoSuporte = document.querySelector('#botaoSuporte')

botaoSuporte.addEventListener('click', () => window.scrollTo({
    top: 1600,
    behavior: 'smooth',
  }));