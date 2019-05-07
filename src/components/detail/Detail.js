import React, { Component } from 'react';
import Axios from 'axios';
import jwt from 'jsonwebtoken';
import Redirect from 'react-router-dom/Redirect'


var URL = 'http://localhost:3000/detail/';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product : {},
            redirect : false,
            qty : '1'
        }
        Axios.get(URL+this.props.match.params.id)
        .then(product => {
            this.setState({product: product.data.product}); 
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    isChange = (event) => {
        this.setState({qty : event.target.value});
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
            return this.setState({redirect : true})
        }  else {
            const user = this.decode();
            Axios.post('http://localhost:3000/add-to-cart/'+this.state.product._id, { "userId" : user._id, "qty" : parseInt(this.state.qty)})
            .then(res => {
                console.log(res.status);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    render() {
        if(this.state.redirect === true) {
            return (
                <Redirect to='/user/signin' />
            )
        }
        return (
            <div>
                <div className="clearfix">
                </div>
                <div className="container_fullwidth">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="products-details">
                                <div className="preview_image">
                                    <div className="preview-small">
                                        <img id="zoom_03" src={this.state.product.img} alt="img product" />
                                    </div>
                                    <div className="thum-image">
                                        <ul id="gallery_01" className="prev-thum">
                                        <li>
                                            <a href="#" data-image="images/products/medium/products-01.jpg" data-zoom-image="images/products/Large/products-01.jpg">
                                            <img src="/images/products/thum/products-01.png" alt />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-image="images/products/medium/products-02.jpg" data-zoom-image="images/products/Large/products-02.jpg">
                                            <img src="/images/products/thum/products-02.png" alt />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-image="images/products/medium/products-03.jpg" data-zoom-image="images/products/Large/products-03.jpg">
                                            <img src="/images/products/thum/products-03.png" alt />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-image="images/products/medium/products-04.jpg" data-zoom-image="images/products/Large/products-04.jpg">
                                            <img src="/images/products/thum/products-04.png" alt />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-image="images/products/medium/products-05.jpg" data-zoom-image="images/products/Large/products-05.jpg">
                                            <img src="/images/products/thum/products-05.png" alt />
                                            </a>
                                        </li>
                                        </ul>
                                        <a className="control-left" id="thum-prev" href="javascript:void(0);">
                                        <i className="fa fa-chevron-left">
                                        </i>
                                        </a>
                                        <a className="control-right" id="thum-next" href="javascript:void(0);">
                                        <i className="fa fa-chevron-right">
                                        </i>
                                        </a>
                                    </div>
                                </div>
                            <div className="products-description">
                                <h5 className="name">
                                    {this.state.product.name}
                                </h5>                            
                                <p>
                                    Availability: 
                                    <span className=" light-red">
                                    In Stock
                                    </span>
                                </p>
                                <p>{this.state.product.des}</p>
                            <hr className="border" />
                            <div className="price">
                                Price : 
                                <span className="new_price">
                                {this.state.product.price}
                                <sup>
                                    ₫
                                </sup>
                                </span>
                                <span className="old_price">
                                {this.state.product.price*1.3}
                                <sup>
                                    ₫
                                </sup>
                                </span>
                            </div>
                            <hr className="border" />
                            <div className="wided">
                                <div className="qty">
                                Qty : &nbsp;&nbsp;
                                    <input defaultValue="1" type="number" onChange={(event) => this.isChange(event)} />
                                </div>
                                <div className="button_group">
                                <button className="button" onClick={(event) => this.addToCart(this.props.id)}>
                                    Add To Cart
                                </button>
                                </div>
                            </div>
                            <div className="clearfix">
                            </div>
                            <hr className="border" />
                            {/* <img src="/images/share.png" alt className="pull-right" /> */}
                            </div>
                        </div>
                        <div className="clearfix">
                        </div>
                        
                        <div className="clearfix">
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
                                    <img src="/images/envato.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="/images/themeforest.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="/images/photodune.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="/images/activeden.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="/images/envato.png" alt />
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
                                    <img src="/images/envato.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="/images/themeforest.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="/images/photodune.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="/images/activeden.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="/images/envato.png" alt />
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

export default Detail;