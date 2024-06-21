import React, { useState } from 'react';
import logo from '../Images/logo.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { checkLogin, logout, getCurrentUser } from './Auth';
import { useNavigate } from 'react-router-dom';

function CustomNavbar() {
  const navigate = useNavigate();
  const logoutClick = () => {
    console.log("logout");
    logout();
    navigate("/login");
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color='red' expand='md'>
      <NavbarBrand href="/">
      <img
        alt="logo"
        src={logo}
        style={{
          height: 40,
          width: 40
        }}
      />
      GoShoppingggg
    </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Store</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                About
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contact Us
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {(!checkLogin())?<Nav>
            <NavItem>
              <NavLink href='/signup'>Sign Up</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href='/login'>Log In</NavLink>
            </NavItem>
          </Nav>:<Nav>
            <NavItem>
              <NavLink href='/dashboard'>{getCurrentUser().name}</NavLink>
            </NavItem>
            <NavItem>
            <NavLink onClick={logoutClick}>Log out</NavLink>
            </NavItem>
          </Nav>}
        </Collapse>
      </Navbar>
    </div>
  )
}

export default CustomNavbar