// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const input1 = document.getElementById('gifInput')
const url = 'http://api.giphy.com/v1/gifs/search?q=' + input1 + '&api_key=dc6zaTOxFJmzC&limit=3&offset=0'
const div = document.getElementById('root')

const request = new XMLHttpRequest()
request.onreadystatechange = myFunction;
request.open('GET', url);
request.send();

function myFunction() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
        const data = json.data;
        const imgUrl = json.data[0].images.original.url;

        if (input1.checkValidity()) {
            document.getElementById("gifButton").innerHTML = input1.validationMessage;
            div.innerHTML += `
            <img src=${data[0].imagem} >
            `
        }
    } else {
        document.getElementById("gifButton").innerHTML = "Input OK";
    }
}