import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Index from '../components/index/Index';
import Contact from '../components/contact/Contact';
import Detail from '../components/detail/Detail';
import ProductCate from '../components/categories/ProductCate';
import SignUp from '../components/user/SignUp';
import SignIn from '../components/user/SignIn';
import jwt from 'jsonwebtoken';
import Redirect from 'react-router-dom/Redirect'
import Cart from '../components/cart/Cart';
import AddToCard from '../components/cart/AddToCard';

class DieuhuongURL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : undefined
        }
        // this.decode();
    }

    decode = () => {
        var token = localStorage.getItem('access_token');
        return jwt.verify(token, 'keyBaoMat', function(err, decoded) {
            return decoded;
        });
    }    
    checkDangNhap = () => {
        // if(localStorage.getItem('access_token')) {
        //     return 1;
        // }
        // return 0;
        console.log('1111111111111111111111111111111111111111111111111111111111111111');
    }
    render() {
        return (
            <div>
                <Route exact path="/" component={Index}/>
                <Route path="/contact" component={Contact} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/cates/:id" component={ProductCate} />
                <Route path="/user/signup" component={SignUp} />
                <Route path="/user/signin" component={SignIn} />
                <Route path="/cart" component={Cart} checkDangNhap={() => this.checkDangNhap()}  decode={() => this.decode()} />
                <Route path="/add-to-cart/:id" component={AddToCard} />
                {/* <Route path='/cate/:slug/:id' component={ProductCate} /> */}
            </div>
        );
    }
}

export default DieuhuongURL;