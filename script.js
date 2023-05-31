const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

Book.prototype.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${
  this.read ? 'has read' : 'not read yet'
}`;

function clearLibrary() {
  const content = document.getElementById('content');

  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }
}

function displayLibrary() {
  const content = document.getElementById('content');
  const book = [...myLibrary];
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement('div');
    card.classList.add('book');
    card.setAttribute('data-index', i);

    const title = document.createElement('div');
    title.classList.add('book-title');
    const titleHeader = document.createElement('h2');
    titleHeader.textContent = 'Title:';
    const titleText = document.createElement('p');
    titleText.textContent = book[i].title;
    title.appendChild(titleHeader);
    title.appendChild(titleText);

    const author = document.createElement('div');
    author.classList.add('book-author');
    const authorHeader = document.createElement('h2');
    authorHeader.textContent = 'Author:';
    const authorText = document.createElement('p');
    authorText.textContent = book[i].author;
    author.appendChild(authorHeader);
    author.appendChild(authorText);

    const pages = document.createElement('div');
    pages.classList.add('book-pages');
    const pagesHeader = document.createElement('h2');
    pagesHeader.textContent = 'Pages:';
    const pagesText = document.createElement('p');
    pagesText.textContent = book[i].pages;
    pages.appendChild(pagesHeader);
    pages.appendChild(pagesText);

    const read = document.createElement('div');
    read.classList.add('book-read');
    const readHeader = document.createElement('h2');
    readHeader.textContent = 'Read';
    const readCheck = document.createElement('input');
    readCheck.setAttribute('type', 'checkbox');
    readCheck.checked = book[i].read;
    readCheck.setAttribute('disabled', '');
    read.appendChild(readHeader);
    read.appendChild(readCheck);

    const rmvBtn = document.createElement('button');
    rmvBtn.classList.add('rmv-btn');
    rmvBtn.textContent = 'Remove';

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(rmvBtn);
    content.appendChild(card);

    rmvBtn.addEventListener('click', removeBookFromLibrary);
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

  const addBook = document.getElementById('add-btn');
  addBook.addEventListener('click', convertAddCardToForm);
}

function updateLibrary() {
  clearLibrary();
  displayLibrary();
  makeAddBookCard();
}

function convertAddCardToForm() {
  const card = this.parentElement;
  card.classList.remove('add-book');
  card.classList.add('new-form');
  this.remove();

  const title = document.createElement('div');
  title.classList.add('book-title');
  const titleHeader = document.createElement('h2');
  titleHeader.textContent = 'Title:';
  const titleText = document.createElement('input');
  titleText.setAttribute('type', 'text');
  titleText.setAttribute('required', '');
  title.appendChild(titleHeader);
  title.appendChild(titleText);

  const author = document.createElement('div');
  author.classList.add('book-author');
  const authorHeader = document.createElement('h2');
  authorHeader.textContent = 'Author:';
  const authorText = document.createElement('input');
  authorText.setAttribute('type', 'text');
  authorText.setAttribute('required', '');
  author.appendChild(authorHeader);
  author.appendChild(authorText);

  const pages = document.createElement('div');
  pages.classList.add('book-pages');
  const pagesHeader = document.createElement('h2');
  pagesHeader.textContent = 'Pages:';
  const pagesText = document.createElement('input');
  pagesText.setAttribute('type', 'number');
  pagesText.setAttribute('required', '');
  pages.appendChild(pagesHeader);
  pages.appendChild(pagesText);

  const read = document.createElement('div');
  read.classList.add('book-read');
  const readHeader = document.createElement('h2');
  readHeader.textContent = 'Read';
  const readCheck = document.createElement('input');
  readCheck.setAttribute('type', 'checkbox');

  read.appendChild(readHeader);
  read.appendChild(readCheck);

  const btnDiv = document.createElement('div');
  btnDiv.classList.add('new-form-btn');
  const accBtn = document.createElement('button');
  accBtn.id = 'acc-btn';
  accBtn.setAttribute('type', 'button');
  accBtn.textContent = 'Accept';
  const canBtn = document.createElement('button');
  canBtn.id = 'can-btn';
  canBtn.setAttribute('type', 'button');
  canBtn.textContent = 'Cancel';
  btnDiv.appendChild(accBtn);
  btnDiv.appendChild(canBtn);

  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.id = 'new-book-form';

  form.appendChild(title);
  form.appendChild(author);
  form.appendChild(pages);
  form.appendChild(read);
  form.appendChild(btnDiv);

  card.appendChild(form);

  accBtn.addEventListener('click', addBookToLibrary);
  canBtn.addEventListener('click', convertFormToAddCard);
}

function convertFormToAddCard() {
  const card = this.parentElement.parentElement.parentElement;
  while (card.hasChildNodes()) {
    card.removeChild(card.lastChild);
  }
  card.classList.remove('new-form');
  card.classList.add('add-book');

  const addBtn = document.createElement('button');
  addBtn.id = 'add-btn';
  addBtn.innerHTML = '<h2>Add book</h2>';

  card.appendChild(addBtn);
  content.appendChild(card);

  const addBook = document.getElementById('add-btn');
  addBook.addEventListener('click', convertAddCardToForm);
}

function addBookToLibrary() {
  // do stuff here
  const card = this.parentElement.parentElement.parentElement;
  const title = card.querySelector('.book-title > input');
  const author = card.querySelector('.book-author > input');
  const pages = card.querySelector('.book-pages > input');
  const read = card.querySelector('.book-read > input');

  const newBook = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(newBook);
  updateLibrary();
}

function removeBookFromLibrary() {
  const card = this.parentElement;
  const index = card.getAttribute('data-index');
  myLibrary.splice(index, 1); // deletes book at the book's index from myLibrary
  updateLibrary();
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, true);
const LoTR1 = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', 423, false);
myLibrary.push(theHobbit);
myLibrary.push(LoTR1);

updateLibrary();
