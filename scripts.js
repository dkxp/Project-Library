let myLibrary = [];
let form = document.querySelector('form');
form.addEventListener('submit', addBookToLibrary);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(event) {
    event.preventDefault();
    let title = verifyTitle();
    console.log(title);
    let author = verifyAuthor();
    console.log(author);
    let pages = verifyPages();
    console.log(pages);
    let read = verifyRead();
    console.log(read);
    let newBook;
    if (title && author && pages) {
        newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        form.reset();
    }
}
function verifyTitle() {
    let titleInput = document.getElementById('title');
    if (titleInput.value) {
        return titleInput.value;
    } 
}
function verifyAuthor() {
    let authorInput = document.getElementById('author');
    if (authorInput.value) {
        return authorInput.value;
    }
}
function verifyPages() {
    let pagesInput = document.getElementById('pages');
    if (pagesInput.value) {
        return pagesInput.value;
    }
}
function verifyRead() {
    checkBox = document.getElementById('read');
    if (checkBox.checked) {
        return true;
    } else {
        return false;
    }
}
