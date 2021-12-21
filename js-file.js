let myLibrary = JSON.parse(localStorage.getItem("myLibrary") || "[]")

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

const bookDisplay = document.querySelector(".books")
const form = document.querySelector("#addForm")
const removeButtons = document.querySelectorAll(".removeButton")
form.addEventListener("submit", createBook)


function createBook() {
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    const read = document.querySelector("#read").checked
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    toggleForm()
    showBooks()
    saveBooks(myLibrary)
}

function showBooks() {
    removeAllChildNodes(bookDisplay)
    myLibrary.forEach(book => {
        const newDiv = document.createElement('div')
        newDiv.className = 'card'
        newDiv.id = myLibrary.indexOf(book)
        const title = document.createElement("h3")
        title.textContent = book.title
        newDiv.appendChild(title)
        const author = document.createElement("h3") 
        author.textContent = book.author
        newDiv.appendChild(author)
        const pages = document.createElement("h3")
        pages.textContent = `${book.pages} pages`
        newDiv.appendChild(pages)
        newDiv.innerHTML +=
        `<button class="readToggle" onclick="toggleRead(${myLibrary.indexOf(book)})">${book.read === true? 'Mark Unread': 'Mark Read'}</button>`
        newDiv.innerHTML +=
        `<button class="removeButton" onclick="removeBook(${myLibrary.indexOf(book)})">Remove</button>`
        bookDisplay.appendChild(newDiv)
    })
    
}

function toggleForm () {
    const formDiv = document.querySelector(".hiddenForm")
    formDiv.classList.toggle("hidden")
    document.querySelector("#title").value = ''
    document.querySelector("#author").value = ''
    document.querySelector("#pages").value = ''
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function removeBook(id) {
    let bookToRemove = document.getElementById(id)
    bookToRemove.remove()
    myLibrary.splice(id, 1)
    saveBooks(myLibrary)
    showBooks()
}

function toggleRead(id) {
    let bookToToggle = myLibrary[id]
    if (bookToToggle.read === true) {
        bookToToggle.read = false
    } else {
        bookToToggle.read = true
    }
    saveBooks(myLibrary)
    showBooks()
}

function getBooks() {
    let myLibrary
    if (localStorage.getItem("myLibrary") === null) {
        myLibrary = []
    } else {
        myLibrary = JSON.parse(localStorage.getItem("myLibrary"))
    }
    console.log(myLibrary)
    return myLibrary
}

function saveBooks(library) {
    localStorage["myLibrary"] = JSON.stringify(myLibrary)
}

showBooks()