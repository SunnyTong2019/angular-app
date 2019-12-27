export class Book {
    title: string;
    authors: string[];
    description: string;
    image: string;
    infoLink: string;

    constructor(title: string, authors: string[], description: string, image: string, infoLink: string) {
        this.title = title;
        this.authors = authors;
        this.description = description;
        this.image = image;
        this.infoLink = infoLink;
    }
}