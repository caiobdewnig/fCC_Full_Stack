const books = [
  {
    title: "The Midnight Library",
    authorName: "Matt Haig",
    releaseYear: 2020
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    authorName: "Yuval Noah Harari",
    releaseYear: 2011
  },
  {
    title: "The Alchemist",
    authorName: "Paulo Coelho",
    releaseYear: 1988
  },
  {
    title: "The Silent Patient",
    authorName: "Alex Michaelides",
    releaseYear: 2019
  },
  {
    title: "Educated",
    authorName: "Tara Westover",
    releaseYear: 2018
  },
  {
    title: "It Ends With Us",
    authorName: "Colleen Hoover",
    releaseYear: 2016
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960
  }
];

function sortByYear(bookA, bookB) {
  if (bookA.releaseYear < bookB.releaseYear) {
    return -1;
  } else if (bookA.releaseYear > bookB.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter(oi => oi.releaseYear >= 1969)
filteredBooks.sort(sortByYear)

console.log(filteredBooks)