export const getData = () => {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
};

export const addition = (book) => {
  const books = getData();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};

export const remove = (id) => {
  const books = getData();
  books.forEach((book, index) => {
    if (book.id === id) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
};