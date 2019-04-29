import React, { Component } from 'react';
import ProductIndex from './product/ProductIndex';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
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
                            <Link to="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></Link>
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
                            <Link to="cates/" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></Link>
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
                {/* SECTION */}
<div className="section">
  {/* container */}
  <div className="container">
    {/* row */}
    <div className="row">
      <div className="col-md-4 col-xs-6">
        <div className="section-title">
          <h4 className="title">Top selling</h4>
          <div className="section-nav">
            <div id="slick-nav-3" className="products-slick-nav" />
          </div>
        </div>
        <div className="products-widget-slick" data-nav="#slick-nav-3">
          <div>
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product07.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* /product widget */}
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product08.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* /product widget */}
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product09.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* product widget */}
          </div>
          <div>
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product01.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* /product widget */}
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product02.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* /product widget */}
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product03.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* product widget */}
          </div>
        </div>
      </div>
      <div className="col-md-4 col-xs-6">
        <div className="section-title">
          <h4 className="title">Top selling</h4>
          <div className="section-nav">
            <div id="slick-nav-4" className="products-slick-nav" />
          </div>
        </div>
        <div className="products-widget-slick" data-nav="#slick-nav-4">
          <div>
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product04.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* /product widget */}
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product05.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* /product widget */}
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product06.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* product widget */}
          </div>
          <div>
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product07.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* /product widget */}
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product08.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* /product widget */}
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product09.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* product widget */}
          </div>
        </div>
      </div>
      <div className="clearfix visible-sm visible-xs" />
      <div className="col-md-4 col-xs-6">
        <div className="section-title">
          <h4 className="title">Top selling</h4>
          <div className="section-nav">
            <div id="slick-nav-5" className="products-slick-nav" />
          </div>
        </div>
        <div className="products-widget-slick" data-nav="#slick-nav-5">
          <div>
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product01.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* /product widget */}
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product02.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* /product widget */}
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product03.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* product widget */}
          </div>
          <div>
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product04.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* /product widget */}
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product05.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* /product widget */}
            {/* product widget */}
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/product06.png" alt />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            {/* product widget */}
          </div>
        </div>
      </div>
    </div>
    {/* /row */}
  </div>
  {/* /container */}
</div>
{/* /SECTION */}

            </div>
        );
    }
}

export default Index;