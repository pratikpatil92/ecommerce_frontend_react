import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  } from 'reactstrap';

import {Link, withRouter} from 'react-router-dom'

export default class Header extends Component {
    constructor(props){
        super();
        this.state={isOpen:false, 
                    name:""};
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({isOpen:!this.state.isOpen});
    }
    // logout=()=>{
    //     this.props.onLogout(this.props.history);
    // }

    
    
    render() {
        const {isOpen, name}=this.state;
        return (
            <div>
            <Navbar color="light" light expand="md">
            <div className="container">
              <NavbarBrand><Link className="navbar-brand" to="/">AllShop</Link></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav  navbar>
                  <NavItem>
                    <Link className="nav-link" to="/">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/top-rated-movie">Products</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/up-coming-movie"></Link>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Category
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Mobile
                        </DropdownItem>
                        <DropdownItem>
                        Shirts
                        </DropdownItem>
                        <DropdownItem>
                        T-Shirts
                        </DropdownItem>
                        <DropdownItem>
                        Jeans
                        </DropdownItem>
                        <DropdownItem>
                        Kurtis
                        </DropdownItem>
                        
                    </DropdownMenu>
                    </UncontrolledDropdown>
                  
                </Nav>
              </Collapse>
              </div>
            </Navbar>
          </div>
        )
    }
}