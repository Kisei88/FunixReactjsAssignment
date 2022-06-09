import React, { Component, useState,useEffect } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse} from 'reactstrap';
import { NavLink } from 'react-router-dom';


function Header() {
    const [isNavOpen, setIsNavOpen] = useState (false);
    const toggleNav = () =>{
        setIsNavOpen(!isNavOpen)
    }
        return (
            <React.Fragment>
                <Navbar color = 'primary' dark expand = 'md'>
                    <div className  = 'container'>
                        <NavbarToggler onClick = {toggleNav} />
                        <NavbarBrand className = 'mr-auto' href = '/'>
                            <img src = 'assets/images/logo.png' height ='30' width = '41' alt = 'Công Ty A Logo'/>
                        </NavbarBrand>
                        <Collapse isOpen = {isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className = 'nav-link' to = '/nhanvien'>
                                        <span className = 'fa fa-home fa-lg'></span> Nhân Viên 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className = 'nav-link' to = '/phongban'>
                                        <span className = 'fa fa-info fa-lg'></span> Phòng Ban
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className = 'nav-link' to = '/luong'>
                                        <span className = 'fa fa-list fa-lg'></span> Bảng Lương
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className = 'Jumbotron'>
                    <div className  = 'container'>
                        <div className = 'row row-header'>
                            <div className = 'col-12 col-sm-6'>
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
// }
    


export default Header;