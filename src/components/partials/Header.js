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
    
    logout = (e) => {
        document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        // localStorage.removeItem('access_token');
    }
    getCookie = (cname) => {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }

    render() {  
        var logout = undefined;      
        if(this.getCookie('access_token') !== '') {
            logout = (
                <div>
                    <li><Link to="/user/profile"><i className="fa fa-user-o" /> Profile </Link></li>
                    <li><a onClick={e => this.logout(e)} href="/"><i className="fa fa-user-o" /> Logout</a></li>
                </div>
            )
        }
        var accout = undefined;
        if(this.getCookie('access_token') === '') {
            accout = (
                <li><Link to="/user/signin"><i className="fa fa-user-o" /> SignIn </Link></li>
            )
        } 
        return (
            <div>
                <header>
                    {/* TOP HEADER */}
                    <div id="top-header">
                        <div className="container">
                        <ul className="header-links pull-left">
                            <li><a href="/contact"><i className="fa fa-phone" /> +021-95-51-84</a></li>
                            <li><a href="/contact"><i className="fa fa-envelope-o" /> email@email.com</a></li>
                            <li><a href="/contact"><i className="fa fa-map-marker" /> 1734 Stonecoal Road</a></li>
                        </ul>
                        <ul className="header-links pull-right">
                            {accout}
                            {logout}
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
                                <Link to="/" className="logo">
                                    <img src="/img/logo.png" alt="img logo" />
                                </Link>
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
                                {/* <div>
                                <a href="#">
                                    <i className="fa fa-heart-o" />
                                    <span>Your Wishlist</span>
                                    <div className="qty">2</div>
                                </a>
                                </div> */}
                                {/* /Wishlist */}
                                {/* Cart */}
                                <div className="dropdown">
                                    <NavLink to="/cart">
                                        <i className="fa fa-shopping-cart" />
                                        <span>Your Cart</span>
                                        <div className="qty">3</div>
                                    </NavLink>                                
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
                        <li className="active"><NavLink to="/">Home</NavLink></li>
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