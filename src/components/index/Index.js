import React, { Component } from 'react';
import ProductIndex from '../product/ProductIndex';
class Index extends Component {
    render() {
        return (
            <div>
                {/* SECTION */}
                <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                    {/* shop */}
                    <div className="col-md-4 col-xs-6">
                        <div className="shop">
                        <div className="shop-img">
                            <img src="./img/shop01.png" alt="img" />
                        </div>
                        <div className="shop-body">
                            <h3>Laptop<br />Collection</h3>
                            <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                    </div>
                    {/* /shop */}
                    {/* shop */}
                    <div className="col-md-4 col-xs-6">
                        <div className="shop">
                        <div className="shop-img">
                            <img src="./img/shop03.png" alt="img" />
                        </div>
                        <div className="shop-body">
                            <h3>Accessories<br />Collection</h3>
                            <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                    </div>
                    {/* /shop */}
                    {/* shop */}
                    <div className="col-md-4 col-xs-6">
                        <div className="shop">
                        <div className="shop-img">
                            <img src="./img/shop02.png" alt="img" />
                        </div>
                        <div className="shop-body">
                            <h3>Cameras<br />Collection</h3>
                            <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></a>
                        </div>
                        </div>
                    </div>
                    {/* /shop */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
                </div>
                {/* /SECTION */}
                <ProductIndex />
            </div>
        );
    }
}

export default Index;