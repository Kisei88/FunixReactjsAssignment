import logo from './logo.svg';
import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import StaffList from './components/StaffListComponent';
import {STAFFS, DEPARTMENTS, ROLE} from './shared/staffs';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    };
  }

render() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand>
            Ứng Dụng Quản Lý Nhân Sự v1.0
          </NavbarBrand>
        </div>
      </Navbar>
      <StaffList staffs = {this.state.staffs}/>
    </div>
  );
}
}

export default App;
