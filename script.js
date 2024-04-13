function Book(title, author, pages, coverUrl, intro, read = "Not read"){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.coverUrl = coverUrl;
    this.intro = intro;
    this.read = function(){
      return read === "Not read" ? "Read" : "Not read";
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
    
  
    // Set book cover image (if URL provided)
    if (Book.coverUrl) {
      newBookCard.querySelector(".book-cover").src = Book.coverUrl;
    } else {
      // Add a placeholder or handle the case of no cover image
      newBookCard.querySelector(".book-cover").src = "placeholder.jpg"; 
    }
  
    // Append the new book card to a container element in your HTML
    document.querySelector(".bookS").appendChild(newBookCard);
  }

  function isRead(Book){
    const read = document.querySelector(".read");
    if (Book.read() === read.textContent) {
      read.textContent = Book.read();
      this.read = "Read";
    }
  }
const myLibrary = []



function addBookToLibrary(){
    const book = new Book("The Hobbit", "J.R.R. Tolkien", "#", "")
    myLibrary.push(book);
    addBookCard(book)
}