import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Index from '../components/index/Index';
import Contact from '../components/contact/Contact';
import Detail from '../components/detail/Detail';
import ProductCate from '../components/categories/ProductCate';
import SignUp from '../components/user/SignUp';
import SignIn from '../components/user/SignIn';
import Cart from '../components/cart/Cart';

class DieuhuongURL extends Component {
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
                {/* <Route path="/add-to-cart/:id" component={AddToCard} /> */}
                {/* <Route path='/cate/:slug/:id' component={ProductCate} /> */}
            </div>
        );
    }
}

export default DieuhuongURL;