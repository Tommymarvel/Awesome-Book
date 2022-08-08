export let getData = () => {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  return books;
};

export let addition = (book) => {
  const books = getData();
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
};

export let remove = (id) => {
  const books = getData();
  books.forEach((book, index) => {
    if (book.id === id) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem("books", JSON.stringify(books));
};
