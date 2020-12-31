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
  NavbarText
  } from 'reactstrap';

import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAllCategory} from './../Redux/ecommerce/categoryAction';
import { Spinner } from 'reactstrap';


class Header extends Component {
    constructor(props){
        super();
        this.state={isOpen:false, 
          url:"product/"
        };
        this.toggle = this.toggle.bind(this);

    }

    componentDidMount(){
      this.props.getAllCategory();
    }

    toggle(){
        this.setState({isOpen:!this.state.isOpen});
    }
    // logout=()=>{
    //     this.props.onLogout(this.props.history);
    // }

    onsub = ()=>{
      this.setState({url:"product/"})
    }
    
    
    render() {
        const {isOpen}=this.state;
        const {all_category}=this.props;
        if(all_category.data_state=="NOT_INITIALIZE"){
          return(
            <div className="container text-center">
                  <Spinner color="primary" />
            </div>
          )
        }else if(all_category.data_state=="FETCH_SUCCESS"){

        return (
            <div>
            <Navbar color="light" light expand="md">
            <div className="container">
              <NavbarBrand><Link className="navbar-brand" to="/">AllShop</Link></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav  navbar className="mr-auto">
                  <NavItem>
                    <Link className="nav-link" to="/">Home</Link>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Category
                    </DropdownToggle>
                    <DropdownMenu right>
                      {all_category.all_category.map((el,index)=>(
                        <DropdownItem>
                        <Link className="nav-link" to={`${this.state.url}+${el.name}`} onClick={this.onsub}>{el.name}</Link>
                        </DropdownItem>

                      ))}
                        
                        
                        
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem className="ml-auto">
                      <Link className="nav-link" to="/login">Login</Link>
                    </NavItem>
                    
                    
                  
                </Nav>
                <NavbarText>Simple Text</NavbarText>
              </Collapse>
              </div>
            </Navbar>
          </div>
        )}
    }
}

const mapStateToProps = state=>({
  all_category:state.all_category
})

export default connect (mapStateToProps,{getAllCategory})(withRouter(Header));
