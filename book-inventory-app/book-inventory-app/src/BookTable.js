import React, { Component } from 'react';
import axios from 'axios';
import './BookTable.css';
 
class BookTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: true,
      error: null,
    };
  }
  
 
  componentDidMount() {
    axios.get('http://localhost:8085/api/v1/products')
      .then(response => {
        this.setState({
          books: response.data,
          loading: false,
          error: null,
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: "Error fetching books. Please try again later.",
        });
        console.error('Error fetching books:', error);
      });
  }
 
  render() {
    const { books, loading, error } = this.state;
 
    if (loading) {
      return <div>Loading...</div>;
    }
 
    if (error) {
      return <div>{error}</div>;
    }
 
    return (
      <div className="book-inventory">
        <div className="book-inventory-header">
          <div className="book-width-id">Book ID</div>
          <div className="book-width-header">Book Name</div>
          <div className="book-width-header">Quantity Sold </div>
          <div className="book-width-header">Total Quantity Left</div>
          <div className="book-width-header">Price in Rs</div>
        </div>
        {books.map((book) => (
          <div className="book-inventory-item" key={book.BookID}>
            <div className="book-width-id">{book.bookID}</div>
            <div className="book-width">{book.bookName}</div>
            <div className="book-width">{book.custQty}</div>
            <div className="book-width">{book.totalQty}</div>
            <div className="book-width">{book.price}</div>
          </div>
        ))}
      </div>
    );
  }
}
 
export default BookTable;
 