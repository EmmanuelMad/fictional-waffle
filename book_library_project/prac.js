class Book{
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

class UI{
    addBookToList(book){
        let list = document.querySelector(".list")
        let li = document.createElement("li")
        li.className = "list-item"
        li.innerHTML = `
            <div class="li-item list-title">${book.title}</div>
            <div class="li-item list-author">${book.author}</div>
            <div class="li-item list-isbn">${book.isbn}</div>
            <div class="delete-btn">X</div>
        `
        list.appendChild(li)
    }
    clearBookList(){
        document.querySelector(".title-text").value = ""
        document.querySelector(".author-text").value = ""
        document.querySelector(".isbn-text").value = ""
    }
}

let form = document.querySelector(".form")
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    let title = document.querySelector(".title-text").value
    let author = document.querySelector(".author-text").value
    let isbn = document.querySelector(".isbn-text").value
    
    let book = new Book(title,author,isbn)
    const ui = new UI()
    ui.addBookToList(book)
    ui.clearBookList()
})