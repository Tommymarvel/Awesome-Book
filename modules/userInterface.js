export let displayBooks = () => {
    const books = getData();
    const myBooks = books;
    myBooks.forEach((book) => {
      addBookToList(book);
    });
  }

  export let addBookToList = (book) => {
    const beAppended = document.createElement('div');
    beAppended.className = 'kitab';
    beAppended.innerHTML = `
       <h4>${book.title}</h4> <span class = 'creator'>${book.author}</span>
       <p class="identity-book">${book.id}</p>
       <button class = 'delete'>Delete</button>
       `;
    appendChild(beAppended);
  }

 export let clearFields = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }