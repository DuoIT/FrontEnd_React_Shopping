import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect'
import Axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            renderMess : false,
            status : 0,
            err : []
        }
    }
    submitForm (event) {
        event.preventDefault();
        this.getContact();
    }
    isChange (event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({[name] : value});
    }
    getContact = () => {
        var contact = {
            "name" : this.state.name,
            "email" : this.state.email,
            "subject" : this.state.subject,
            "message" : this.state.message
        }
        Axios.post('http://localhost:3000/contact', contact)
        .then(res => {
            this.setState({
                status : 200,
                renderMess : true
            })
        })
        .catch(error => {
            this.setState({
                status : 404,
                err: error.response.data.err
            })
            console.log(error.response.data);
        })
    }

    render() {
        var mess = undefined;
        if(this.state.renderMess === true && this.state.status === 200) {
            mess = (
                <div class="alert alert-success" role="alert">
                    Send Message Success!
                </div>
            )
        } else if(this.state.status === 404) {
            mess = (
                <div class="alert alert-danger" role="alert">
                    {/* {
                        this.state.err.map(err => {
                            return <p>{err}</p>;
                        })
                    } */}
                    {this.state.err};
                </div>
            )
        }
        return (
            <div>
                <div className="clearfix">
                </div>
                <div className="container_fullwidth">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h5 className="title contact-title">
                            Contact Us
                        </h5>
                        <div className="clearfix">
                        </div>
                        <div className="map">
                            <iframe width={600} height={350} src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Vietnam&aq=&sll=15.8556735,108.1071854/16.3274784,108.8142173/@15.855699,108.1072135,16z/data=!4m2!4m1!3e0?hl=en&output=embed">
                            </iframe>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <div className="contact-infoormation">
                                <h5>
                                Contact Info
                                </h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur ad ipis cing elit. Suspendisse at sapien mascsa. Lorem ipsum dolor sit amet, consectetur se adipiscing elit. Sed fermentum, sapien scele risque volutp at tempor, lacus est sodales massa, a hendrerit dolor slase turpis non mi. 
                                </p>
                                <ul>
                                <li>
                                    <span className="icon">
                                    <img src="images/message.png" alt />
                                    </span>
                                    <p>
                                    contact@michaeldesign.me
                                    <br />
                                    support@michaeldesign.me
                                    </p>
                                </li>
                                <li>
                                    <span className="icon">
                                    <img src="images/phone.png" alt />
                                    </span>
                                    <p>
                                    084. 93 668 2236
                                    <br />
                                    084. 93 668 6789
                                    </p>
                                </li>
                                <li>
                                    <span className="icon">
                                    <img src="images/address.png" alt />
                                    </span>
                                    <p>
                                    No.86 ChuaBoc St, DongDa Dt,
                                    <br />
                                    Hanoi, Vietnam
                                    </p>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-md-8">
                            <div className="ContactForm">
                                <h5>
                                Contact Form
                                </h5>
                                {mess}
                                <form>
                                <div className="row">
                                    <div className="col-md-6">
                                    <label>
                                        Your Name 
                                        <strong className="red">
                                        *
                                        </strong>
                                    </label>
                                    <input onChange={(event) => this.isChange(event)} className="inputfild" type="text" name='name' />
                                    </div>
                                    <div className="col-md-6">
                                    <label>
                                        Your Email
                                        <strong className="red">
                                        *
                                        </strong>
                                    </label>
                                    <input onChange={(event) => this.isChange(event)} className="inputfild" type="email" name='email' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>
                                            Subject
                                            <strong className="red">
                                            *
                                            </strong>
                                        </label>
                                        <input onChange={(event) => this.isChange(event)} className="inputfild" type="text" name='subject' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>
                                        Your Message 
                                        <strong className="red">
                                        *
                                        </strong>
                                    </label>
                                    <textarea onChange={(event) => this.isChange(event)} className="inputfild" rows={8} name='message' defaultValue={"                          "} />
                                    </div>
                                </div>
                                <button className="pull-right" onClick={(event) => this.submitForm(event)}>
                                    Send Message
                                </button>
                                </form>
                            </div>
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
                                    <img src="images/envato.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/themeforest.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/photodune.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/activeden.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/envato.png" alt />
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
                                    <img src="images/envato.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/themeforest.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/photodune.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/activeden.png" alt />
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <div className="brand-logo">
                                    <img src="images/envato.png" alt />
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

export default Contact;