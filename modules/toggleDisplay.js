const addDisplay = document.querySelector('.ADD');
const listDisplay = document.querySelector('.LIST');
const contactDisplay = document.querySelector('.contact');
const contactPage = () => {
  addDisplay.style.display = 'none';
  contactDisplay.style.display = 'none';
  listDisplay.style.display = 'flex';
};
const booksList = () => {
  listDisplay.style.display = 'none';
  contactDisplay.style.display = 'none';
  addDisplay.style.display = 'flex';
};
const addBook = () => {
  listDisplay.style.display = 'none';
  addDisplay.style.display = 'none';
  contactDisplay.style.display = 'flex';
};

export { contactPage, booksList, addBook };