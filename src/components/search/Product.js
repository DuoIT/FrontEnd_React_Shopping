import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <li className="products">
                    <div className="offer">
                    New
                    </div>
                    <div className="thumbnail">
                        <img src={this.props.img} alt="Product Name" />
                    </div>
                    <div className="product-list-description">
                        <div className="productname">
                        {this.props.name}
                        </div>
                        <p>
                            {this.props.des}
                        </p>
                        <div className="list_bottom">
                            <div className="price">
                                <span className="new_price">
                                    450.00
                                    <sup>
                                    $
                                    </sup>
                                </span>
                                <span className="old_price">
                                    450.00
                                    <sup>
                                    $
                                    </sup>
                                </span>
                            </div>
                            <div className="button_group">
                                <button className="button">
                                    Add To Cart
                                </button>
                                <button className="button compare">
                                    <i className="fa fa-exchange">
                                    </i>
                                </button>
                                <button className="button favorite">
                                    <i className="fa fa-heart-o">
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default Product;