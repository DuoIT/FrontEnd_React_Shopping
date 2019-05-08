import React, { Component } from 'react';
import Axios from 'axios';
import Product from './Product';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class ProductCate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [],
            showProduct : [],
            currentPage: 1,
            todosPerPage: 2
        }
        // this.getArrProduct();
        Axios.get('http://localhost:3000/cates/'+this.props.match.params.id)
        .then(doc => {
            this.setState({
                products : doc.data.products
            })
        })
        .catch(err => {
            console.log(err);
        })

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({ currentPage: Number(event.target.id) });
    }

    chiatrang = () => {
        var showProduct = [];
        const chunk = 4;
        for(var i = 0; i< this.state.products.length; i+= chunk) {
            showProduct.push(this.state.products.slice(i, i+chunk));
        }
        return showProduct;
    }

    show = () => {
        const showProduct = this.chiatrang();
        return (
            showProduct.map(products => {
                return products.map(product => {
                    return <Product img={product.img} name={product.name} price={product.price} id={product._id}  />
                })
            })       
        )
    }

    render() {
        console.log(this.state.products);
        const { products, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = products.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            //   <input key={number} type='submit' id={number} onClick={this.handleClick} value={number} />
            <Link key={number} id={number} onClick={this.handleClick} to="#">
            {number}
            </Link>

            // <li
            //   key={number}
            //   id={number}
            //   onClick={this.handleClick}
            // >
            //   {number}
            // </li>
          );
        });


        return (   
            <div>
                <div className="clearfix">
                </div>
                <div className="container_fullwidth">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="category leftbar">
                            <h3 className="title">
                            Categories
                            </h3>
                            <ul>
                            <li>
                                <a href="#">
                                Men
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Women
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Salon
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                New Trend
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Living room
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Bed room
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="branch leftbar">
                            <h3 className="title">
                            Branch
                            </h3>
                            <ul>
                            <li>
                                <a href="#">
                                New
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Sofa
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Salon
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                New Trend
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Living room
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Bed room
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="price-filter leftbar">
                            <h3 className="title">
                            Price
                            </h3>
                            <form className="pricing">
                            <label>
                                $ 
                                <input type="number" />
                            </label>
                            <span className="separate">
                                - 
                            </span>
                            <label>
                                $ 
                                <input type="number" />
                            </label>
                            <input type="submit" defaultValue="Go" />
                            </form>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="clolr-filter leftbar">
                            <h3 className="title">
                            Color
                            </h3>
                            <ul>
                            <li>
                                <a href="#" className="red-bg">
                                light red
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" yellow-bg">
                                yellow"
                                </a>
                            </li>
                            <li>
                                <a href="#" className="black-bg ">
                                black
                                </a>
                            </li>
                            <li>
                                <a href="#" className="pink-bg">
                                pink
                                </a>
                            </li>
                            <li>
                                <a href="#" className="dkpink-bg">
                                dkpink
                                </a>
                            </li>
                            <li>
                                <a href="#" className="chocolate-bg">
                                chocolate
                                </a>
                            </li>
                            <li>
                                <a href="#" className="orange-bg">
                                orange-bg
                                </a>
                            </li>
                            <li>
                                <a href="#" className="off-white-bg">
                                off-white
                                </a>
                            </li>
                            <li>
                                <a href="#" className="extra-lightgreen-bg">
                                extra-lightgreen
                                </a>
                            </li>
                            <li>
                                <a href="#" className="lightgreen-bg">
                                lightgreen
                                </a>
                            </li>
                            <li>
                                <a href="#" className="biscuit-bg">
                                biscuit
                                </a>
                            </li>
                            <li>
                                <a href="#" className="chocolatelight-bg">
                                chocolatelight
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="product-tag leftbar">
                            <h3 className="title">
                            Products 
                            <strong>
                                Tags
                            </strong>
                            </h3>
                            <ul>
                            <li>
                                <a href="#">
                                Lincoln us
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                SDress for Girl
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Corner
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Window
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                PG
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Oscar
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Bath room
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                PSD
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="others leftbar">
                            <h3 className="title">
                            Others
                            </h3>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="others leftbar">
                            <h3 className="title">
                            Others
                            </h3>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="fbl-box leftbar">
                            <h3 className="title">
                            Facebook
                            </h3>
                            <span className="likebutton">
                            <a href="#">
                                <img src="/images/fblike.png" alt />
                            </a>
                            </span>
                            <p>
                            12k people like Flat Shop.
                            </p>
                            <ul>
                            <li>
                                <a href="#">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                </a>
                            </li>
                            </ul>
                            <div className="fbplug">
                            <a href="#">
                                <span>
                                <img src="/images/fbicon.png" alt />
                                </span>
                                Facebook social plugin
                            </a>
                            </div>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="leftbanner">
                            <img src="/images/banner-small-01.png" alt />
                        </div>
                        </div>
                        <div className="col-md-9">
                        <div className="banner">
                            <div className="bannerslide" id="bannerslide">
                            <ul className="slides">
                                <li>
                                <a href="#">
                                    <img src="/images/banner-01.jpg" alt />
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <img src="/images/banner-02.jpg" alt />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="products-grid">                            
                            <div className="clearfix">
                            </div>
                            <div className="row">
                                {/* {this.show()} */}

                                {/* <ul> */}
                                {
                                    currentTodos.map((product,index) =>{
                                        return <Product img={product.img} name={product.name} price={product.price} id={product._id}  />
                                    })
                                }
                                {/* </ul> */}

                            </div>
                            <div className="clearfix">
                            </div>
                            <div className="toolbar">
                                
                                <div className="pager">
                                    <a href="#" className="prev-page">
                                        <i className="fa fa-angle-left"></i>
                                    </a>
                                    {/* <a href="#" className="active">
                                    1
                                    </a> */}
                                    {renderPageNumbers}
                                    
                                    <Link to="#" className="next-page">
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>


                            {/* <ul id="page-numbers">
                                {renderPageNumbers}
                            </ul> */}



                            <div className="clearfix">
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

export default ProductCate;