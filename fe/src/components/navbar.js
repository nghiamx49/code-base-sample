import React, { useState } from "react";
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
} from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../redux/action/auth-action";
import { useNavigate } from "react-router-dom";

function AppNavBar({ doLogout, authReducer }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  const navigator = useNavigate();

  const clearStateAndLogout = (e) => {
    doLogout();
    navigator("/login");
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>{authReducer.user.fullname}</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={clearStateAndLogout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

  const mapStateToProps = (state) => {
      return {
          authReducer: state.authReducer
      }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavBar);

