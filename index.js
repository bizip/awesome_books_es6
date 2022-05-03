import { DateTime } from './modules/luxon.js';
import Book from './modules/books.js';
import { contactPage, booksList, addBook } from './modules/toggleDisplay.js';

const booksLibrary = new Book();
booksLibrary.getBookList();
const formData = document.getElementById('new-book');
formData.addEventListener('submit', (e) => {
  e.preventDefault();
  const getTitle = document.getElementById('title').value;
  const getAuthor = document.getElementById('author').value;
  booksLibrary.addNewBook(getTitle, getAuthor);
  formData.reset();
});

const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

listLink.addEventListener('click', contactPage);
addLink.addEventListener('click', booksList);
contactLink.addEventListener('click', addBook);

window.onload = () => {
  document.querySelector('.ADD').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  const setDate = document.getElementById('date-time');
  const date = new Date();
  const timeNow = DateTime.fromJSDate(date);
  setDate.innerHTML = timeNow.toLocaleString(DateTime.DATETIME_MED);
};
