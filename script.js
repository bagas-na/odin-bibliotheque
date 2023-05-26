const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? 'has read' : 'not read yet'
  }`;
};

function addBookToLibrary(newBook) {
  // do stuff here
  myLibrary.push(newBook);
}

function clearLibrary() {
  const content = document.getElementById('content');

  console.log('Has child node:', content.hasChildNodes());

  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }
}

function displayLibrary(myLibrary) {
  const content = document.getElementById('content');
  console.log(myLibrary);
  // eslint-disable-next-line no-restricted-syntax
  for (const book of myLibrary) {
    console.log(book);
    const card = document.createElement('div');
    card.classList.add('book');

    const title = document.createElement('div');
    title.classList.add('book-title');
    const titleHeader = document.createElement('h2');
    titleHeader.textContent = 'Title:';
    const titleText = document.createElement('p');
    titleText.textContent = book.title;
    title.appendChild(titleHeader);
    title.appendChild(titleText);

    const author = document.createElement('div');
    author.classList.add('book-author');
    const authorHeader = document.createElement('h2');
    authorHeader.textContent = 'Author:';
    const authorText = document.createElement('p');
    authorText.textContent = book.author;
    author.appendChild(authorHeader);
    author.appendChild(authorText);

    const pages = document.createElement('div');
    pages.classList.add('book-pages');
    const pagesHeader = document.createElement('h2');
    pagesHeader.textContent = 'Pages:';
    const pagesText = document.createElement('p');
    pagesText.textContent = book.pages;
    pages.appendChild(pagesHeader);
    pages.appendChild(pagesText);

    const read = document.createElement('div');
    read.classList.add('book-read');
    const readHeader = document.createElement('h2');
    readHeader.textContent = 'Read';
    const readCheck = document.createElement('input');
    readCheck.setAttribute('type', 'checkbox');
    readCheck.checked = book.read;
    read.appendChild(readHeader);
    read.appendChild(readCheck);

    const empty = document.createElement('div');
    empty.classList.add('empty');

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(empty);
    content.appendChild(card);
  }
}

function makeAddBookCard() {
  const content = document.getElementById('content');
  const card = document.createElement('div');
  card.classList.add('book');
  card.classList.add('add-book');

  const addBtn = document.createElement('button');
  addBtn.id = 'add-btn';
  addBtn.innerHTML = '<h2>Add book</h2>';

  card.appendChild(addBtn);
  content.appendChild(card);
}

function updateLibrary(myLibrary) {
  clearLibrary();
  displayLibrary(myLibrary);
  makeAddBookCard();
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, true);
const LoTR1 = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', 423, false);
addBookToLibrary(theHobbit);
addBookToLibrary(LoTR1);

const alertButton = document.querySelector('button.alert');
alertButton.addEventListener('mousedown', () => alert('Hello world!'));

const updateButton = document.querySelector('button.update');
updateButton.addEventListener('click', () => updateLibrary(myLibrary));

const addBook = document.getElementById('add-btn');
addBook.addEventListener();
