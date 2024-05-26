// src/components/Dashboard.js

import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [editingAuthor, setEditingAuthor] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [showBookSection, setShowBookSection] = useState(false);
  const [showAuthorSection, setShowAuthorSection] = useState(false);

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(''), 3000);
  };

  const handleBookSubmit = (book) => {
    if (editingBook) {
      setBooks(books.map(b => (b.isbn === editingBook.isbn ? book : b)));
      setEditingBook(null);
      showAlert('Book updated successfully!');
    } else {
      setBooks([...books, book]);
      showAlert('Book added successfully!');
    }
  };

  const handleAuthorSubmit = (author) => {
    if (editingAuthor) {
      setAuthors(authors.map(a => (a.name === editingAuthor.name ? author : a)));
      setEditingAuthor(null);
      showAlert('Author updated successfully!');
    } else {
      setAuthors([...authors, author]);
      showAlert('Author added successfully!');
    }
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
    setShowBookSection(true);
  };
  const handleDeleteBook = (isbn) => {
    setBooks(books.filter(b => b.isbn !== isbn));
    showAlert('Book deleted successfully!');
  };

  const handleEditAuthor = (author) => {
    setEditingAuthor(author);
    setShowAuthorSection(true);
  };
  const handleDeleteAuthor = (name) => {
    setAuthors(authors.filter(a => a.name !== name));
    showAlert('Author deleted successfully!');
  };

  return (
    <div className="dashboard">
      <h1>Library Management System</h1>
      {alertMessage && <div className="success-alert">{alertMessage}</div>}
      <div className="button-container">
        <button onClick={() => {
          setShowBookSection(!showBookSection);
          setShowAuthorSection(false);
        }}>
          {showBookSection ? 'Hide Book Section' : 'Add/Edit Book'}
        </button>
        <button onClick={() => {
          setShowAuthorSection(!showAuthorSection);
          setShowBookSection(false);
        }}>
          {showAuthorSection ? 'Hide Author Section' : 'Add/Edit Author'}
        </button>
      </div>
      {showBookSection && (
        <div className="section">
          <h2>Books</h2>
          <BookForm
            initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
            onSubmit={handleBookSubmit}
            onCancel={() => {
              setEditingBook(null);
              setShowBookSection(false);
            }}
          />
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Publication Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr key={book.isbn}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.publicationDate}</td>
                  <td>
                    <button onClick={() => handleEditBook(book)}>Edit</button>
                    <button className="delete" onClick={() => handleDeleteBook(book.isbn)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showAuthorSection && (
        <div className="section">
          <h2>Authors</h2>
          <AuthorForm
            initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }}
            onSubmit={handleAuthorSubmit}
            onCancel={() => {
              setEditingAuthor(null);
              setShowAuthorSection(false);
            }}
          />
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth Date</th>
                <th>Biography</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {authors.map(author => (
                <tr key={author.name}>
                  <td>{author.name}</td>
                  <td>{author.birthDate}</td>
                  <td>{author.biography}</td>
                  <td>
                    <button onClick={() => handleEditAuthor(author)}>Edit</button>
                    <button className="delete" onClick={() => handleDeleteAuthor(author.name)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
