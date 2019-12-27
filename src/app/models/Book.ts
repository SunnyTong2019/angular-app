export class Book {
    _id: string;
    title: string;
    authors: string[];
    description: string;
    image: string;
    infoLink: string;

    constructor(id: string, title: string, authors: string[], description: string, image: string, infoLink: string) {
        this._id = id;
        this.title = title;
        this.authors = authors;
        this.description = description;
        this.image = image;
        this.infoLink = infoLink;
    }
}