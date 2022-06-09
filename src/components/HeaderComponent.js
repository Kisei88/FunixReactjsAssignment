import React, { Component, useState,useEffect } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse, Jumbotron} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';


// class Header extends Component {

//     constructor (props) {
//         super(props);
//         this.state = {
//             isNavOpen: false,
//         };
//         this.toggleNav = this.toggleNav.bind(this);
//     }
        
    // toggleNav() {
    //     this.setState({ isNavOpen: !this.state.isNavOpen });
    // }
    // render () {
function Header() {
    const [isNavOpen, setIsNavOpen] = useState (false)
    const toggleNav = () =>{
        setIsNavOpen(!isNavOpen)
    }
        return (
            <React.Fragment>
                <Navbar dark expand = 'md'>
                    <div className  = 'container'>
                        <NavbarToggler onClick = {toggleNav} />
                        <NavbarBrand className = 'mr-auto' href = '/'>
                            <img src = 'assets/images/logo.png' height ='30' width = '41' alt = 'Công Ty A Logo'/>
                        </NavbarBrand>
                        <Collapse isOpen = {isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className = 'nav-link' to = '/home'>
                                        <span className = 'fa fa-home fa-lg'></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className = 'nav-link' to = '/department'>
                                        <span className = 'fa fa-info fa-lg'></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className = 'nav-link' to = '/salary'>
                                        <span className = 'fa fa-list fa-lg'></span> Nhân viên
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className  = 'container'>
                        <div className = 'row row-header'>
                            <div className = 'col-12 col-sm-6'>
                                <h1>ABC</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
// }
    


export default Header;