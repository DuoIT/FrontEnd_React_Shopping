import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="product">
                    <div className="product-img">
                        <img src={this.props.img} alt="img" />
                    </div>
                    <div className="product-body">
                        <p className="product-category">{this.props.cate}</p>
                        <h3 className="product-name"><a href={"/detail/" + this.props.id}>{this.props.name}</a></h3>
                        <h4 className="product-price">{this.props.price} <del className="product-old-price">$990.00</del></h4>
                        <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                    </div>
                    <div className="add-to-cart">
                        <a href={"/add-to-cart/" + this.props.id}>
                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;