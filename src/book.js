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
    document.select(
      list
    ).textContent = `${super.getTitle()} by ${super.getAuthor()} : ${super.getYear()} ${
      this.#fileSize
    }kb`;
  }
}

// utilities
// id selector
function select(id) {
  return document.querySelector(id);
}
