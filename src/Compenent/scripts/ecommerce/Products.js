import React, { Component } from 'react'
import {getProduct} from './../../Redux/ecommerce/productAction'
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';
import InputNumber from 'react-input-number';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign} from '@fortawesome/free-solid-svg-icons';

import './../css/main.css'




class Products extends Component {
    constructor(props){
        super(props);
        this.setState={
            num:1,
        }
        const name = props.match.params.name;
        this.getProduct(name)
    }

    getProduct=async (name)=>{
        // console.log(this.props.getProduct(name))
        await this.props.getProduct(name);
    }
    render() {
        const {products} = this.props;
        console.log("pro",products)
        if(products.data_state=="NOT_INITIALIZE"){
            return(
                <div className="container text-center">
                     <Spinner color="primary" />
                </div>
            )
        }else if(products.data_state=="FETCHED_SUCCESS"){
            return (
                <div className="container my-5">
                    <div className="row text-center">
                        {products.products.map((el,index)=>(
                            
                            <div className="col-md-4 m-5 hovereffect">
                            <img className="img-fluid" src={`${el.image}`}></img>
                            {/* <p className="my-3">{el.title}</p> */}
                            {/* <p>Price:{el.price}</p>
                            <button className="btn btn-secondary">Add To Card</button> */}
                            <div className="overlay card">
                                <div className="card-header"><h2 className="text-light">{el.title}</h2></div>
                                <div className="card=body p-3"><p className="text-light">{el.description}</p>
                                <h5 className="text-light">Price: <FontAwesomeIcon icon={faRupeeSign}></FontAwesomeIcon> {el.price}</h5></div>
                                <div className="card-footer">
                                    <div className="form-group container w-25"><label className="text-light">Quantiy</label><input type="number" className="form-control" value="1" min="1" max="5"></input></div>
                                    <button className="btn btn-warning">Add To Cart</button>
                                </div>
                            </div>
                            
                        </div>
                        

                        ))}</div>
                    
                    
                </div>
            )
        }
    }
}

const mapStateToProps=state=>({
    products:state.products,
});


export default connect (mapStateToProps,{getProduct})(withRouter(Products));
