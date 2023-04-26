let myLibrary = [];
let form = document.querySelector('form');
let table = document.getElementById('table');
form.addEventListener('submit', addBookToLibrary);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary() {
    event.preventDefault();
    let title = verifyTitle();
    let author = verifyAuthor();
    let pages = verifyPages();
    let read = verifyRead();
    if (title && author && pages) {
        let newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        removeAllChildNodes(table);
        createTableRow();
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
    let pagesValue = parseInt(pagesInput.value);
    if (!isNaN(pagesValue) && pagesValue > 0) {
        return pagesValue;
    }
    else {
        alert('Please enter a valid number in the pages field');
    }
}
function verifyRead() {
    checkBox = document.getElementById('read');
    if (checkBox.checked) {
        return 'read';
    } else {
        return 'unread';
    }
}
function createTableRow() {
    myLibrary.forEach(element => {
        let index = myLibrary.indexOf(element);
        let tr = document.createElement('tr');
        let tdArray = [];
        for (let i = 0; i < 5; i++) {
            tdArray[i] = document.createElement('td');
            };
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i id="deleteBtn" class="material-icons">delete</i>';
        deleteButton.addEventListener('click', () => {
            deleteButton.closest('tr').remove();
            delete myLibrary[index];
        });
        tdArray[4].appendChild(deleteButton);
        let readStatusButton = document.createElement('button');
        if (element.read === 'read') {
            readStatusButton.innerHTML = '<i id="readBtn" class="material-icons">check</i>';
        } else {
            readStatusButton.innerHTML = '<i id="readBtn" class="material-icons">close</i>';
        };
        readStatusButton.addEventListener('click', () => {
            if (readStatusButton.innerHTML === '<i id="readBtn" class="material-icons">check</i>') {
                readStatusButton.innerHTML = '<i id="readBtn" class="material-icons">close</i>';
            } else {
                readStatusButton.innerHTML = '<i id="readBtn" class="material-icons">check</i>';
            }
        });
        tdArray[3].appendChild(readStatusButton);
        tdArray[0].textContent = element.title;
        tdArray[1].textContent = element.author;
        tdArray[2].textContent = element.pages;
        tdArray.forEach(element => {
            tr.appendChild(element)
            })
        table.appendChild(tr);
        }
    )
}
function removeAllChildNodes(parent) {
    for (let i = parent.children.length - 1; i > 0; i--) {
        parent.removeChild(parent.children[i]);
    }
}
