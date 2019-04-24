import React, { Component } from 'react';
import Product from './Product';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class ProductIndex extends Component {
    constructor(props) {
        super(props);        
        this.state  = {
            cates: [],
            products : [],
            viewProduct : []
        }
        Axios.get('http://localhost:3000/')
        .then(cate => {
            this.setState({
                cates : cate.data.cates,
                products: cate.data.products,
                viewProduct: cate.data.products
            });    
        })
        .catch(function (error) {
            console.log(error);
        });
        
    };    

    render() { 
        
        const showProduct = this.state.viewProduct.map(product => {
            return (
                <Product 
                    name={product.name} 
                    img={product.img}
                    id = {product.id}
                    price = {product.price}
                    cate = {product.cate}
                />)
        });
        
        this.filterProduct = (e) => {
            const filt = this.state.products.filter(prod => {
                return prod.cate === e;
            });
            this.setState({viewProduct: filt});
        }
        this.showALL = (e) => {
            const all = this.state.products;
            this.setState({viewProduct: all});
        }

        return (
                <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                    {/* section title */}
                    <div className="col-md-12">
                        <div className="section-title">
                        <h3 className="title">New Products</h3>
                        <div className="section-nav">
                            <ul className="section-tab-nav tab-nav">
                                <li className="active"><a data-toggle="tab" onClick={() => this.showALL() } href="#tab1">ALL</a></li>
                                {
                                    this.state.cates.map(cate => (
                                        <li>
                                            <NavLink>
                                                <a data-toggle="tab" onClick={() => this.filterProduct(cate.name) } href="#tab1">{cate.name}</a>
                                            </NavLink>                                            
                                        </li>
                                    ))
                                }                                
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* /section title */}
                    {/* Products tab & slick */}
                    <div className="col-md-12">
                        <div className="row">
                        <div className="products-tabs">
                            {/* tab */}
                            <div id="tab1" className="tab-pane active">
                            <div className="products-slick" data-nav="#slick-nav-1">
                                {/* product */}
                                    {showProduct}
                                {/* /product */}
                            </div>
                            <div id="slick-nav-1" className="products-slick-nav" />
                            </div>
                            {/* /tab */}
                        </div>
                        </div>
                    </div>
                    {/* Products tab & slick */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
        );
    }
}

export default ProductIndex;