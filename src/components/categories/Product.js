import React, { Component } from 'react';
import Axios from 'axios';
import jwt from 'jsonwebtoken';
import Redirect from 'react-router-dom/Redirect'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false,
            user : undefined
        }
    }
    getCookie = (cname) => {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
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
        console.log('click');
        if(this.getCookie('access_token') === '') {
        console.log('Chua dang nhap');
        return this.setState({redirect : true})
        }  else {
        const user = this.decode();
        console.log(user);
        console.log(this.props.id);
        console.log(user._id);
        
        return Axios.post('http://localhost:3000/add-to-cart/'+this.props.id, { "userId" : user._id, "qty" : 1})
        .then(res => {
            console.log(res.status);
        })
        .catch(err => {
            console.log(err.respone);
        })
        }
    }
    render() {
        if(this.state.redirect === true) {
            return <Redirect to='/user/signin' />
        }
        // style={{maxWidth: '262.5px'}}
        return (
            <div className="col-md-3 col-sm-6"  >
                <div className="products">
                    <div className="thumbnail" style={{margin: '5px 0'}}>
                        <Link to={"/detail/"+ this.props.id}>
                            <img src={this.props.img} alt="Product Name" />
                        </Link>
                    </div>
                    <div className="productname">
                        {this.props.name}
                    </div>
                    <h4 className="price">
                        {this.props.price}
                    </h4>
                    <div className="button_group">
                        <button onClick={() => this.addToCart(this.props.id)} className="button add-cart" type="button" >
                        Add To Cart
                        </button>
                        {/* <button className="button compare" type="button">
                        <i className="fa fa-exchange">
                        </i>
                        </button>
                        <button className="button wishlist" type="button">
                        <i className="fa fa-heart-o">
                        </i>
                        </button> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;