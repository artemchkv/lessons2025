var response1 = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
  },
];

var response2 = [
  {
    id: 1,
    bookName: 'Test book',
    author: 1,
  },
  {
    id: 2,
    bookName: 'Test book 2',
    author: 2,
  },
  {
    id: 3,
    bookName: 'Test book 3',
    author: 1,
  },
  {
    id: 4,
    bookName: 'Test book 4',
    author: 3,
  },
];

// for (var i = 0; i < response1.length; i++) {
//   var user = response1[i];
//   console.log(`User: ${user.name}, email: ${user.email}`);
//   // for (let index = 0; index < response2.length; index++) {
//   //   const book = response2[index];
//   //   book.author === user.id ? console.log('🚀 ~ book:', book) : null;
//   // }

//   var books = response2.filter((book) => book.author === user.id);
//   console.log(
//     `Books of ${user.name}:`,
//     books.map((book) => book.bookName).join('; '),
//   );
// }

response1.forEach((user) => {
  console.log(`User: ${user.name}, email: ${user.email}`);

  var books = response2.filter((book) => book.author === user.id);
  console.log(
    `Books of ${user.name}:`,
    books.map((book) => book.bookName).join('; '),
  );
});
