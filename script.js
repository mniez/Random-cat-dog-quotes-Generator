document.getElementById('dogButton').addEventListener('click', getRandomDogImage);
document.getElementById('catButton').addEventListener('click', getRandomCatImage);
document.getElementById('quoteButton').addEventListener('click', getRandomQuote);

function getRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogImage').src = data.message;
        });
}

function getRandomCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            document.getElementById('catImage').src = data[0].url;
        });
}

function getRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerText = data.content;
            document.getElementById('author').innerText = `- ${data.author}`;
        });
}
