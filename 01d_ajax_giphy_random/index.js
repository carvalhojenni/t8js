<<<<<<< HEAD
// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function

const request = new XMLHttpRequest()

const quero = "mulher maravilha"
const url = 'http://api.giphy.com/v1/gifs/search?q=' + quero + '&api_key=dc6zaTOxFJmzC&limit=3&offset=0'

request.onreadystatechange = mostraGif;
request.open('GET', url);
request.send();

function mostraGif() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
        // const data1 = (json.data[0].images.original.url)
        // const data2 = (json.data[1].images.original.url)
        // const data3 = (json.data[2].images.original.url)
        // const body = document.body
        // const img1 = document.getElementById('imagem').src = data1
        // const img2 = document.createElement('img')
        // const img3 = document.createElement('img')
        // body.appendChild(img2).src = data2
        // body.appendChild(img3).src = data3
        // document.querySelector('#imagem').src = imgSrc
        const body = document.body;
        body.innerHTML = `
        <img src = ${json.data[0].images.original.url}>
        <img src = ${json.data[1].images.original.url}>
        <img src = ${json.data[2].images.original.url}>
        `
        console.log(json);

    }
=======
// XMLHttpRequest na rota random

const urlRequest = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`

const request = new XMLHttpRequest()
request.onreadystatechange = mostraGif;
request.open('GET', urlRequest);
request.send();

function mostraGif() {
  if (request.readyState === 4 && request.status === 200) {
    const response = request.response;
    const json = JSON.parse(response);

    const imgUrl = json.data.images.original.url;

    const img = document.getElementById('imagem');
    img.src = imgUrl;
  }
>>>>>>> f867572238c8dcffe2dd99a7c17641c882d5fba1
}