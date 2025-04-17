"use client";
import React, { useState } from "react";
import "./library.css";
import Sidebar from "../components/sidebar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { message, Dropdown, Menu } from "antd";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
// import BookForm from "addBooks";

const BookCard = ({ image, title, author, docId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${docId.replace(/\s+/g, '-')}`); // This navigates to /books
  };

  const handleAddToCollection = async (collectionName) => {
    try {
      // Create book data object
      const bookData = {
        title,
        author,
        image,
      };

      // Add to the selected collection in Firebase
      await addDoc(collection(db, collectionName), bookData);
      message.success(`Added to ${collectionName}`);
    } catch (error) {
      console.error("Error adding book to collection:", error);
      message.error("Failed to add book to collection");
    }
  };

  // Menu for the dropdown
  const menu = (
    <Menu>
      <Menu.Item
        key="wishlist"
        onClick={() => handleAddToCollection("wishlist")}
      >
        Add to Wishlist
      </Menu.Item>
      <Menu.Item
        key="favorites"
        onClick={() => handleAddToCollection("favorites")}
      >
        Add to Favorites
      </Menu.Item>
      <Menu.Item key="to-read" onClick={() => handleAddToCollection("to-read")}>
        Add to Read Later
      </Menu.Item>
    </Menu>
  );

  return (
    <article
      className="card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="image-wrapper">
        <img src={image} alt={title} className="cover-images" />
        <div
          className="book-icon"
          dangerouslySetInnerHTML={{
            __html: `<svg height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20.9399V2.81494C0 1.77939 0.839453 0.939941 1.875 0.939941H13.125C14.1605 0.939941 15 1.77939 15 2.81494V20.9399L7.5 16.5649L0 20.9399Z" fill="white"/>
          </svg>`,
          }}
        />
        <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
          <button
            className="edit-button"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="9" fill="white"/>
                <path d="M11.3755 4.33936L10.5247 5.19014L12.8098 7.47529L13.6606 6.62451C14.1001 6.18506 14.1001 5.47314 13.6606 5.03369L12.968 4.33936C12.5286 3.8999 11.8167 3.8999 11.3772 4.33936H11.3755ZM10.1274 5.5874L6.02996 9.68662C5.84714 9.86943 5.71355 10.0962 5.63972 10.344L5.01746 12.4587C4.97351 12.6081 5.01394 12.7681 5.12293 12.8771C5.23191 12.986 5.39187 13.0265 5.53953 12.9843L7.65418 12.362C7.90203 12.2882 8.12878 12.1546 8.3116 11.9718L12.4126 7.87256L10.1274 5.5874Z" fill="black"/>
              </svg>`,
              }}
            />
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

const BookGrid = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // fetch books from firebase
    const fetchBooks = async () => {
      try {
        const booksCollection = collection(db, "books");
        const snapshot = await getDocs(booksCollection);
        const booksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(booksData);
        console.log("Books fetched:", booksData);
        
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className="grid-container">
      <div className="grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            image={book.coverImage}
            docId={book.id}
          />
        ))}
      </div>
    </div>
  );
};

const FilterControls = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/addBooks');
  };
  return (
    <section className="controls-container">
      <div className="left-controls">
        <button className="view-button">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.77686 10.6431H8.36019V5.14307H3.77686V10.6431ZM3.77686 17.0597H8.36019V11.5597H3.77686V17.0597ZM9.27686 17.0597H13.8602V11.5597H9.27686V17.0597ZM14.7769 17.0597H19.3602V11.5597H14.7769V17.0597ZM9.27686 10.6431H13.8602V5.14307H9.27686V10.6431ZM14.7769 5.14307V10.6431H19.3602V5.14307H14.7769Z" fill="black"/>
            </svg>`,
            }}
          />
          <span>Fill In</span>
        </button>
        <button className="sort-button">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.58008 15.5598H7.58008V13.8931H2.58008V15.5598ZM2.58008 5.55981V7.22648H17.5801V5.55981H2.58008ZM2.58008 11.3931H12.5801V9.72648H2.58008V11.3931Z" fill="#03151E"/>
            </svg>`,
            }}
          />
          <span>Title</span>
        </button>
        <button className="sort-arrow">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3835 11.5599L17.091 10.2674L11.9668 15.3824V4.22656H10.1335V15.3824L5.01846 10.2582L3.7168 11.5599L11.0501 18.8932L18.3835 11.5599Z" fill="#03151E"/>
            </svg>`,
            }}
          />
        </button>
      </div>
      <button className="filter-button" onClick={handleClick}>
        <span>Add Book</span>
      </button>
      <button className="filter-button">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16667 16.5H12.8333V14.6667H9.16667V16.5ZM2.75 5.5V7.33333H19.25V5.5H2.75ZM5.5 11.9167H16.5V10.0833H5.5V11.9167Z" fill="white"/>
          </svg>`,
          }}
        />
        <span>Filters</span>
      </button>
    </section>
  );
};

const SearchHeader = () => {
  return (
    <header>
      <div className="header-content">
        <h1 className="main-title">Explore</h1>
        <div className="search-input-wrapper">
          <div className="search-icon-small">
            <i className="search-icon" />
          </div>
          <input
            type="text"
            placeholder="Search by collection name"
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
};

const InputDesigns = () => {
  return (
    <div className="library-layout">
      <Sidebar />
      <main className="library-main">
        <SearchHeader />
        <FilterControls />
        <BookGrid />
      </main>
    </div>
  );
};

export default InputDesigns;
