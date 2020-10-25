//console.log("in comicbook.js")

class Comicbook {
    constructor(id, comicbookAttributes) {
        this.id = id;
        this.title = comicbookAttributes.title;
        this.description = comicbookAttributes.description;
        this.writer = comicbookAttributes.writer;
        this.artist = comicbookAttributes.artist;
        this.image_url = comicbookAttributes.image_url;
        this.category = comicbookAttributes.publisher;
        Comicbook.all.push(this);
    }