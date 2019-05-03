import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Axios from 'axios';
import jwt from 'jsonwebtoken';
import Redirect from 'react-router-dom/Redirect'


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : undefined
        }
    }
    
    decode = () => {
        var token = localStorage.getItem('access_token');
        return jwt.verify(token, 'keyBaoMat', function(err, decoded) {
            return decoded;
        });
    }    
    checkDangNhap = () => {
        if(localStorage.getItem('access_token')) {
            return 1;
        }
        return 0;
    }

    addToCart = (id) => {
        console.log(id);        
        if(this.checkDangNhap() === 0) {
            return <Redirect to="/user/signin" />
        } else {
            const user = this.decode();
            console.log(user);
            Axios.post('http://localhost:3000/add-to-cart/'+this.props.id, { "userId" : user._id, "total" : 1})
            .then(res => {
                console.log(res.status);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    render() {
        return (
            <div className="col-md-3">
                <div className="product">
                    <div className="product-img">
                        <img src={this.props.img} alt="img" />
                    </div>
                    <div className="product-body">
                        <p className="product-category">{this.props.cate}</p>
                        <h3 className="product-name"><Link to={"/detail/" + this.props.id}>{this.props.name}</Link></h3>
                        <h4 className="product-price">{this.props.price} <del className="product-old-price">$990.00</del></h4>
                        <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                    </div>
                    <div className="add-to-cart">
                        {/* <Link to={"/add-to-cart/" + this.props.id}> */}
                            <button onClick={() => this.addToCart(this.props.id)} className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;