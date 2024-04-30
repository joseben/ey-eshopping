import React from 'react';
import BookInventory from './BookInventory';
import Banner from './Banner';
import BookTable from './BookTable';
import FooterComponent from './FooterComponent';
 
function App() {
  return (
    <div className="App">
      <BookInventory />
      <Banner />
      <div className="heading-line">
        <h1 className="book-inventory-heading">Book Inventory</h1>
      
      </div>
      <BookTable />
      <FooterComponent/>
    </div>
  );
}
 
export default App;