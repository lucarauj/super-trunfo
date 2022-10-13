var carta1 = {
  nome: "Bulbasauro",
  imagem: "https://www.pngfind.com/pngs/m/316-3169868_-img-bulbasaur-jpg-hd-png-download.png",
  atributos: {
    Ataque: 7,
    Defesa: 8,
    Magia: 6
  }
};

var carta2 = {
  nome: "Darth Vader",
  imagem: "https://a-static.mlcdn.com.br/1500x1500/darth-vader-star-wars-desenho-retro-vintage-quadro-conspecto/conspecto/135057/4373745dc9ab38b94fc87f73205af9c8.jpg",
  atributos: {
    Ataque: 9,
    Defesa: 8,
    Magia: 2
  }
};

var carta3 = {
  nome: "Shiryu de dragão",
  imagem: "https://img.elo7.com.br/product/zoom/2B30902/camiseta-shiryu-de-dragao-fullprint-nerd.jpg",
  atributos: {
    Ataque: 5,
    Defesa: 9,
    Magia: 10
  }
};

var cartas = [carta1, carta2, carta3]
var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    var numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogadores()

}

function obterAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obterAtributoSelecionado()
  var elementoResultado = document.getElementById("resultado")

  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

  if (valorCartaJogador > valorCartaMaquina) {

    htmlResultado = "<p class='resultado-final'>Você venceu!</p>"
  } else if (valorCartaJogador < valorCartaMaquina) {

    htmlResultado = "<p class='resultado-final'>Você perdeu!</p>"
  } else {

    htmlResultado = "<p class='resultado-final'>Você empatou!</p>"
  }
  document.getElementById("btnJogar").disabled = true;
  elementoResultado.innerHTML = htmlResultado;
  exibirCartaMaquina()
}

function exibirCartaJogadores() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesAtributos = ""

  for (var atributo in cartaJogador.atributos) {
    opcoesAtributos += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesAtributos + '</div>'
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesAtributos = ""

  for (var atributo in cartaMaquina.atributos) {
    opcoesAtributos += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<p/>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesAtributos + '</div>'
}