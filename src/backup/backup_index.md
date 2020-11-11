<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Comicbook Geek App</title>
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
            <input id='input-url' type="text" name="image" value="" placeholder="Comicbook Image URL" class="input-text">
            <p>Publishers</p>
            <select id="publisher" name="publisher">
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