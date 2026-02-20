// Create a Book class with title and author.
// Add a method describe().

class Book{
    constructor(title,author){
        this.title=title;
        this.author=author;
    }
    describe(){
        console.log(`Describe the book by ${this.author} names of book is ${this.title}`)
    }
}

let book1=new Book("Sham chi aai","P.L.Despande")
book1.describe()