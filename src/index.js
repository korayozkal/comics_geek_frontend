const endPoint = "http://localhost:3000/comicbooks"

document.addEventListener("DOMContentLoaded", () => {
    getComics()
})

function getComics() {
    fetch(endPoint)
        .then(response => response.json())
        .then(comics => {
            comics.data.forEach(comicbook => {
                const comicbooksMarkup = `
          <div data-id=${comicbook.id}>
            <img src=${comicbook.attributes.image_url} height="300" width="200">
            <h3>${comicbook.attributes.title}</h3>
            <p>${comicbook.attributes.publisher.name}</p>
            <button data-id=${comicbook.id}>edit</button>
          </div>
          <br><br>`;

                document.querySelector('#comicbooks-container').innerHTML += comicbooksMarkup;
            })
        })
}