<div class="form-container">

  <form id="create-comicbook-form" style="">
    <h3> Create a Comicbook </h3>

    <input id='input-title' type="text" name="title" value="" placeholder="Your Comicbook title..." class="input-text">
    <br><br>
    <input id='input-writer' type="text" name="writer" value="" placeholder="Your Comicbook Writer..." class="input-text">
    <br><br>
    <input id='input-artist' type="text" name="artist" value="" placeholder="Your Comicbook Artist..." class="input-text">
    <br><br>
    <textarea id='input-description' name="description" rows="8" cols="80" value="" placeholder="Your Comicbook Description..."></textarea>
    <br><br>
    <input id='input-url' type="text" name="image" value="" placeholder="Your Comicbook Image URL..." class="input-text">
    <br><br>

    <select id="publisherss" name="publishers">
      <option value="1">Marvel Comics</option>
      <option value="2">DC Comics</option>
      <option value="3">Image Comics</option>
    </select>
    <br><br>

    <input id= 'create-button' type="submit" name="submit" value="Create New Comicbook" class="submit">
  </form>

</div>



----------

<div class="form-container">

    <form id="create-comicbook-form" style="">
        <h2> Create a Comicbook </h2>
        
        <input id='input-title' type="text" name="title" value="" placeholder="Comicbook Title" class="input-text">
       <br><br>
        <input id='input-writer' type="text" name="writer" value="" placeholder="Comicbook Writer" class="input-text">
        <br><br>
        <input id='input-artist' type="text" name="artist" value="" placeholder="Comicbook Artist" class="input-text">
        <br><br>
        <textarea id='input-description' name="description" rows="8" cols="80" value="" placeholder="Comicbook Description"></textarea>
         <br><br>
        <input id='input-url' type="text" name="image" value="" placeholder="Comicbook Image URL" class="input-text">
        <p>Publishers</p>
        <select id="publishers" name="publishers">
            <option value="1">Marvel Comics</option>
            <option value="2">DC Comics</option>
            <option value="3">Image Comics</option>
        </select>
        <br><br>
        <input id='create-button' type="submit" name="submit" value="Create New Comicbook" class="submit">

    </form>
</div>


----------
BACKUP 2
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

function createFormHandler(e) {
    e.preventDefault()
    console.log(e)

    const titleInput = document.querySelector('#input-title').value
    const writerInput = document.querySelector('#input-writer').value
    const artistInput = document.querySelector('#input-artist').value
    const descriptionInput = document.querySelector('#input-description').value
    const imageInput = document.querySelector('#input-url').value
    const publisherInput = document.querySelector('#publishers').value
    const publisherId = parseInt(publisherInput)
        //const publisherId = parseInt(document.querySelector('#publishers').value)// I can do it in single step
    postComicbook(titleInput, writerInput, artistInput, descriptionInput, imageInput, publisherInput)
}

function postComicbook(title, writer, artist, description, image_url, publisher_id) {
    let bodyData = { title, writer, artist, description, image_url, publisher_id }
    fetch(endPoint, {

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- JS Connection Tags -->

    <script src="src/index.js" charset="utf-8"></script>
    <script type="text/javascript" src="src/comicbook.js"></script>
    <script type="text/javascript" src="src/index.js"></script>

</head>

<body>
    <h1>COMICBOOK GEEK APP</h1>

    <div class="form-container">

        <form id="create-comicbook-form" style="">
            <h2> Create a Comicbook </h2>

            <input id='input-title' type="text" name="title" value="" placeholder="Comicbook Title" class="input-text">
            <br><br>
            <input id='input-writer' type="text" name="writer" value="" placeholder="Comicbook Writer" class="input-text">
            <br><br>
            <input id='input-artist' type="text" name="artist" value="" placeholder="Comicbook Artist" class="input-text">
            <br><br>
            <textarea id='input-description' name="description" rows="8" cols="80" value="" placeholder="Comicbook Description"></textarea>
            <br><br>
            <input id='input-url' type="text" name="image" value="" placeholder="Comicbook Image URL" class="input-text">
            <p>Publishers</p>
            <select id="publishers" name="publishers">
            <option value="1">Marvel Comics</option>
            <option value="2">DC Comics</option>
            <option value="3">Image Comics</option>
        </select>
            <br><br>
            <input id='create-button' type="submit" name="submit" value="Create New Comicbook" class="submit">

        </form>
    </div>
    <br><br>
    <h2>MY COMICBOOKS</h2>
    <div id="comicbooks-container">

    </div>

</body>

</html>