import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import Slide1 from './../assets/ROGPhone3Hero-01.png';
import Slide2 from './../assets/0913-TeesandJeans_16x9.jpg';
import Slide3 from './../assets/10-56-2112.jpg';

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
            </div>
        )
    }
}
