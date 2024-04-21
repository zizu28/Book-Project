const myLibrary = []

class Book{
  constructor(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function addBookToLibrary(book){
  myLibrary.push(book);
}

const dialog = document.querySelector('.book-dialog');
const newBook = document.querySelector('#add-book');

newBook.addEventListener('click', () => {
  dialog.showModal();
});

function createBookCard(book, index){
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  bookCard.dataset.index = index;
  bookCard.style.position = 'relative';

  const bookInfo = document.createElement('div');
  bookInfo.classList.add('book-info');
  bookInfo.style.position = 'absolute';
  bookInfo.style.top = '10px';
  bookInfo.style.left = "20px";
  bookInfo.style.bottom = '50%';
  bookInfo.style.fontFamily = 'Helvetica';
  bookInfo.style.fontSize = '25px';

  const bookTitle = document.createElement('h3');
  bookTitle.classList.add('book-title');
  bookTitle.textContent = "Title: " + book.title;

  const bookAuthor= document.createElement('p');
  bookAuthor.classList.add('book-author');
  bookAuthor.textContent = "Author: " + book.author;

  const pageCount = document.createElement('p');
  pageCount.classList.add('book-pages');
  pageCount.textContent = book.pages + ' pages';

  const bookRead = document.createElement('div');
  bookRead.classList.add('book-read');

  const bookReadCheckbox = document.createElement('input');
  bookReadCheckbox.type = 'checkbox';
  bookReadCheckbox.checked = book.isRead;

  const booksReadLabel = document.createElement('label');
  booksReadLabel.textContent = 'Read';

  const bookCardActions = document.createElement('div');
  bookCardActions.classList.add('book-call-to-action');

  
  const deleteBook = document.createElement('button');
  deleteBook.textContent = 'Delete Book';
  deleteBook.classList.add('delete-book');

  const addBookToCart = document.createElement('button');
  addBookToCart.textContent = 'Add Book To Cart';
  deleteBook.classList.add('add-book-to-cart');  

  bookCardActions.appendChild(addBookToCart);
  bookCardActions.appendChild(deleteBook);

  bookRead.appendChild(booksReadLabel);
  bookRead.appendChild(bookReadCheckbox);

  bookInfo.appendChild(bookTitle);
  bookInfo.appendChild(bookAuthor);
  bookInfo.appendChild(pageCount);
  bookInfo.appendChild(bookRead);

  bookCard.appendChild(bookInfo);
  bookCard.appendChild(bookCardActions);

  return bookCard;
}

// const populateBooksContainer = document.querySelector('#show-books');
const booksCardContainer = document.querySelector('.books');

booksCardContainer.addEventListener('click', (event) => {
  let bookIndex;
  let card;

  if(event.target.type === 'checkbox'){
    card = event.target.closest('.book-card');
    bookIndex = card.dataset.index;
    myLibrary[bookIndex].isRead = !myLibrary[bookIndex].isRead;
    updateLibrary(myLibrary);
  }
  else if (event.target.classList.contains('delete-book')) {
    card = event.target.closest('.book-card');
    bookIndex = +card.dataset.index;
    myLibrary.splice(bookIndex, 1);
    displayMyBooks(myLibrary);
    updateLibrary(myLibrary);
  }
})

function displayMyBooks(bookLibrary){
  booksCardContainer.textContent = '';
  const bookCards = bookLibrary.map((book, index) => createBookCard(book, index));
  booksCardContainer.append(...bookCards);
}

function updateLibrary(library){
  const totalBooks = document.querySelector('#book-count');
  const booksRead = document.querySelector('#books-read');
  const totalPages = document.querySelector('#total-pages');
  const pagesRead = document.querySelector('#pages-read');
  let booksReadCounter = 0;
  let pagesReadCounter = 0;
  let totalPagesCounter = 0;

  library.forEach(book => {
    totalPagesCounter += +book.pages;

    if (book.isRead) {
        booksReadCounter++;
        pagesReadCounter += +book.pages;
    }
});

totalBooks.textContent = library.length;
booksRead.textContent = booksReadCounter;
totalPages.textContent = totalPagesCounter;
pagesRead.textContent = pagesReadCounter;
}

const bookForm = document.querySelector('#bookForm');
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pageCount').value;
    const isRead = document.querySelector('#isRead').checked;

    const newBook = new Book(title, author, pages, isRead);
    addBookToLibrary(newBook);
    bookForm.reset();
    displayMyBooks(myLibrary);
    updateLibrary(myLibrary);
    dialog.close();
});