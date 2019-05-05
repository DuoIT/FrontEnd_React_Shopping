import React, { Component } from 'react';
import Axios from 'axios';
import jwt from 'jsonwebtoken';
import Redirect from 'react-router-dom/Redirect'

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false,
            total : 1
        }
    }

    tang = (e) => {
        this.setState({
            total : this.state.total+1
        })
    }
    tru = (e) => {
        if(this.state.total > 1) {
            this.setState({
                total : this.state.total-1
            })
        }        
    }

    isChange = (event) => {
        this.setState({total : event.target.value});
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
        })
        
    } 

    addToCart = (id) => {
        if(this.getCookie('access_token') === '') {
            console.log('Chua dang nhap');
            return this.setState({redirect : true})
        }  else {
            const user = this.decode();
            Axios.post('http://localhost:3000/add-to-cart/'+this.props.id, { "userId" : user._id, "total" : parseInt(this.state.total)})
            .then(res => {
                console.log(res.status);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    render() { 
        if(this.state.redirect) {
            return <Redirect to='/user/signin' />
        }    
        return (
            <div className="row">
                {/* Product main img */}
                <div className="col-md-5 col-md-push-1">
                    <div id="product-main-img">
                        <div className="product-preview">
                        <img src={this.props.img} alt="product detail img" />
                        </div>
                    </div>
                </div>
                {/* /Product main img */}
                {/* Product details */}
                <div className="col-md-5  col-md-push-2">
                    <div className="product-details">
                        <h2 className="product-name">{this.props.name}</h2>
                        <div>
                            <h3 className="product-price">{this.props.price} <del className="product-old-price">{this.props.price*1.3}</del></h3>
                            <span className="product-available">Have {this.props.quantity} products</span>
                        </div>
                        <p>{this.props.des} </p>                        
                        <div className="add-to-cart">
                            <div className="qty-label">
                                Qty: 
                                <div className="input-number">
                                    <input type="number" value={this.state.total} onChange={(event) => this.isChange(event)}/>
                                    <span className="qty-up" onClick={(e) => this.tang(e)} >+</span>
                                    <span className="qty-down" onClick={(e) => this.tru(e)}>-</span>
                                </div>
                            </div>
                            <button onClick={(event) => this.addToCart(this.props.id)} className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                        </div>
                        <div>
                            {/* <ul className="product-btns">
                            <li><a href="#"><i className="fa fa-heart-o" /> add to wishlist</a></li>
                            <li><a href="#"><i className="fa fa-exchange" /> add to compare</a></li>
                            </ul> */}
                            <ul className="product-links ">
                                <div>
                                    <li>Category:</li>
                                    <li><a href="/cates/">{this.props.cate}</a></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /Product details */}
                {/* Product tab */}
            </div>
        );
    }
}

export default ProductDetail;