import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Axios from 'axios';
import Cate from '../categories/Cate';

class Header extends Component {
    constructor(props) {
        super(props);        
        this.state  = {
            categories : [],
            product : []
        }
        Axios.get('http://localhost:3000/')
        .then(cate => {
            this.setState({
                categories: cate.data.cates,
                products: cate.data.products
            });   
        })
        .catch(function (error) {
            console.log(error);
        });     
    };
    
    render() {        
        return (
            <div>
                <header>
                    {/* TOP HEADER */}
                    <div id="top-header">
                        <div className="container">
                        <ul className="header-links pull-left">
                            <li><a href="#"><i className="fa fa-phone" /> +021-95-51-84</a></li>
                            <li><a href="#"><i className="fa fa-envelope-o" /> email@email.com</a></li>
                            <li><a href="#"><i className="fa fa-map-marker" /> 1734 Stonecoal Road</a></li>
                        </ul>
                        <ul className="header-links pull-right">
                            <li><a href="#"><i className="fa fa-dollar" /> USD</a></li>
                            <li><a href="#"><i className="fa fa-user-o" /> My Account</a></li>
                        </ul>
                        </div>
                    </div>
                    {/* /TOP HEADER */}
                    {/* MAIN HEADER */}
                    <div id="header">
                        {/* container */}
                        <div className="container">
                        {/* row */}
                        <div className="row">
                            {/* LOGO */}
                            <div className="col-md-3">
                            <div className="header-logo">
                                <a href="#" className="logo">
                                <img src="./img/logo.png" alt />
                                </a>
                            </div>
                            </div>
                            {/* /LOGO */}
                            {/* SEARCH BAR */}
                            <div className="col-md-6">
                            <div className="header-search">
                                <form>
                                <select className="input-select">
                                    <option value={0}>All Categories</option>
                                    <option value={1}>Category 01</option>
                                    <option value={1}>Category 02</option>
                                </select>
                                <input className="input" placeholder="Search here" />
                                <button className="search-btn">Search</button>
                                </form>
                            </div>
                            </div>
                            {/* /SEARCH BAR */}
                            {/* ACCOUNT */}
                            <div className="col-md-3 clearfix">
                            <div className="header-ctn">
                                {/* Wishlist */}
                                <div>
                                <a href="#">
                                    <i className="fa fa-heart-o" />
                                    <span>Your Wishlist</span>
                                    <div className="qty">2</div>
                                </a>
                                </div>
                                {/* /Wishlist */}
                                {/* Cart */}
                                <div className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                    <i className="fa fa-shopping-cart" />
                                    <span>Your Cart</span>
                                    <div className="qty">3</div>
                                </a>
                                <div className="cart-dropdown">
                                    <div className="cart-list">
                                    <div className="product-widget">
                                        <div className="product-img">
                                        <img src="./img/product01.png" alt />
                                        </div>
                                        <div className="product-body">
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                                        </div>
                                        <button className="delete"><i className="fa fa-close" /></button>
                                    </div>
                                    <div className="product-widget">
                                        <div className="product-img">
                                        <img src="./img/product02.png" alt />
                                        </div>
                                        <div className="product-body">
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                                        </div>
                                        <button className="delete"><i className="fa fa-close" /></button>
                                    </div>
                                    </div>
                                    <div className="cart-summary">
                                    <small>3 Item(s) selected</small>
                                    <h5>SUBTOTAL: $2940.00</h5>
                                    </div>
                                    <div className="cart-btns">
                                    <a href="#">View Cart</a>
                                    <a href="#">Checkout  <i className="fa fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                </div>
                                {/* /Cart */}
                                {/* Menu Toogle */}
                                <div className="menu-toggle">
                                <a href="#">
                                    <i className="fa fa-bars" />
                                    <span>Menu</span>
                                </a>
                                </div>
                                {/* /Menu Toogle */}
                            </div>
                            </div>
                            {/* /ACCOUNT */}
                        </div>
                        {/* row */}
                        </div>
                        {/* container */}
                    </div>
                    {/* /MAIN HEADER */}
                    </header>
                    {/* /HEADER */}

                {/* NAVIGATION */}
                <nav id="navigation">
                {/* container */}
                <div className="container">
                    {/* responsive-nav */}
                    <div id="responsive-nav">
                    {/* NAV */}
                    <ul className="main-nav nav navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                        {
                            this.state.categories.map(cate => (
                                <Cate 
                                    id={cate.id} 
                                    name={cate.name} 
                                />
                            ))
                        }
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    {/* /NAV */}
                    </div>
                    {/* /responsive-nav */}
                </div>
                {/* /container */}
                </nav>
                {/* /NAVIGATION */}
            </div>
        );
    }
}

export default Header;