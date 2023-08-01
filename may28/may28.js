//Consists of may 28th, may 30th, june 4th, june 8th and june 11th
class Book{
    constructor(title,author,isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

class UI{
    addBook(book){
        let list = document.querySelector(".list")
        let li = document.createElement("li")
        li.className = "list-item"
        li.innerHTML = `
            <div class = "list-item list-title">${book.title}</div>
            <div class = "list-item list-author">${book.author}</div>
            <div class = "list-item list-isbn">${book.isbn}</div>
            <div class = "list-item delete-btn">X</div>
        `
        list.appendChild(li)
    }

    clearBook(){
        document.querySelector(".title-text").value = ""
        document.querySelector(".author-text").value = ""
        document.querySelector(".isbn-text").value = ""
    }

    showAlert(notification, message){
        let div = document.createElement("div")
        div.className = `alert ${notification}`
        div.appendChild(document.createTextNode(message))
        let bookList = document.querySelector(".book-list")
        let form = document.querySelector(".form")
        bookList.insertBefore(div,form)
        setTimeout(()=>{
            document.querySelector(".alert").remove()    
        },3000)
    }
    deleteBook(deventTarget){
        //console.log(deventTarget)
        if(deventTarget.className == "list-item delete-btn"){
            deventTarget.parentElement.remove()
        }
    }
}

class BookStore{
    static getBooks(){
        let books;
        if(localStorage.getItem("books") === null){
            books = []
        }else{
            books = JSON.parse(localStorage.getItem("books"))
        }
        return books
    }

    static addBook(book){
        let books = BookStore.getBooks()
        books.push(book)
        localStorage.setItem("books",JSON.stringify(books))
    }

    static displayBooks(){
        let books = BookStore.getBooks()
        for(let j = 0; j < books.length; j++){
            let ui = new UI
            ui.addBook(books[j])
        }

        // books.forEach(function(book, index){
        //     let ui = new UI()
        //     ui.addBook(book)
        // })
    }

    static deleteBook(isbn){
        let books = BookStore.getBooks()
        books.forEach(function(book, index){
            if(book.isbn == isbn){
                books.splice(index, 1)
            }
        })
        localStorage.setItem("books",JSON.stringify(books))
    }
}

document.addEventListener("DOMContentLoaded",BookStore.displayBooks())
let form = document.querySelector(".form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
   
    let title = document.querySelector(".title-text").value
    let author = document.querySelector(".author-text").value
    let isbn = document.querySelector(".isbn-text").value
    //console.log(title,author,isbn)
    let ui = new UI()
    let book = new Book(title,author,isbn)
    if (title !== "" && author !== "" && isbn !== "") {
        ui.addBook(book)
        BookStore.addBook(book)
        ui.clearBook()
        ui.showAlert("Added","BOOK HAS BEEN ADDED TO LIST")
    }else{    
        //show error
        ui.showAlert("Error", "FILL IN MISSING BLANKS")
    }
    console.log(book)
})

let ui = new UI()
let lib_list = document.querySelector(".list")
lib_list.addEventListener("click",(devent)=>{
    ui.deleteBook(devent.target)
    // console.log(devent)
    let isbn = devent.target.parentElement.children[2].textContent
    BookStore.deleteBook(isbn)
    ui.showAlert("Deleted","BOOK SUCCESSFULLY DELETED")
})
