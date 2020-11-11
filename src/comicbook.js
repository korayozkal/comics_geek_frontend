//console.log("in comicbook.js")

class Comicbook {

    constructor(comicbook, comicbookAttributes) {
        this.id = comicbook.id;
        //debugger
        this.title = comicbookAttributes.title;
        this.writer = comicbookAttributes.writer;
        this.artist = comicbookAttributes.artist;
        this.image_url = comicbookAttributes.image_url;
        this.publisher = comicbookAttributes.publisher.name;
        Comicbook.all.push(this); // I am pushing each new instance of Comicbook object to my array
        //debugger
    }

    renderComicbook() {
        //debugger //check what this is 
        return `
            <div data-id=${this.id}>
            <img src=${this.image_url} height="300" width="200">
            <h3>${this.title}</h3>
            <p> Writer: ${this.writer}</p>
            <p> Artist: ${this.artist}</p>
            <p> Publisher: ${this.publisher}</p>
            <button data-id=${this.id}>delete</button>
          </div>
          <br><br>`;

    }
}
Comicbook.all = [];