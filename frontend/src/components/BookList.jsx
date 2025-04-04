import React from "react";

const BookList = () => {
  const books = [
    { id: 1, title: "Pluto", author: "Glyn Maxwell" },
    { id: 2, title: "The Marriage of Heaven and Hell", author: "William Blake" },
  ];

  return (
    <div className="p-4">
      <h3>Similar Books</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
