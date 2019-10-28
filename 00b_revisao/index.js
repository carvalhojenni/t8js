// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [] remover repetição de código
// [] anonymous function
// [] arrow function
// [] template string

const body = document.body;
const botao = document.getElementById('trocaCor');

body.style.backgroundColor = 'purple';


botao.addEventListener('click', () => {
    const r = geraInteriro(255);
    const g = geraInteriro(255);
    const b = geraInteriro(255);
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});


geraInteriro = num =>
    parseInt(Math.random() * num);