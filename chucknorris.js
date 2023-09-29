document.addEventListener("DOMContentLoaded", function () {
    const chuckNorrisApiUrl = "https://api.chucknorris.io/jokes/random";
    const jokeElement = document.getElementById("joke");
    const getJokeButton = document.getElementById("get-joke-button");

    getJokeButton.addEventListener("click", function () {
        fetch(chuckNorrisApiUrl)
            .then(response => response.json())
            .then(data => {
                jokeElement.textContent = data.value;
            })
            .catch(error => {
                console.error("Error al obtener datos de la API", error);
            });
    });
});
