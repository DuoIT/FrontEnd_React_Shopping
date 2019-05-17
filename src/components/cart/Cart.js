import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import Redirect from 'react-router-dom/Redirect'
import Axios from 'axios';
import ProductCart from './ProductCart';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false,
            userId : '',
            cart : [],
            disCountCode : '',
            disCountValue: {},
            disCountStatus : 0,
            total: 0,
            grandTotal: 0,
        }
        if(this.getCookie('access_token') !== '') this.getCart();
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

    getCart= () => {
        console.log('get Cart');
        const user = this.decode();
        return Axios.post('http://localhost:3000/cart', {userId: user._id})
        .then(doc => {
            this.setState({
                cart : doc.data.cart
            })
            return this.total();
        })
        .catch(err => {
            console.log(err);
        })
    }

    isChange = async (event) => {
        const value = event.target.value;
        console.log(value);        
        await this.setState({disCountCode : value });

        if(value === '') {
            return this.setState({disCountStatus : 0 });
        }
        // else
         return this.getdisCountCode();
    }

    removeAll = () => {
        console.log('remove all');
        Axios.delete('http://localhost:3000/cart/remove/all/'+this.decode()._id)
        .then( res => {
            console.log('Da delete all ')
            console.log(res.data);  
            return this.getCart();         
        })
        .catch(err => {
            console.log(err);
        })
    }

    getdisCountCode = async () => {        
        // e.preventDefault();
        await Axios.post('http://localhost:3000/cart/disCountCode', {disCountCode: this.state.disCountCode})
        .then(res=> {
            console.log(res.data.doc);
            this.setState({disCountValue: res.data.doc, disCountStatus: res.status});
        })
        .catch(err => {
            console.log(err.response.data)
            this.setState({disCountValue: err.response.data, disCountStatus: err.response.status});
        });
    }

    applyCode = (e) => {        
        e.preventDefault();
        if(this.state.disCountStatus === 200) {
            this.setState({grandTotal: this.state.total - this.state.disCountValue.reduced})
            const cancel = document.getElementById('cancel');
            cancel.style.display = 'inline';
        }
        
    }

    cancelApplyCode = (e) => {   
        e.preventDefault();
        const cancel = document.getElementById('cancel');
        cancel.style.display = 'none';

        const input = document.getElementById('inputCode');
        input.value = "";
        this.setState({
            grandTotal : this.state.grandTotal + this.state.disCountValue.reduced,
            disCountCode : '',
            disCountStatus : 0,
            disCountValue : {}
        });

    }

    total = () => {
        var total = 0;
        this.state.cart.map(doc => {
            total += doc.price*doc.qty;
        });
        return this.setState({total: total, grandTotal: total});
    }
    render() {        
        if(this.getCookie('access_token') === '') {
            return <Redirect to="/user/signin" />
        }
        
        var message = undefined;     
        
        if(this.state.disCountStatus === 0) {
            message =  <label>Enter your coupon code if you have one</label>
        } else if(this.state.disCountStatus === 500) {
            message =  <label>{this.state.disCountValue.err}</label>
        } else if(this.state.disCountStatus === 200) {
            message =  <label>Giam {this.state.disCountValue.reduced}d</label>
        }

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
                                {
                                    this.state.cart.map(doc => {
                                        return <ProductCart 
                                            img={doc.img} 
                                            name={doc.name} 
                                            price={doc.price}
                                            qty={doc.qty}
                                            productId = {doc.productId}
                                            userId = {this.decode()._id}
                                            cartId = {doc._id}
                                            getCart = {() => this.getCart()}
                                        />
                                    })
                                }
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colSpan={6}>
                                <Link to="/">
                                    <button className="pull-left">
                                        Continue Shopping
                                    </button>
                                </Link>
                                <button className=" pull-right" onClick={() => this.removeAll()} >
                                    Delete All
                                </button>
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
                                    {message}
                                <input id="inputCode" onChange={(e) => this.isChange(e)} type="text" name="disCountCode" />
                                <div className="clearfix">
                                </div>
                                <button onClick={(e) => this.applyCode(e)} >
                                    Apply
                                </button>
                                <button className="pull-right" id="cancel" style={{display: 'none'}} onClick={(e) => this.cancelApplyCode(e)} >
                                    Cancel
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
                                    {this.state.total}
                                </span>
                                </div>
                                <div className="grandtotal">
                                <h5>
                                    GRAND TOTAL 
                                </h5>
                                <span>
                                    {this.state.grandTotal}
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