import React, { Component } from 'react';

class ProductCart extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td className="product-thumbnail">
                        <img style={{maxHeight: '150px'}} src={this.props.img} alt="Image" className="img-fluid" />
                    </td>
                    <td className="product-name" >
                        <h2 className="h5 text-black">{this.props.name}</h2>
                    </td>
                    <td className="money"></td>
                    <td>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-primary js-btn-minus" type="button">−</button>
                        </div>
                        <input type="text" className="form-control text-center" defaultValue={this.props.total} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                        </div>
                        </div>
                    </td>
                    <td className="money">{this.props.price}</td>
                    <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                </tr>
            </div>
        );
    }
}

export default ProductCart;