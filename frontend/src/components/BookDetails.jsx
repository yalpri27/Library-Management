import React from "react";
import BorrowButton from "./BorrowButton";

const BookDetails = () => {
  return (
    <div className="p-4 border">
      <h2>Visions of the Daughters of Albion</h2>
      <p><strong>Author:</strong> William Blake</p>
      <p><strong>Published:</strong> 1793</p>
      <p><strong>Pages:</strong> 20</p>
      <BorrowButton />
    </div>
  );
};

export default BookDetails;
