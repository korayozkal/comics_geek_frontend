const endPoint = "http://localhost:3000/comicbooks"

document.addEventListener("DOMContentLoaded", () => {
    getComics()

    const createComicbookForm = document.querySelector('#create-comicbook-form')
    createComicbookForm.addEventListener('submit', (e) => createFormHandler(e))
});

function getComics() {
    fetch(endPoint)
        .then(response => response.json())
        .then(comics => {
            comics.data.forEach(comicbook => {
                let newComicbook = new Comicbook(comicbook, comicbook.attributes) //this is where I am testing my class  
                    //debugger
                document.querySelector('#comicbooks-container').innerHTML += newComicbook.renderComicbook()
                    //render(comicbook)
            })
        })
}

//function render(comicbook) {
//const comicbooksMarkup = `
//<div data-id=${comicbook.id}>
//<img src=${comicbook.attributes.image_url} height="300" width="200">
//<h3>${comicbook.attributes.title}</h3>
//<p> Writer: ${comicbook.attributes.writer}</p>
//<p> Artist: ${comicbook.attributes.artist}</p>
// <p> Publisher: ${comicbook.attributes.publisher.name}</p>
//<button data-id=${comicbook.id}>edit</button>
//</div>
//<br><br>`;

//document.querySelector('#comicbooks-container').innerHTML += comicbooksMarkup;
//}

function createFormHandler(e) {
    e.preventDefault()
    console.log(e)
    const titleInput = document.querySelector('#input-title').value
    const writerInput = document.querySelector('#input-writer').value
    const artistInput = document.querySelector('#input-artist').value
    const imageInput = document.querySelector('#input-url').value
    const publisherInput = document.querySelector('#publisher').value
    const publisherId = parseInt(publisherInput)
        //const publisherId = parseInt(document.querySelector('#publishers').value)// I can do it in single step
    postComicbook(titleInput, writerInput, artistInput, imageInput, publisherInput)
}

function postComicbook(title, writer, artist, image_url, publisher_id) {
    let bodyData = { title, writer, artist, image_url, publisher_id }
    fetch(endPoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        .then(comicbook => {
            //console.log(comicbook);
            //debugger
            const comicbooksMarkup = `
            <div data-id=${comicbook.id}>
            <h3>${comicbook.title}</h3>
            <img src=${comicbook.image_url} height="300" width="200">
            <p> Writer: ${comicbook.writer}</p>
            <p> Artist: ${comicbook.artist}</p>
            <p> Publisher: ${comicbook.publisher_id}</p>
            <button data-id=${comicbook.id}>edit</button>
            </div>
             <br><br>`;
            document.querySelector('#comicbooks-container').innerHTML += comicbooksMarkup;
        })
}