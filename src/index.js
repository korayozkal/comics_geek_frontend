const endPoint = "http://localhost:3000/comicbooks"

document.addEventListener("DOMContentLoaded", () => {
    getComics()

    const createComicbookForm = document.querySelector('#create-comicbook-form')
    createComicbookForm.addEventListener('submit', (e) => createFormHandler(e))
    const comicbooksContainer = document.querySelector('#comicbooks-container')
    comicbooksContainer.addEventListener('click', e => deleteComicbook(e));

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

function createFormHandler(e) {
    e.preventDefault()
    console.log(e)
    const titleInput = e.target.title.value // document.querySelector('#input-title').value // e.target.title.value
    const writerInput = e.target.writer.value // document.querySelector('#input-writer').value
    const artistInput = e.target.artist.value // document.querySelector('#input-artist').value
    const imageInput = e.target.image.value // document.querySelector('#input-url').value
    const publisherInput = e.target.publisher.value // document.querySelector('#publisher').value
    const publisherId = parseInt(publisherInput)
        //const publisherId = parseInt(document.querySelector('#publishers').value)// I can do it in single step
    postComicbook(titleInput, writerInput, artistInput, imageInput, publisherInput)
}

// I am displaying the comicbooks that I submitted in the form.
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
            <img src=${comicbook.image_url} height="300" width="200">
            <h3>${comicbook.title}</h3>
            <p> Writer: ${comicbook.writer}</p>
            <p> Artist: ${comicbook.artist}</p>
            <p> Publisher: ${comicbook.publisher_id}</p>
            <button data-id=${comicbook.id}>delete</button>
            </div>
             <br><br>`;
            document.querySelector('#comicbooks-container').innerHTML += comicbooksMarkup;
        })
}

function deleteComicbook(e) {
    e.preventDefault()
        //debugger
    let comicbookId = e.target.parentElement.dataset.id
    fetch(`${endPoint}/${comicbookId}`, { //we are making it dynamics
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
        .then(e.target.parentElement.remove())

}