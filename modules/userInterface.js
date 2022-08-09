import { getData } from './localstorage.js';

export const addBookToList = (book) => {
  const getAppended = document.getElementById('book-container');
  const beAppended = document.createElement('div');
  beAppended.className = 'kitab';
  beAppended.innerHTML = `
       <h4>${book.title}</h4> <span class = 'creator'>${book.author}</span>
       <p class="identity-book">${book.id}</p>
       <button class = 'delete'>Delete</button>
       `;
  getAppended.appendChild(beAppended);
};

export const displayBooks = () => {
  const books = getData();
  const myBooks = books;
  myBooks.forEach((book) => {
    addBookToList(book);
  });
};

export const clearFields = () => {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
};
