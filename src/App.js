import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap'
import {STAFFS} from './shared.staffs'
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand>
            Ứng Dụng Quản Lý Nhân Sự v1.0
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
