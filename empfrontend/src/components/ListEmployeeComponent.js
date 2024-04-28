import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listBooks, deleteBook, updateBook } from '../services/BookService';

const ListEmployeeComponent = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllBooks();
    }, []);

    const getAllBooks = () => {
        listBooks().then((response) => {
            setBooks(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const removeBook = (bookId) => {
        deleteBook(bookId).then((response) => {
            getAllBooks();
        }).catch(error => {
            console.log(error);
        })
    }

    const updateQuantity = (bookId, newQuantity) => {
        updateBook(bookId, { quantity: newQuantity }).then((response) => {
            getAllBooks();
        }).catch(error => {
            console.log(error);
        })
    }

    function addNewBook() {
        navigate('/add-book');
    }

    const updateBook = (id) => {
        navigate(`/edit-book/${id}`);
    }

    const handleQuantityChange = (event, bookId) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity)) {
            updateQuantity(bookId, newQuantity);
        }
    }

    return (
        <div className="container">
            <br /><br />
            <h2 className="text-center">Your Shopping Cart</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Book Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(
                            book =>
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={book.quantity}
                                            onChange={(event) => handleQuantityChange(event, book.id)}
                                            style={{ width: '70px' }}
                                        />
                                    </td>
                                    <td>{book.price}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={() => updateBook(book.id)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => removeBook(book.id)} style={{ marginLeft: "10px" }}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent;
