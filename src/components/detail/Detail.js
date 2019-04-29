import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


var URL = 'http://localhost:3000/detail/';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product : {},
            qty : 0
        }
        Axios.get(URL+this.props.match.params.id)
        .then(product => {
            this.setState({product: product.data.product}); 
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                {/* BREADCRUMB */}
                <div id="breadcrumb" className="section">
                    {/* container */}
                    <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-md-12">
                        <ul className="breadcrumb-tree pull-left">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/cates/">{this.state.product.cate}</Link></li>
                        </ul>
                        </div>
                    </div>
                    {/* /row */}
                    </div>
                    {/* /container */}
                </div>
                {/* /BREADCRUMB */}
                {/* SECTION */}
                <div className="section">
                    {/* container */}
                    <div className="container">
                    {/* row */}
                    <ProductDetail 
                        product = {this.state.product}
                        img={this.state.product.img} 
                        name={this.state.product.name}
                        price={this.state.product.price}
                        cate={this.state.product.cate}
                        des={this.state.product.des}
                        quantity={this.state.product.quantity}
                    />
                    {/* /row */}
                    </div>
                    {/* /container */}
                </div>
                {/* /SECTION */}
                {/* Section */}
                <div className="section">
                    {/* container */}
                    <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h3 className="title">Related Products</h3>
                            </div>
                        </div>
                        {/* product */}
                        {/* <div className="col-md-3 col-xs-6">
                        <div className="product">
                            <div className="product-img">
                            <img src="/img/product01.png" alt="img product " />
                            <div className="product-label">
                                <span className="sale">-30%</span>
                            </div>
                            </div>
                            <div className="product-body">
                            <p className="product-category">Category</p>
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                            <div className="product-rating">
                            </div>
                            <div className="product-btns">
                                <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                                <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                                <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                            </div>
                            </div>
                            <div className="add-to-cart">
                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                            </div>
                        </div>
                        </div> */}
                        {/* /product */}
                    </div>
                    {/* /row */}
                    </div>
                    {/* /container */}
                </div>
                {/* /Section */}
                
                </div>
        );
    }
}

export default Detail;