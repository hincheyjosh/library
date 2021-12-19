let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
const book2 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
const book3 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
myLibrary.push(book1, book2, book3)
console.log(myLibrary)

const bookDisplay = document.querySelector(".books")

myLibrary.forEach(book => {
    const newDiv = document.createElement('div')
    newDiv.className = 'card'
    const title = document.createElement("h3")
    title.textContent = book.title
    newDiv.appendChild(title)
    const author = document.createElement("h4") 
    author.textContent = book.author
    newDiv.appendChild(author)
    const pages = document.createElement("h5")
    pages.textContent = book.pages
    newDiv.appendChild(pages)
    bookDisplay.appendChild(newDiv)
})
