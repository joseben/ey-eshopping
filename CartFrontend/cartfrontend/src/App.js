
import {Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import EmployeeComponent from './components/EmployeeComponent';

function App() {
  return (
    <div>
      
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route exact path = "/" element = { <ListEmployeeComponent /> }></Route>
              <Route path = "/employees" element = { <ListEmployeeComponent /> }></Route>
              <Route path = "/add-employee" element = { <EmployeeComponent />} ></Route>
              <Route path = "/edit-employee/:id" element = { <EmployeeComponent />}></Route>
            </Routes>
        </div>
        <FooterComponent />
        
    </div>
  );
}

export default App;