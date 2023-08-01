class Book{
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

let samplebook = new Book("Uno", "Mexico", "284790")
let samplebook2 = new Book("two", "English", "987640")

console.log(samplebook)
console.log(samplebook2)