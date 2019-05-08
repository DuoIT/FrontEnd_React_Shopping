import React, { Component } from 'react';
import Axios from 'axios';
import Product from './Product';

class SearchProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q : this.props.match.params.q,
            products : []
        }
        this.getSearch();
    }
    
    getSearch = () => {
        return Axios.get('http://localhost:3000/search?q='+this.state.q)
        .then(res => {
            return this.setState({products : res.data.products});
        })
        .catch(err => {
            return console.log(err);
        })
    }
    
    render() {
        console.log(this.state.products);
        var product;
        if(this.state.products.length === 0) {
            product = <h2>Khong tim thay ket qua </h2>
        } else{
            product = this.state.products.map(product => {
                return <Product
                    img = {product.img}
                    name = {product.name}
                    des = {product.des}
                    price = {product.price}
                    id = {product._id}
                />
            })
        }
        return (
            <div>
                <div className="clearfix">
                </div>
                <div className="container_fullwidth">
                    <div className="container">
                    <div className="row">
                        
                        <div className="col-md-9">
                            <div className="banner">
                                <div className="bannerslide" id="bannerslide">
                                    <ul className="slides">
                                        <li>
                                        <a href="#">
                                            <img src="/images/banner-01.jpg" alt="product" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <img src="/images/banner-02.jpg" alt="product" />
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        <div className="clearfix">
                        </div>
                        <div className="products-list">
                            
                            <ul className="products-listItem">
                            
                                {product}
                            
                            </ul>
                            <div className="toolbar">
                            <div className="sorter bottom">
                                <div className="view-mode">
                                <a href="#" className="list active">
                                    List
                                </a>
                                <a href="productgird.html" className="grid">
                                    Grid
                                </a>
                                </div>
                                <div className="sort-by">
                                Sort by : 
                                <select name>
                                    <option value="Default" selected>
                                    Default
                                    </option>
                                    <option value="Name">
                                    Name
                                    </option>
                                    <option value="Price">
                                    Price
                                    </option>
                                </select>
                                </div>
                                <div className="limiter">
                                Show : 
                                <select name>
                                    <option value={3} selected>
                                    3
                                    </option>
                                    <option value={6}>
                                    6
                                    </option>
                                    <option value={9}>
                                    9
                                    </option>
                                </select>
                                </div>
                            </div>
                            <div className="pager">
                                <a href="#" className="prev-page">
                                <i className="fa fa-angle-left">
                                </i>
                                </a>
                                <a href="#" className="active">
                                1
                                </a>
                                <a href="#">
                                2
                                </a>
                                <a href="#">
                                3
                                </a>
                                <a href="#" className="next-page">
                                <i className="fa fa-angle-right">
                                </i>
                                </a>
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

export default SearchProduct;