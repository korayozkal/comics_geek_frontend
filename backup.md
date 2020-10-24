
#html#
-------
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- JS Connection Tags -->

    <script src="src/index.js" charset="utf-8"></script>
    <script type="text/javascript" src="src/index.js"></script>
</head>


<div id="comicbooks-container">

</div>


<div class="form-container">

    <form id="create-comicbook-form" style="">
        <h3> Create a Comicbook </h3>

        <input id='input-title' type="text" name="title" value="" placeholder="Comicbook Title" class="input-text">
        <br><br>
        <input id='input-writer' type="text" name="writer" value="" placeholder="Comicbook Writer" class="input-text">
        <br><br>
        <input id='input-artist' type="text" name="artist" value="" placeholder="Comicbook Artist" class="input-text">
        <br><br>
        <textarea id='input-description' name="description" rows="8" cols="80" value="" placeholder="Comicbook Description"></textarea>
        <br><br>
        <input id='input-url' type="text" name="image" value="" placeholder="Comicbook Image URL" class="input-text">
        <br><br>

        <select id="publishers" name="publishers">
            <option value="1">Marvel Comics</option>
            <option value="2">DC Comics</option>
            <option value="3">Image Comics</option>
        </select>
        <br><br>

        <input id='create-button' type="submit" name="submit" value="Create New Comicbook" class="submit">
        <br><br>
        <br><br>
    </form>

</div>


<body></body>

</html>


#JS#
-----
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
