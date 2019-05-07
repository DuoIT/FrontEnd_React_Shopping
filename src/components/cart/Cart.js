import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import Redirect from 'react-router-dom/Redirect'
import Axios from 'axios';
import ProductCart from './ProductCart';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false,
            userId : '',
            cart : []
        }
        this.getCart();
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

    decode = () => {
        var token = this.getCookie('access_token');
        return jwt.verify(token, 'keyBaoMat', function(err, decoded) {
            return decoded;
        });
    } 

    getCart= async () => {
        await Axios.post('http://localhost:3000/cart', {userId: this.decode()._id})
        .then(doc => {
            return this.setState({
                cart : doc.data.cart
            })
        })
        .catch(err => {
            if(err) {
                console.log(err);
            }
        })
    }

    handleButtonDeleteClick = (e)=>{
        e.forceUpdate();
        
    }

    updateCart = () => {

    }

    render() {
        console.log(this.state.redirect);
        if(this.getCookie('access_token') === '') {
            return <Redirect to="/user/signin" />
        }
        console.log(this.state.cart);
        var total = 0;
        const product = this.state.cart.map(doc => {
            total += doc.price*doc.qty;
            return <ProductCart 
                        img={doc.img} 
                        name={doc.name} 
                        price={doc.price}
                        qty={doc.qty}
                        productId = {doc.productId}
                        userId = {this.decode()._id}
                        cartId = {doc._id}
                        handleButtonDeleteClick = {() => this.handleButtonDeleteClick()}
                    />
        });
        console.log(total);
        return (
            <div>
                <div className="clearfix">
                </div>
                <div className="container_fullwidth">
                    <div className="container shopping-cart">
                    <div className="row">
                        <div className="col-md-12">
                        <h3 className="title">
                            Shopping Cart
                        </h3>
                        <div className="clearfix">
                        </div>
                        <table className="shop-table">
                            <thead>
                                <tr>
                                <th>
                                Image
                                </th>
                                <th>
                                Detail
                                </th>
                                <th>
                                Price
                                </th>
                                <th>
                                Quantity
                                </th>
                                <th>
                                Price
                                </th>
                                <th>
                                Delete
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                {product}
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colSpan={6}>
                                <button className="pull-left">
                                    Continue Shopping
                                </button>
                                {/* <button className=" pull-right">
                                    Update Shopping Cart
                                </button> */}
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                        <div className="clearfix">
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                            <div className="shippingbox">
                                <h5>
                                Discount Codes
                                </h5>
                                <form>
                                <label>
                                    Enter your coupon code if you have one
                                </label>
                                <input type="text" name />
                                <div className="clearfix">
                                </div>
                                <button>
                                    Get A Qoute
                                </button>
                                </form>
                            </div>
                            </div>
                            <div className="col-md-4 col-sm-6 pull-right">
                            <div className="shippingbox">
                                <div className="subtotal">
                                <h5>
                                    Sub Total
                                </h5>
                                <span>
                                    {total}
                                </span>
                                </div>
                                <div className="grandtotal">
                                <h5>
                                    GRAND TOTAL 
                                </h5>
                                <span>
                                    {total}
                                </span>
                                </div>
                                <button>
                                Process To Checkout
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="clearfix">
                    </div>
                    <div className="our-brand">
                        <h3 className="title">
                        <strong>
                            Our 
                        </strong>
                        Brands
                        </h3>
                        <div className="control">
                        <a id="prev_brand" className="prev" href="#">
                            &lt;
                        </a>
                        <a id="next_brand" className="next" href="#">
                            &gt;
                        </a>
                        </div>
                        <ul id="braldLogo">
                        <li>
                            <ul className="brand_item">
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/envato.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/themeforest.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/photodune.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/activeden.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/envato.png" alt />
                                </div>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <ul className="brand_item">
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/envato.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/themeforest.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/photodune.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/activeden.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/envato.png" alt />
                                </div>
                                </a>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="clearfix">
                </div>
            </div>
        );
    }
}

export default Cart;