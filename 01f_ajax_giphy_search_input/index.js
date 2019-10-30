// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root
const quero = ""
const url = 'http://api.giphy.com/v1/gifs/search?q=' + quero + '&api_key=dc6zaTOxFJmzC&limit=3&offset=0'

const request = new XMLHttpRequest()
request.onreadystatechange = mostraGif;
request.open('GET', url);
request.send();

function mostraGif() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
        console.log(json);

        const imgUrl = json.data.images.original.url;

        const img = document.getElementById('imagem');

        // img.src = imgUrl;
    }
}