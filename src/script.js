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

const books = {
  author: ["mike", "diane", "pepe", "king", "jorme"],
  title: ["book of revalation", "bojack", "pupu ni pepe", "kong", "senfhashm"],
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
for (let x = 0; x < books.count; x++) {
  bookshelf[x] = new Ebook(
    books.title[x],
    books.author[x],
    books.year[x],
    books.size[x]
  );
  //create button and set text
  let buttonElement = document.createElement("button");
  buttonElement.textContent = "book" + books.title[x];

  //add functions to buttons

  // create ne list
  let listElement = document.createElement("li");
  listElement.id = "list" + x;
  parentUL.appendChild(listElement);

  buttonElement.addEventListener("click", () => {
    bookshelf[x].displayBook("list" + x);
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
    console.log("adding " + input[1] + " done");

    // clear all input fields
    select(".newBookTitle").value = "";
    select(".newBookAuthor").value = "";
    select(".newBookYear").value = "";
  }
});
