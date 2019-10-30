// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response



// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach
const url = './data/dados.json'

const request = new XMLHttpRequest()
const div = document.getElementById('root');
request.open('GET', url)
request.send()

request.onreadystatechange = mostrarImg;


function mostrarImg() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
        const data = json.data;
        criarImagens(data)
    }
}

function criarImagens(array) {
    div.innerHTML = `
            <img src = ${data[0].imagem}>
            <img src = ${data[1].imagem}>
            <img src = ${data[2].imagem}>
            `
}

function criarImagensFor(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const img = `<img src= ${element.imagem}>`;
        div.innerHTML += img
    }
}