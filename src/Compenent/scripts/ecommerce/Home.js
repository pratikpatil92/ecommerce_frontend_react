import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import Slide1 from './../assets/ROGPhone3Hero-01.png';
import Slide2 from './../assets/0913-TeesandJeans_16x9.jpg';
import Sales1 from './../assets/Jeans_sales.jpg';
import Sales2 from './../assets/sales_Tshirt.jfif';
import Sales3 from './../assets/download.jfif';
import Iphone from './../assets/iphone121.jpg';
import Rog from './../assets/rog.jpg';

import './../css/main.css'
import {Link} from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-50"
                        src={Slide1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Asus ROG phone 3</h3>
                        <p>Express Gaming Experience</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-50"
                        src={Slide2}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>New Arrival Fashion Sales </h3>
                        <p>Mens Jeans T-Shirts Shirts</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
                <div className="my-5">
                <h1 className="text-secondary">Flagship Mobile Phones</h1>
                    <div className="container text-center">
                    <div className="row my-4">
                        <div className="col-md-6 zoom">
                            <Link to="product/Mobile"><img src={Iphone} ></img></Link>
                        </div>
                        <div className="col-md-6 zoom text-left">
                        <Link to="product/Mobile"><img src={Rog} ></img></Link>
                        </div>
                        
                        
                    </div>
                    </div>
                </div>

                <div className="my-5">
                <h1 className="text-secondary">FASHION SALES</h1>
                    <div className="container text-center">
                    <div className="row my-4">
                        
                        <div className="col-md-4 w-50 zoom">
                            <Link to="product/Jeans"><img src={Sales1} height="230" width="220"></img></Link>
                        </div>
                        <div className="col-md-4 zoom">
                            <Link to="product/T-shirt"><img src={Sales2}></img></Link>
                        </div>
                        <div className="col-md-4 zoom">
                            <Link to="product/Kurtis"><img src={Sales3}></img></Link>
                        </div>
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}
