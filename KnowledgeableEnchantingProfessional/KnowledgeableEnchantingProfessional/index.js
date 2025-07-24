
// Lista de produtos tradicionais
const produtos = [
  {
    nome: "Brigadeiro com Confete",
    preco: 3.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397740932148887573/image.jpg?ex=6882d32e&is=688181ae&hm=ff025fd5c2a534406b960270802d1f6eddc5c3b80c8ee1ba6e555ab715195c3a&=&format=webp&width=408&height=544"
  },
  {
    nome: "Bigadeiro",
    preco: 3.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397740934002769981/image.jpg?ex=6882d32f&is=688181af&hm=359decf8c3fd456f78919061709b5b17ab29295ae9e30132a477612a5291f56a&=&format=webp&width=408&height=544"
  },
  {
    nome: "Cajuzinho",
    preco: 2.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397741571641704448/image.jpg?ex=6882d3c7&is=68818247&hm=da5e9e4d5b6880f2fb1c16e37c395068ea0ceb84ed108883802d3577fc8c3bbd&=&format=webp&width=486&height=648"
  },
  {
    nome: "Ninho normal",
    preco: 2.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397740933671555103/image.jpg?ex=6882d32f&is=688181af&hm=a49fa22a442555bb3839eda500dff85a6e8057a21ae73ff8a1d796b6b9434b62&=&format=webp&width=408&height=544"
  },
  
  {
    nome: "Paçoca",
    preco: 3.50,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397751902372102165/WhatsApp_Image_2025-07-23_at_22.26.26.jpeg?ex=6882dd66&is=68818be6&hm=fd7b8d1e8ed6055d67421b7456de49c909d4cc6aa1bb114d38f5d64fefaa07b8&=&format=webp&width=486&height=648"
  },

  {
    nome: "Brigadeiro de morango",
    preco: 2.50,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397749785036984430/WhatsApp_Image_2025-07-23_at_22.07.04.jpeg?ex=6882db6d&is=688189ed&hm=e51d27c9c82a4b265ab175522078fbedc1346297c2b4ef69150dbd87964494d3&=&format=webp&width=486&height=648"
  },

  {
    nome: "Casadinho de morango c/brigadeiro",
    preco: 3.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397750614938882188/WhatsApp_Image_2025-07-23_at_22.19.33.jpeg?ex=6882dc33&is=68818ab3&hm=8142abad0878e9ee9c804b7e11e51afe05f87884e2b85569e38df4c6d7761292&=&format=webp&width=736&height=595"
  },

  {
    nome: "Casadinho de morango c/ninho",
    preco: 3.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397755336240402452/WhatsApp_Image_2025-07-23_at_22.37.41_1.jpeg?ex=6882e099&is=68818f19&hm=652724ab101518101292814779621fbddfb5595482d9d0238f451356d5aa3944&=&format=webp&width=510&height=648"
  },

  {
    nome: "Casadinho de brigadeiro tradicional e ninho",
    preco: 3.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397756386154381352/WhatsApp_Image_2025-07-23_at_22.41.46_1.jpeg?ex=6882e193&is=68819013&hm=a811764fd4973e4a3a5c99bfe3000501109fb020911a16afb3122ce6a2009c91&=&format=webp&width=724&height=648"
  },
  
  {
    nome: "Beijinho",
    preco: 3.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397756775620546620/WhatsApp_Image_2025-07-23_at_22.45.25.jpeg?ex=6882e1f0&is=68819070&hm=7df27834565fcf8e7be24a775de7c243edb4ab48ea521ad47a1521643fb9b440&=&format=webp"
  },

  
];

// Lista de doces recheados
const docesRecheados = [
  {
    nome: "Brigadeiro com Morango",
    preco: 5.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397746563035430933/WhatsApp_Image_2025-07-23_at_22.04.21.jpeg?ex=6882d86d&is=688186ed&hm=100be000bdab18337620a9e5a3e627bc2cbf779bf7bfa1820cf82e7861dd0227&=&format=webp&width=568&height=544"
  },
  {
    nome: "Brigadeiro com Uva",
    preco: 5.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397749076757577749/WhatsApp_Image_2025-07-23_at_22.10.54.jpeg?ex=6882dac4&is=68818944&hm=e9b5576e194b1317904d460ab9bc5952abb837b2b8b351511b75be81e2edfd78&=&format=webp"
  },
  {
    nome: "Brigadeiro com Ferrero Rocher",
    preco: 3.50,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397740931767341109/image.jpg?ex=6882d32e&is=688181ae&hm=5d6a8534bca9c180f881f84faa10069f54e8ec7b9e76c1cdcce6518635eebdc7&=&format=webp&width=408&height=544"
  },
  {
    nome: "Ninho com Nutela",
    preco: 3.90,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397740932601741457/image.jpg?ex=6882d32f&is=688181af&hm=6cfad6a5fa13eae4495ff28dd3f9e3b1b339f3df7ce555c42fa8da44bb48512a&=&format=webp&width=408&height=544"
  },
  {
    nome: "Morango Rocher",
    preco: 13.50,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397748850793648219/WhatsApp_Image_2025-07-23_at_22.05.31.jpeg?ex=6882da8e&is=6881890e&hm=63f822f6ca48a2f2dd8df244bc18c5949115871b9a4ef8239c781851bc5cb7f6&=&format=webp&width=486&height=648"
  },

  {
    nome: "Morango com ninho e nutella",
    preco: 13.50,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397751137138118656/WhatsApp_Image_2025-07-23_at_22.06.23.jpeg?ex=6882dcb0&is=68818b30&hm=aa50a9094041cbf681b43661138e896873694e018e89c99ccadf5354c5f7dc81&=&format=webp&width=518&height=648"
  },

  
];


// Lista de caixinhas especiais
const caixinhasEspeciais = [
  {
    nome: "Caixa com 4 docinhos",
    preco: 10.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397746563434151986/WhatsApp_Image_2025-07-23_at_22.04.55.jpeg?ex=6882d86d&is=688186ed&hm=fed19a2c4379936e6631fc5ba364965a6a77a67cee1aa19faef1420d3703687d&=&format=webp&width=408&height=544"
  },
  {
    nome: "Caixa com 6 docinhos",
    preco: 14.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397756561127899146/WhatsApp_Image_2025-07-23_at_22.43.52.jpeg?ex=6882e1bd&is=6881903d&hm=4ab1b46a3788ad3c4f531feead5c7a2b36a436cdf9082be2256be3c36cb0ffb0&=&format=webp&width=486&height=648"
  },
  {
    nome: "Caixa com 8 docinhos",
    preco: 26.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397754920593260566/WhatsApp_Image_2025-07-23_at_22.37.41.jpeg?ex=6882e036&is=68818eb6&hm=74e27669a7f8804c48f65eb86223d09c395d3998276a56c456e467216c024aac&=&format=webp&width=807&height=543"
  },
  {
    nome: "Caixa Personalizada",
    preco: 18.00,
    imagem: "https://media.discordapp.net/attachments/1191864148338941983/1397743508097470554/image.jpg?ex=6882d595&is=68818415&hm=c352b0a903a27854b2ae54678c67a3308b69affdf8a8a4ab8b858084273e9bea&=&format=webp&width=364&height=648"
  }
];

const carrinho = [];

function mostrarProdutos() {
  const container = document.getElementById('produtos');
  produtos.forEach((p, i) => {
    container.innerHTML += `
      <div class="produto">
        <img src="${p.imagem}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco.toFixed(2)}</p>
        <button onclick="adicionarAoCarrinho(${i}, 'tradicional')">Adicionar</button>
      </div>
    `;
  });
}

function mostrarDocesRecheados() {
  const container = document.getElementById('doces-recheados');
  docesRecheados.forEach((p, i) => {
    container.innerHTML += `
      <div class="produto">
        <img src="${p.imagem}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco.toFixed(2)}</p>
        <button onclick="adicionarAoCarrinho(${i}, 'recheado')">Adicionar</button>
      </div>
    `;
  });
}

function mostrarCaixinhasEspeciais() {
  const container = document.getElementById('caixinhas-especiais');
  caixinhasEspeciais.forEach((p, i) => {
    container.innerHTML += `
      <div class="produto">
        <img src="${p.imagem}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco.toFixed(2)}</p>
        <button onclick="adicionarAoCarrinho(${i}, 'caixinha')">Adicionar</button>
      </div>
    `;
  });
}

function adicionarAoCarrinho(index, tipo) {
  if (tipo === 'tradicional') {
    carrinho.push(produtos[index]);
  } else if (tipo === 'recheado') {
    carrinho.push(docesRecheados[index]);
  } else if (tipo === 'caixinha') {
    carrinho.push(caixinhasEspeciais[index]);
  }
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  const total = document.getElementById('total');
  lista.innerHTML = "";
  let soma = 0;

  carrinho.forEach((item, i) => {
    soma += item.preco;
    lista.innerHTML += `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
  });

  total.textContent = soma.toFixed(2);
}

document.getElementById('finalizar').addEventListener('click', () => {
  if (carrinho.length === 0) {
    alert("Adicione itens ao carrinho!");
    return;
  }

  let mensagem = "Olá! Quero fazer o seguinte pedido:%0A";
  let total = 0;

  carrinho.forEach((item) => {
    mensagem += `• ${item.nome} - R$ ${item.preco.toFixed(2)}%0A`;
    total += item.preco;
  });

  mensagem += `%0ATotal: R$ ${total.toFixed(2)}`;

  const numero = "5521968450885"; // <-- Coloque seu número com DDI (55) + DDD + número
  const url = `https://wa.me/${555521968450885}?text=${mensagem}`;
  window.open(url, "_blank");
});

// Inicializa os produtos
mostrarProdutos();
mostrarDocesRecheados();
mostrarCaixinhasEspeciais();
