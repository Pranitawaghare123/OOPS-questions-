// Create a Library class that stores books in an array.
// Add methods:

// addBook()

// removeBook()

class Books{
    constructor(bookName){
        this.bookName=bookName
    }
}
class Library{
    constructor(){
         this.StoreBooks=[];

    }
    addBook(book){
        this.StoreBooks.push(book.bookName)
        console.log(`${book.bookName} is Add to library`)

    }
    removeBook(book){
         this.StoreBooks=this.StoreBooks.filter((e)=>{return e !== book.bookName})
        console.log(`${book.bookName} is removed From library`)
    }

    show(){
        console.log("Books Of Library")
        this.StoreBooks.forEach((e,idx)=>{
            console.log(`${idx} = ${e}`)
        })
    }
}

let book=new Books("Meluha")
let book2=new Books("nagas")
let book3=new Books("Ramayana")
let book4=new Books("Ego is enemy")
let library=new Library()
library.addBook(book)
library.addBook(book2)
library.addBook(book3)
library.addBook(book4)
library.removeBook(book)
library.show()