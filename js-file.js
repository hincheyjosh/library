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
const book2 = new Book('The Bible', 'Random Dudes', 295, false)
const book3 = new Book('Twilight', 'Some Horny Woman', 295, true)
const book4 = new Book('The Flash: Rebirth', 'Comic guy', 295, false)
// const book5 = new Book('The Flash: Rebirth', 'Comic guy', 295, false)
// const book6 = new Book('The Flash: Rebirth', 'Comic guy', 295, false)
// const book7 = new Book('The Flash: Rebirth', 'Comic guy', 295, false)


// myLibrary.push(book1, book2, book3, book4, book5, book6, book7)
myLibrary.push(book1, book2, book3, book4)

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
    showBooks()
}

function toggleRead(id) {
    let bookToToggle = myLibrary[id]
    if (bookToToggle.read === true) {
        bookToToggle.read = false
    } else {
        bookToToggle.read = true
    }
    showBooks()
}

showBooks()