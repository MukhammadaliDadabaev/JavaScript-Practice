//------------> 2.TASK

/* Quyidagi kitoblarning o'qish holatini (ya'ni kitob nomini, muallifning ismini va o'qish holatini ko'rsatish) ko'rsatish uchun JavaScript dasturini yozing. */

// --------------------> 1-usul
/* let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
let books = Object.entries(library);
console.log(books); */

//------------------> 2-usul-----Tugri-echimi

let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (let i = 0; i < library.length; i++) {
  let bookInfo = '"' + library[i].title + '", ' + library[i].author + '", ' +library[i].readingStatus;
  console.log(bookInfo);
}

  