//console.log("in comicbook.js")

class Comicbook {

    constructor(comicbook, comicbookAttributes) {
        this.id = comicbook.id;
        //debugger
        this.title = comicbookAttributes.title;
        this.writer = comicbookAttributes.writer;
        this.artist = comicbookAttributes.artist;
        this.image_url = comicbookAttributes.image_url;
        this.category = comicbookAttributes.publisher;
        //Comicbook.all.push(this);
    }
}