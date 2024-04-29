
import {Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBookComponent from './components/ListProductComponent';
import PaymentComponent from './components/PaymentComponent';

function App() {
  return (
    <div>
      
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route exact path = "/" element = { <ListBookComponent /> }></Route>
              <Route path = "/employees" element = { <ListBookComponent /> }></Route>
              <Route path="/payment" element={<PaymentComponent />} />


            </Routes>
        </div>
        <FooterComponent />

    </div>
  );
}

export default App;