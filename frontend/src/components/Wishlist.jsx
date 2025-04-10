"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { message, Select, Input, Button, Dropdown, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import {
  collection,
  query,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";

import "../Pages/library.css";

const { Option } = Select;

const BookCard = ({ image, title, author, docId, selectedCollection, refreshBooks }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/books');
  };

  // Function to handle moving a book to another collection
  const handleMoveToCollection = async (targetCollection) => {
    try {
      // Skip if trying to move to the same collection
      if (targetCollection === selectedCollection) {
        return;
      }

      // Create book data object
      const bookData = {
        title,
        author,
        image
      };

      // Add to the target collection
      await addDoc(collection(db, targetCollection), bookData);
      
      // Remove from the current collection
      await deleteDoc(doc(db, selectedCollection, docId));
      
      message.success(`Moved to ${targetCollection}`);
      refreshBooks(); // Refresh the book list
    } catch (error) {
      console.error("Error moving book:", error);
      message.error("Failed to move book");
    }
  };

  // Function to remove a book from the collection
  const handleRemove = async () => {
    try {
      await deleteDoc(doc(db, selectedCollection, docId));
      message.success("Book removed");
      refreshBooks(); // Refresh the book list
    } catch (error) {
      console.error("Error removing book:", error);
      message.error("Failed to remove book");
    }
  };

  // Menu for the dropdown
  const menu = (
    <Menu>
      <Menu.Item key="wishlist" onClick={() => handleMoveToCollection("wishlist")}>
        Move to Wishlist
      </Menu.Item>
      <Menu.Item key="favorites" onClick={() => handleMoveToCollection("favorites")}>
        Move to Favorites
      </Menu.Item>
      <Menu.Item key="to-read" onClick={() => handleMoveToCollection("to-read")}>
        Move to Read Later
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="remove" onClick={handleRemove} danger>
        Remove
      </Menu.Item>
    </Menu>
  );

  return (
    <article className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="image-wrapper">
        <img src={image} alt={title} className="cover-images" />
        <div className="book-icon" dangerouslySetInnerHTML={{
          __html: `<svg height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20.9399V2.81494C0 1.77939 0.839453 0.939941 1.875 0.939941H13.125C14.1605 0.939941 15 1.77939 15 2.81494V20.9399L7.5 16.5649L0 20.9399Z" fill="white"/>
          </svg>`
        }} />
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
          <button className="edit-button" onClick={(e) => e.stopPropagation()}>
            <div dangerouslySetInnerHTML={{
              __html: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="9" fill="white"/>
                <path d="M11.3755 4.33936L10.5247 5.19014L12.8098 7.47529L13.6606 6.62451C14.1001 6.18506 14.1001 5.47314 13.6606 5.03369L12.968 4.33936C12.5286 3.8999 11.8167 3.8999 11.3772 4.33936H11.3755ZM10.1274 5.5874L6.02996 9.68662C5.84714 9.86943 5.71355 10.0962 5.63972 10.344L5.01746 12.4587C4.97351 12.6081 5.01394 12.7681 5.12293 12.8771C5.23191 12.986 5.39187 13.0265 5.53953 12.9843L7.65418 12.362C7.90203 12.2882 8.12878 12.1546 8.3116 11.9718L12.4126 7.87256L10.1274 5.5874Z" fill="black"/>
              </svg>`
            }} />
          </button>
        </Dropdown>
      </div>
      <div className="card-content">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
      </div>
    </article>
  );
};

const Wishlist = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("wishlist");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, selectedCollection));
      const snapshot = await getDocs(q);
      const fetchedBooks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
      message.error("Failed to fetch books.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [selectedCollection]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    try {
      setLoading(true);
      // Add proper URL formatting with template literals
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const book = data.items[0].volumeInfo;
        const newBook = {
          title: book.title || "Unknown Title",
          author: book.authors ? book.authors.join(", ") : "Unknown Author",
          image:
            book.imageLinks?.thumbnail ||
            "https://via.placeholder.com/150?text=No+Image",
        };

        await addDoc(collection(db, selectedCollection), newBook);
        message.success(`Book added to ${selectedCollection}`);
        setSearchQuery("");
        fetchBooks();
      } else {
        message.warning("No books found!");
      }
    } catch (error) {
      console.error("Error searching:", error);
      message.error("Failed to search or add book.");
    } finally {
      setLoading(false);
    }
  };

  const collectionNames = {
    "wishlist": "Wishlist",
    "favorites": "Favorites",
    "to-read": "To Read"
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main className="wishlist-content">
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>📚 My Books</h1>

        {/* Collection Selector */}
        <div style={{ maxWidth: 300, marginBottom: 20 }}>
          <label style={{ fontWeight: 600 }}>Select Collection</label>
          <Select
            value={selectedCollection}
            onChange={setSelectedCollection}
            style={{ width: "100%", marginTop: 5 }}
          >
            <Option value="wishlist">Wishlist</Option>
            <Option value="favorites">Favorites</Option>
            <Option value="to-read">To Read</Option>
          </Select>
        </div>

        {/* Search Bar */}
        <div style={{ marginBottom: "30px", maxWidth: "600px" }}>
          <label style={{ fontWeight: 600 }}>Search and Add Books</label>
          <div style={{ display: "flex", gap: "10px", marginTop: 5 }}>
            <Input
              placeholder="e.g. Atomic Habits"
              prefix={<SearchOutlined />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onPressEnter={handleSearch}
            />
            <Button type="primary" onClick={handleSearch} loading={loading}>
              Search
            </Button>
          </div>
        </div>

        {/* Collection Title */}
        <h2 style={{ marginBottom: "20px" }}>
          {collectionNames[selectedCollection]} ({books.length})
        </h2>

        {/* Book Grid */}
        <section className="grid-container">
          {books.length === 0 ? (
            <div style={{ padding: "20px", textAlign: "center", width: "100%" }}>
              <p>No books in this collection yet. Search and add books or bookmark them from the library.</p>
            </div>
          ) : (
            <div className="grid">
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  docId={book.id}
                  image={book.image}
                  title={book.title}
                  author={book.author}
                  selectedCollection={selectedCollection}
                  refreshBooks={fetchBooks}
                />
              ))}
            </div>
          )}
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Wishlist;