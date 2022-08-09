/* eslint-disable max-classes-per-file */

import AwesomeBooks from './modules/Awesome.js';
import { displayBooks, addBookToList, clearFields } from './modules/userInterface.js';
import { addition, remove } from './modules/localstorage.js';
import getTime from './modules/date.js';

const displayTime = document.querySelector('.displayTime');
displayTime.innerHTML = getTime();

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
