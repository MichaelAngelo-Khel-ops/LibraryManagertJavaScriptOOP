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

class Book {
  //private variables
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.#title = title;
    this.#author = author;

    if (typeof year != "number") {
      throw new TypeError("Must be a number");
    } else {
      this.#year = year;
    }
  }

  getTitle() {
    return this.#title;
  }
  getAuthor() {
    return this.#author;
  }
  getYear() {
    return this.#year;
  }

  displayBook() {
    return `${this.#title} by ${this.#author} : ${this.#year}`;
  }
}

class Ebook extends Book {
  #fileSize;

  constructor(title, author, year, fileSize) {
    super(title, author, year);

    if (typeof fileSize == "string") {
      this.#fileSize = parseInt(fileSize.replace("kb"));
    } else {
      this.#fileSize = fileSize;
    }
  }

  displayBook(list) {
    document.getElementById(
      list
    ).textContent = `${super.getTitle()} by ${super.getAuthor()} : ${super.getYear()} ${
      this.#fileSize
    }kb`;
  }
}

// id selector
function select(id) {
  return document.querySelector(id);
}

// const ebook = new Ebook("Rascals", "Mike", 2025, 500);
// add buttons
const bookshelf = [];

const books = {
  author: ["mike", "diane", "pepe", "king", "jorme"],
  title: ["book of revalation", "bojack", "pupu ni pepe", "kong", "senfhashm"],
  year: [2025, 2017, 2022, 2009, 2000],
  size: [100, "500kb", 56, "37kb", 325],
  count: 5,
};

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
