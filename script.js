const sortTitle = document.getElementById('sort-title');
const sortPages = document.getElementById('sort-pages');
const sortYear = document.getElementById('sort-year');
const genreSelect = document.getElementById('select');
const wrapper = document.getElementById('wrapper');
const count = document.getElementById('count');

const books = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", pages: 309, year: 1997, genre: "Fantasy" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, year: 1937, genre: "Fantasy" },
    { title: "The Hunger Games", author: "Suzanne Collins", pages: 374, year: 2008, genre: "Sci-Fi" },
    { title: "Dune", author: "Frank Herbert", pages: 412, year: 1965, genre: "Sci-Fi" },
    { title: "The Martian", author: "Andy Weir", pages: 369, year: 2011, genre: "Sci-Fi" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, year: 1960, genre: "Classic" },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 279, year: 1813, genre: "Classic" },
    { title: "1984", author: "George Orwell", pages: 328, year: 1949, genre: "Classic" },
    { title: "Sapiens", author: "Yuval Noah Harari", pages: 443, year: 2011, genre: "Non-Fiction" },
    { title: "Atomic Habits", author: "James Clear", pages: 320, year: 2018, genre: "Non-Fiction" }
];

let currentSort = "title";

const sortMethods = {
    "title": (a, b) => a.title.localeCompare(b.title),
    "pages": (a, b) => a.pages - b.pages,
    "year": (a, b) => a.year - b.year
};

function updateShelf() {
    const genre = genreSelect.value;

    const filtered = books.filter((book) => {
        return genre === "all" || book.genre === genre;
    });

    const sorted = filtered.sort(sortMethods[currentSort]);

    render(sorted);
}

function render(list) {
    wrapper .innerHTML = "";

    const mapped = list.map((book) => {
        return renderBook(book);
    });

    mapped.forEach((item) => {
        wrapper.appendChild(item);
    });

    count.textContent = "Showing " + list.length + " of " + books.length + " books";
}

function renderBook(book) {
    const ele = document.createElement("div");
    ele.innerHTML = book.title + " by " + book.author + " Genre: " + book.genre + " Year: " + book.year + " Pages: " + book.pages;
    return ele;
}

sortTitle.addEventListener("click", function () {
    currentSort = "title";
    updateShelf();
});

sortPages.addEventListener("click", function () {
    currentSort = "pages";
    updateShelf();
});

sortYear.addEventListener("click", function () {
    currentSort = "year";
    updateShelf();
});

genreSelect.addEventListener("change", function () {
    updateShelf();
});

updateShelf();
