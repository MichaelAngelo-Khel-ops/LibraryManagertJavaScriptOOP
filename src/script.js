// Create a Book class (private fields: title, author, year)

// Create a subclass Ebook that extends Book (add fileSize field)

// Create multiple instances of Book and Ebook

// Generate buttons dynamically for each book

// When a button is clicked, display the summary of the selected book in a div

//test commit
// test commit number 2

// test new branching locally

// test new push

// add new comment on this branch

// const ebook = new Ebook("Rascals", "Mike", 2025, 500);
// add button

const bookshelf = [];

const Ebooks = {
  author: ["mike", "diane", "jose", "king", "jake"],
  title: [
    "book of rhymes",
    "why go to vietnam",
    "el filibusterismo",
    "kong",
    "the dog",
  ],
  year: [2025, 2017, 2022, 2009, 2000],
  size: [100, "500kb", 56, "37kb", 325],
  count: 5,
};

// create book on input;

const divOutput = select("#buttonContainerr");

//parent DOM obj
const parent = select("#buttonContainer");

const parentUL = select("#outputContainer");

//create child

//create object instances

for (let x = 0; x < Ebooks.count; x++) {
  bookshelf[x] = new Ebook(
    Ebooks.title[x],
    Ebooks.author[x],
    Ebooks.year[x],
    Ebooks.size[x]
  );
  //create button and set text
  let buttonElement = document.createElement("button");
  buttonElement.textContent = Ebooks.title[x];

  //add functions to buttons

  // create ne list
  let listElement = document.createElement("li");
  listElement.id = "list" + x;
  parentUL.appendChild(listElement);

  buttonElement.addEventListener("click", () => {
    bookshelf[x].displayBook("#list" + x);
  });

  // display buttons
  parent.appendChild(buttonElement);
}

// display loginc

//create book function and place this code on the add book button
select("#submitBook").addEventListener("click", () => {
  // add validation
  let validation = true;

  //testing each input field

  if (select(".newBookTitle").value === "") validation = false;
  if (select(".newBookAuthor").value === "") validation = false;
  if (select(".newBookYear").value === "") validation = false;

  if (validation) {
    // add book value to a new storage
    const input = [
      select(".newBookTitle").value,
      select(".newBookAuthor").value,
      select(".newBookYear").value,
    ];

    bookshelf[bookshelf.length] = new Book(
      input[0],
      input[1],
      parseInt(input[2])
    );
    console.log("adding Book: " + input[1] + " done!");

    // clear all input fields
    select(".newBookTitle").value = "";
    select(".newBookAuthor").value = "";
    select(".newBookYear").value = "";
    updateBookShelf();
  }
});

//create book function and place this code on the add book button
select("#submitEBook").addEventListener("click", () => {
  // add validation
  let validation = true;

  //testing each input field

  if (select(".newEBookTitle").value === "") validation = false;
  if (select(".newEBookAuthor").value === "") validation = false;
  if (select(".newEBookYear").value === "") validation = false;
  if (select(".newEBookSize").value === "") validation = false;

  if (validation) {
    // add book value to a new storage
    const input = [
      select(".newEBookTitle").value,
      select(".newEBookAuthor").value,
      select(".newEBookYear").value,
      select(".newEBookSize").value,
    ];

    bookshelf[bookshelf.length] = new Ebook(
      input[0],
      input[1],
      parseInt(input[2]),
      input[3]
    );
    console.log("adding Ebook: " + input[1] + " done!");

    // clear all input fields
    select(".newEBookTitle").value = "";
    select(".newEBookAuthor").value = "";
    select(".newEBookYear").value = "";
    select(".newEBookSize").value = "";
    updateBookShelf();
  }
});

// display book function once book was added on bookshelf
function updateBookShelf() {
  const container = select("#buttonContainer"); // select button/book container
  const outputContainer = select("#outputContainer");
  container.replaceChildren(); // removes all button
  outputContainer.replaceChildren(); // removes all list in output container

  for (let x = 0; x < bookshelf.length; x++) {
    let newButton = document.createElement("button"); // create new button
    newButton.textContent = bookshelf[x].getTitle(); // add title of the book

    // create new list
    let listElement = document.createElement("li");
    listElement.id = "list" + x;
    parentUL.appendChild(listElement);

    //add eventlistener
    newButton.addEventListener("click", () => {
      bookshelf[x].displayBook("#list" + x);
    });

    // display all buttons
    container.appendChild(newButton);
  }
}
