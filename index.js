/* eslint-disable max-classes-per-file */

import { AwesomeBooks } from "./modules/Awesome.js";



 let getData = () => {
   let books;
   if (localStorage.getItem("books") === null) {
     books = [];
   } else {
     books = JSON.parse(localStorage.getItem("books"));
   }
   return books;
 };

 let addition = (book) => {
   const books = getData();
   books.push(book);
   localStorage.setItem("books", JSON.stringify(books));
 };

 let remove = (id) => {
   const books = getData();
   books.forEach((book, index) => {
     if (book.id === id) {
       books.splice(index, 1);
     }
   });
   localStorage.setItem("books", JSON.stringify(books));
 };

 
  let displayBooks = () => {
    const books = getData();
    const myBooks = books;
    myBooks.forEach((book) => {
      addBookToList(book);
    });
  }

  let addBookToList = (book) => {
    const beAppended = document.createElement('div');
    beAppended.className = 'kitab';
    beAppended.innerHTML = `
       <h4>${book.title}</h4> <span class = 'creator'>${book.author}</span>
       <p class="identity-book">${book.id}</p>
       <button class = 'delete'>Delete</button>
       `;
    getAppended.appendChild(beAppended);
  }

  let clearFields = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }




const getAppended = document.getElementById('book-container');
document.addEventListener('DOMContentLoaded', displayBooks);
document.getElementById('form').addEventListener('submit', (e) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = Math.floor(Math.random() * 1000) + 1;
  id.toString();
  e.preventDefault();
  const newBook = new AwesomeBooks(title, author, id);
  addBookToList(newBook);
  clearFields();
  addition(newBook);
});
getAppended.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
  const tity = parseInt(e.target.parentElement.children[2].innerText, 10);
  remove(tity);
});
const getList = document.querySelector('.list');
const getAddNew = document.querySelector('.add_new');
const getContact = document.querySelector('.contact');
getList.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.add-block').style.visibility = 'hidden';
  document.querySelector('.add-block').style.position = 'absolute';
  document.querySelector('.contactsection').style.visibility = 'hidden';
  document.querySelector('.contactsection').style.position = 'absolute';
  document.querySelector('.list-block').style.position = 'relative';
  document.querySelector('.list-block').style.visibility = 'visible';
  document.querySelectorAll('header a').forEach((item) => {
    item.classList.remove('active');
  });
  e.target.classList.toggle('active');
});
getAddNew.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.list-block').style.visibility = 'hidden';
  document.querySelector('.list-block').style.position = 'absolute';
  document.querySelector('.contactsection').style.visibility = 'hidden';
  document.querySelector('.contactsection').style.position = 'absolute';
  document.querySelector('.add-block').style.position = 'relative';
  document.querySelector('.add-block').style.visibility = 'visible';
  document.querySelectorAll('header a').forEach((item) => {
    item.classList.remove('active');
  });
  e.target.classList.toggle('active');
});
getContact.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.list-block').style.visibility = 'hidden';
  document.querySelector('.list-block').style.position = 'absolute';
  document.querySelector('.add-block').style.visibility = 'hidden';
  document.querySelector('.add-block').style.position = 'absolute';
  document.querySelector('.contactsection').style.position = 'relative';
  document.querySelector('.contactsection').style.visibility = 'visible';
  document.querySelectorAll('header a').forEach((item) => {
    item.classList.remove('active');
  });
  e.target.classList.toggle('active');
});