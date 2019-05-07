import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Axios from 'axios';
import Cate from './Cate';

class Header extends Component {
    constructor(props) {
        super(props);        
        this.state  = {
            categories : []
        }
        Axios.get('http://localhost:3000/')
        .then(docs => {
            this.setState({
                categories: docs.data.cates
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
        var user = undefined;      
        if(this.getCookie('access_token') === '') {
            user = (
                <ul className="usermenu">
                    <li><a href="/user/signin" className="log">Login</a></li>
                    <li><a href="/user/signup" className="reg">Register</a></li>
                </ul>
            )
        } else {
            user = (
                <ul className="usermenu">
                    <li><a href="/user/profile" className="log">Profile</a></li>
                    <li><a onClick={e => this.logout(e)} href="/"><i className="fa fa-user-o" /> Logout</a></li>
                </ul>
            )
        }
        
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                    <div className="col-md-2 col-sm-2">
                        <div className="logo"><a href="/"><img src="/images/logo.png" alt="FlatShop" /></a></div>
                    </div>
                    <div className="col-md-10 col-sm-10">
                        <div className="header_top">
                        <div className="row">
                            <div className="col-md-12">
                            {user}
                            </div>
                        </div>
                        </div>
                        <div className="clearfix" />
                        <div className="header_bottom">
                        <ul className="option">
                            <li id="search" className="search">
                                <form>
                                    <input type="text" />
                                    <input className="search-submit" type="submit"  />
                                    {/* <input className="search-input" placeholder="Enter your search term..." type="text" defaultValue name="search" /> */}
                                </form>
                            </li>
                            <li className="option-cart">
                                <Link to="/cart" className="cart-icon">cart <span className="cart_no">02</span></Link>
                            </li>
                        </ul>
                        <div className="navbar-header"><button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button></div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                            {/* <li className="active dropdown"> */}
                                {/* <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home</a> */}
                            <li className="dropdown-toggle" ><NavLink to="/">Home</NavLink></li>
                            {
                                this.state.categories.map(cate => (
                                    <Cate 
                                        id={cate._id} 
                                        name={cate.name} 
                                    />
                                ))
                            }
                            <li><NavLink to="/contact">Contact</NavLink></li>                                    
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;