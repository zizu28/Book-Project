function Book(title, author, coverUrl, intro){
    this.title = title;
    this.author = author;
    this.coverUrl = coverUrl;
    this.intro = intro;
}

function addBookCard(Book) {
    // Clone the template to avoid modifying the original structure
    const newBookCard = document.querySelector('.book-card').content.cloneNode(true);
  
    // Set book title, author, and intro content
    newBookCard.querySelector(".book-title").textContent = Book.title;
    newBookCard.querySelector(".book-author").textContent = Book.author;
    newBookCard.querySelector(".book-intro").textContent = Book.intro;
  
    // Set book cover image (if URL provided)
    if (bookData.coverUrl) {
      newBookCard.querySelector(".book-cover").src = Book.coverUrl;
    } else {
      // Add a placeholder or handle the case of no cover image
      newBookCard.querySelector(".book-cover").src = "placeholder.jpg"; 
    }
  
    // Append the new book card to a container element in your HTML
    document.querySelector(".book-card-container").appendChild(newBookCard);
  }

const myLibrary = []



function addBookToLibrary(){
    const book = new Book("The Hobbit", "J.R.R. Tolkien", "#", "")
    myLibrary.push(book);
    addBookCard(book)
}