import React, { Component } from 'react';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product : {},
            qty : 0
        }
        this.setState({product: this.props.product});
        console.log(this.state);
    }
    addToCart = (event) => {
        console.log(this.state);
    }
    isChange = (event) => {
        this.setState({qty : event.target.value});
    }
    render() {        
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
                                    <input type="number" defaultValue="1" onChange={(event) => this.isChange(event)}/>
                                    <span className="qty-up">+</span>
                                    <span className="qty-down">-</span>
                                </div>
                            </div>
                            <button onClick={(event) => this.addToCart(event)} className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
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