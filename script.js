const myLibrary = []

function Book(title, author, pages, coverUrl, intro, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.coverUrl = coverUrl;
  this.intro = intro;
  this.read = function(){
    return read === "No".toLowerCase() ? "Read" : "Not read";
  }
}

function addBookToLibrary(){
  const title = prompt("What is the title of the book? ")
  const author = prompt("Who is the author of the book? ")
  const pages = prompt("How many pages does the book have? ")
  const coverUrl = prompt("Provide the url/absolute/relative path of the book cover.")
  const intro = prompt("Provide a brief introduction of the book.")
  const read = prompt("Has the book been read already? ")

  const book = new Book(title, author, pages, coverUrl, intro, read)
  myLibrary.push(book);
}

function displayBookOnCard(myLibrary){
  for (let book in myLibrary) {
    
    
  }
}

function addBookCard(Book) {
  // Clone the template to avoid modifying the original structure
  const newBookCard = document.querySelector('.book-card').content.cloneNode(true);

  // Set book title, author, pages, and intro content
  newBookCard.querySelector(".book-title").textContent = Book.title;
  newBookCard.querySelector(".book-author").textContent = Book.author;
  newBookCard.querySelector(".book-pages").textContent = Book.pages;
  newBookCard.querySelector(".book-intro").textContent = Book.intro;
  newBookCard.querySelector(".read").textContent = Book.read;
  newBookCard.querySelector(".price").textContent = prompt("Provide the price of the book.")

  // Set book cover image (if URL provided)
  if (Book.coverUrl) {
    newBookCard.querySelector(".book-cover").src = Book.coverUrl;
  } else {
    // Add a placeholder or handle the case of no cover image
    newBookCard.querySelector(".book-cover").src = "placeholder.jpg"; 
  }

  // Append the new book card to a container element in your HTML
  document.querySelector(".books").appendChild(newBookCard);
}

  function isRead(Book){
    const read = document.querySelector(".read");
    if (Book.read() === read.textContent) {
      read.textContent = Book.read();
      this.read = "Read";
    }
  }
