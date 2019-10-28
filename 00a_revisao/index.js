// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// console.log("olar");

// const body = document.querySelector('body');
// const n = Math.random();
// const n2 = n * 255;
// const int = parseInt(n2);

// console.log('numero:', n);
// console.log('numero2:', n2);
// console.log('int:', int);

// console.log(intRandom);
// const intRandom = parseInt(Math.random() * 255);

const body = document.body;
// console.log(body);
const btn = document.getElementById('trocaCor');
// console.log(botao);

body.style.backgroundColor = 'purple';


btn.addEventListener('click', mudaCor);

function geraInteriro() {
    const n = parseInt(Math.random() * 255);
    console.log(n);
    return n;
}

function mudaCor() {
    const r = geraInteriro();
    const g = geraInteriro();
    const b = geraInteriro();
    // console.log('clicouBotao', r, g, b);
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
}