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
            todosPerPage: 20
        }
        // this.getArrProduct();
        Axios.get('http://localhost:3000/cates/'+this.props.match.params.id)
        .then(doc => {
            this.setState({
                products : doc.data.products,
                showProduct : doc.data.products
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

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({[name] : value});
    }

    render() {
        console.log(this.state.loaiSort);
        console.log(this.state.kieuSort);
        
        console.log(this.state.showProduct);
        const { showProduct, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = showProduct.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(showProduct.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <Link key={number} id={number} onClick={this.handleClick} to="#">
            {number}
            </Link>
          );
        });


        return (   
            <div>
                <div className="clearfix">
                </div>
                <div className="container_fullwidth">
                    <div className="container">
                    <div className="row">
                        <div className="container_fullwidth">                        
                            <div className="banner">
                            <center style={{marginBottom: '20px'}}>
                                <div className="bannerslide" id="bannerslide" >
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
                            </center>
                                
                            </div>
                            <div className="clearfix">
                            </div>
                            
                                                    
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
                            <div class="sorter bottom">                    
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