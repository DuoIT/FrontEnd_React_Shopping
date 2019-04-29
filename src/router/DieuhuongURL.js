import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Index from '../components/index/Index';
import Contact from '../components/contact/Contact';
import Detail from '../components/detail/Detail';
import ProductCate from '../components/categories/ProductCate';

class DieuhuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Index} />
                <Route path="/contact" component={Contact} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/cates/:id" component={ProductCate} />
                
                {/* <Route path='/cate/:slug/:id' component={ProductCate} /> */}
            </div>
        );
    }
}

export default DieuhuongURL;