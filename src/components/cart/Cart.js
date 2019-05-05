import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import Redirect from 'react-router-dom/Redirect'
import Axios from 'axios';
import ProductCart from './ProductCart';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId : '',
            cart : [],
            infoProduct : {}
        }
        // this.getCart = this.getCart.bind(this);
        this.showCart();
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
    
    showCart = () => {
        this.getCart();
        console.log(this.state.cart);
        this.state.cart.map(product => {
            console.log(this.state.infoProduct);
            return this.getInfoProduct(product.productId);
        });
    }

    render() {
        if(this.getCookie('access_token') === '') {
            return <Redirect to="/user/signin" />
        }
        console.log(this.state.cart);
        var product = this.state.cart.map(doc => {
            return <ProductCart 
                        img={doc.img} 
                        name={doc.name} 
                        price={doc.price}
                        total={doc.total}

                    />
        });
        console.log(product);
        return (
            <div>         
                <div>
                    <div className="bg-light py-3">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><a href="/">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Cart</strong></div>
                        </div>
                        </div>
                    </div>
                    
                    <div className="site-section">
                        <div className="container">
                        <div className="row mb-5">
                            <form className="col-md-12" method="post">
                            <div className="site-blocks-table">                                
                                <table className="table table-bordered">
                                    <thead> 
                                        <tr>
                                            <th className="product-thumbnail">Image</th>
                                            <th className="product-name" >Product</th>
                                            <th className="product-price" >Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-total" >Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product}
                                    </tbody>
                                </table>
                            </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="row mb-5">
                                <div className="col-md-6 mb-3 mb-md-0">
                                <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
                                </div>
                                <div className="col-md-6">
                                <button className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <label className="text-black h4" htmlFor="coupon">Coupon</label>
                                <p>Enter your coupon code if you have one.</p>
                                </div>
                                <div className="col-md-8 mb-3 mb-md-0">
                                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                                </div>
                                <div className="col-md-4">
                                <button className="btn btn-primary btn-sm">Apply Coupon</button>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6 pl-5">
                            <div className="row justify-content-end">
                                <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-12 text-right border-bottom mb-5">
                                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                    <span className="text-black">Subtotal</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                    <strong className="text-black">$230.00</strong>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                    <span className="text-black">Total</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                    <strong className="text-black">$230.00</strong>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <button className="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        {/* <div className="site-section">
                        <div className="container">
                            <div className="row mb-5">
                            <h1>Cart empty</h1>
                            </div>
                        </div>
                        </div> */}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;