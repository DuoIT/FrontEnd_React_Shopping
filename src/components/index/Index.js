import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Axios from 'axios';
import ProductHot from './ProductHot';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

class Index extends Component {
    constructor(props) {
      super(props);        
      this.state  = {
          products : [],
      }
      Axios.get('http://localhost:3000/')
      .then(docs => {
        this.setState({
            products: docs.data.products
        });  
      })
      .catch(function (error) {
          console.log(error);
      });
    };
    
    showMessage = () => {      
      toast.success("Add to cart success!", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  
    render() {
      const { products } = this.state;
      return (
        <div> 
          <ToastContainer autoClose={1500} /> 
          <div className="clearfix" />
          <div className="hom-slider" id="home">
            <div className="container" >              
              <div id="sequence" >
                <div className="sequence-prev"><i className="fa fa-angle-left" /></div>
                <div className="sequence-next"><i className="fa fa-angle-right" /></div>
                <ul className="sequence-canvas" >
                  <li className="animate-in">
                    <div className="flat-caption caption1 formLeft delay300 text-center"><span className="suphead">HOT PRODUCTS</span></div>
                    <div className="flat-caption caption2 formLeft delay400 text-center">
                      <h1>SSD</h1>
                    </div>
                    <div className="flat-caption caption3 formLeft delay500 text-center">
                      <p>Plextor 128GB PX-128S3G <br />(M2-2280)</p>
                    </div>
                    <div className="flat-button caption4 formLeft delay600 text-center"><Link className="more" to="/cates/">More Details</Link></div>
                    <div className="flat-image formBottom delay200" data-duration={5} data-bottom="true"><img src="https://www.anphatpc.com.vn/media/product/25394_____c___ng_ssd_plextor_px_128s3g_128gb_m_2_2280_1.png" alt="img product"/></div>
                  </li>
                  <li>
                    <div className="flat-caption caption2 formLeft delay400">
                      <h1>CPU</h1>
                    </div>
                    <div className="flat-caption caption3 formLeft delay500">
                      <h2>CPU I9 - Super Hero</h2>
                    </div>
                    <div className="flat-button caption5 formLeft delay600"><Link className="more" to="/cates/5cb33fc2ee6c2e075864b2ec">More Details</Link></div>
                    <div className="flat-image formBottom delay200" data-bottom="true"><img src="https://www.hanoicomputer.vn/media/lib/38319_Intel-i9.png" alt="img product"/></div>
                  </li>                  
                </ul>
              </div>
            </div>
            <div className="promotion-banner">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <div className="promo-box" style={{width: '360px', height: '120.64px'}}>
                    <img src="https://www.anphatpc.com.vn/media/product/25394_____c___ng_ssd_plextor_px_128s3g_128gb_m_2_2280_1.png" alt="img product"/>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <div className="promo-box"><img src="/images/promotion-02.png" alt="img product"/></div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <div className="promo-box"><img src="/images/promotion-03.png" alt="img product"/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="container_fullwidth">
            <div className="container">
              <div className="hot-products">
                {/* <ToastContainer
                    ref={ref => container = ref}
                    className="toast-top-right"
                /> */}
                <h3 className="title"><strong>Hot</strong> Products</h3>  
                             
                {/* <div className="control"><a id="prev_hot" className="prev" href="#" style={{display: 'block'}}>&lt;</a><a id="next_hot" className="next" href="#" style={{display: 'block'}}>&gt;</a></div> */}

                {/* <div className="control"><a id="prev_hot" className="prev" href="#">&lt;</a><a id="next_hot" className="next" href="#">&gt;</a></div> */}
                {/* id="hot" */}
                <ul>
                  {/* {show} */}
                  {
                    products.map(product => {
                      return <li>
                        <ProductHot
                          showMessage = {() => this.showMessage()}
                          img={product.img} 
                          name={product.name} 
                          price={product.price} 
                          id={product._id} />                    
                      </li>
                    })
                  }
                </ul>
              </div>
              <div className="clearfix" />
              
              <div className="our-brand">
                <h3 className="title"><strong>Our </strong> Brands</h3>
                <div className="control"><a id="prev_brand" className="prev" href="#">&lt;</a><a id="next_brand" className="next" href="#">&gt;</a></div>
                <ul id="braldLogo">
                  <li>
                    <ul className="brand_item">
                      <li>
                        <a href="#">
                          <div className="brand-logo"><img src="/images/envato.png" alt="img product"/></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="brand-logo"><img src="/images/themeforest.png" alt="img product"/></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="brand-logo"><img src="/images/photodune.png" alt="img product"/></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="brand-logo"><img src="/images/activeden.png" alt="img product"/></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="brand-logo"><img src="/images/envato.png" alt="img product"/></div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="brand_item">
                      <li>
                        <a href="#">
                          <div className="brand-logo"><img src="/images/envato.png" alt="img product"/></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="brand-logo"><img src="/images/themeforest.png" alt="img product"/></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="brand-logo"><img src="/images/photodune.png" alt="img product"/></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="brand-logo"><img src="/images/activeden.png" alt="img product"/></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="brand-logo"><img src="/images/envato.png" alt="img product"/></div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>        
      );
    }
}

export default Index;