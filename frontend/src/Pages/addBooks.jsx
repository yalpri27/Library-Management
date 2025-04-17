import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    isbn: '',
    pages: '',
    rating: '',
    publisher: '',
    publishedYear: '',
    description: '',
    genre: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Add document to Firestore
      await addDoc(collection(db, "books"), {
        title: formData.title,
        id: formData.title,
        author: formData.author,
        year: parseInt(formData.publishedYear),
        isbn: formData.isbn,
        pages: parseInt(formData.pages),
        rating: parseInt(formData.rating),
        publisher: formData.publisher,
        genre: formData.genre,
        coverImage: formData.coverImage,
        description: formData.description,
        createdAt: new Date()
      });
      
      setSuccess(true);
      // Reset form after successful submission
      setFormData({
        title: '',
        author: '',
        year: '',
        isbn: '',
        pages: '',
        rating: '',
        publisher: '',
        genre: '',
        coverImage: '',
        description: ''
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message);
      console.error("Error adding document: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Book Information</h1>
      {success && <div className="success-message">Book added successfully!</div>}
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className='form-out-box'>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter book title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="year">Publication Year:</label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Enter publication year"
              min="1000"
              max={new Date().getFullYear()}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="isbn">ISBN:</label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              placeholder="Enter ISBN number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="pages">Number of Pages:</label>
            <input
              type="number"
              id="pages"
              name="pages"
              value={formData.pages}
              onChange={handleChange}
              placeholder="Enter page count"
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Enter Rating"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="publisher">Publisher:</label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              value={formData.publisher}
              onChange={handleChange}
              placeholder="Enter name of Publisher"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              placeholder="Enter Genre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="coverImage">Cover Image:</label>
            <input
              type="text"
              id="coverImage"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              placeholder="Enter Cover Image Link"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Book description"
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Book'}
          </button>
        </div>
        
      </form>

      <style jsx>{`
        .form-out-box {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1{
          font-weight: bold;
          font-size: 40px;
          padding-left: 280px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
        }
        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        button {
          background-color: #4285f4;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #3367d6;
        }
        button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
        .success-message {
          color: #388e3c;
          background-color: #e8f5e9;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 15px;
        }
        .error-message {
          color: #d32f2f;
          background-color: #ffebee;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};

export default BookForm;