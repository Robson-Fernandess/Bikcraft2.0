// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href; // acessando o url
  const href = link.href; // acessando o link

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//ativar items do orcamento

const paramentros = new URLSearchParams(window.location.search);

function ativarProduto(paramentro) {
  const elemento = document.getElementById(paramentro);
  if (elemento) {
    elemento.checked = true;
  }
}

paramentros.forEach(ativarProduto);

// Perguntas frequentes accordion
const perguntas = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativo");

  // deixando o aria-expanded true quando estiver selecionado
  const ativo = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativo);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// substituir a imagem principal pela img clicada
const imagens = document.querySelectorAll(".bicicleta-imagens img");

// Função para trocar as imgs ao clicar
function trocarFoto(event) {
  const imgPrincipal = document.querySelector(".img-Principal");
  const imgClicada = event.currentTarget;
  imgPrincipal.src = imgClicada.src;
}

// Função para buscar as imgs clicadas
function galeriaImg(img) {
  img.addEventListener("click", trocarFoto);
}
//loop pra pegar todas as imgs
imagens.forEach(galeriaImg);

// Animação, colocando dentro do if para so carregar se existir. para não da erro
if (window.SimpleAnime) {
  new SimpleAnime();
}
