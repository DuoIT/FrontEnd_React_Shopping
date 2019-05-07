import React, { Component } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class ProductCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty : this.props.qty
        }
    }
    
    removeProduct = (e) => {
        // console.log(this.props.id);
        Axios.delete('http://localhost:3000/cart/remove/'+this.props.cartId)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        this.props.handleButtonDeleteClick();
    }

    isChange = (event) => {
        this.setState({qty : event.target.value});
        Axios.post('http://localhost:3000/cart/'+this.props.productId, {userId: this.props.userId , qty : this.state.qty})
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <tr>
                    <td style={{width : '15%', minWidth: '100px'}}>
                        <img src={this.props.img} alt="img product" />
                    </td>
                    <td style={{width : '45%'}}>
                        <div className="shop-details">
                            <div className="productname">
                            {this.props.name}
                            </div>
                        </div>
                    </td>
                    <td style={{width : '10%'}}>
                        <h5>
                            {this.props.price}
                        </h5>
                    </td>
                    <td style={{width : '10%'}}>
                        <input onChange={(event) => this.isChange(event)} style={{width : '90%', minWidth: '60px'}} type="number" defaultValue={this.props.qty} />
                    </td>
                    <td style={{width : '10%'}}>
                        <h5>
                            <strong className="red">
                                {this.props.price* this.props.qty}
                            </strong>
                        </h5>
                    </td>
                    <td style={{width : '10%'}}>
                        <Link to="/cart" onClick={(e) => this.removeProduct(e)} >
                            <img src="images/remove.png" alt="img delete" />
                        </Link>
                    </td>
                </tr>
            </div>
        );
    }
}

export default ProductCart;