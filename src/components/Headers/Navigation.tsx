/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import Modal from 'reactstrap/es/Modal';

interface State {
  isOpen: boolean;
  modal: boolean;
}
export default class Navigation extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal: false,
    };
  }

  handleMenu = (name) => {
    (this.props as any).scrollTo(name);
  };

  toggle() {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  }

  toggleModal = () => {
    this.setState((state) => ({ modal: !state.modal }));
  };

  render() {
    return (
      <div className="navigation-bar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand onClick={() => this.handleMenu('/')}>
            <div className="avatar-container" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <button
              className="navbar-toggler"
              type="button"
              onClick={this.toggle}
            >
              <span />
              <span />
            </button>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="menu-item"
                  onClick={() => this.handleMenu('projects')}
                >
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="menu-item"
                  href="#"
                  onClick={() => this.handleMenu('about')}
                >
                  About US
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => this.handleMenu('blog')}
                  className="menu-item"
                >
                  Blog
                </NavLink>
              </NavItem>
              {/* <NavItem> */}
              {/*  <NavLink */}
              {/*    className="menu-item" */}
              {/*    href="#" */}
              {/*    onClick={this.toggleModal} */}
              {/*  > */}
              {/*    contact */}
              {/*  </NavLink> */}
              {/* </NavItem> */}
              {/* <NavItem> */}
              {/*  <NavLink */}
              {/*    className="menu-item rounded-link" */}
              {/*    // href="{" */}
              {/*        onClick={this.toggleModal} */}
              {/*    id="nav-lastchild" */}
              {/*  > */}
              {/*    Contact */}
              {/*  </NavLink> */}
              {/* </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className="w-100"
        >
          {/* <Contact/> */}
        </Modal>
      </div>
    );
  }
}
