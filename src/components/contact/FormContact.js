import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect'
import Axios from 'axios';

class FormContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDirect : false,
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }
    submitForm (event) {
        event.preventDefault();
        this.setState({
            isDirect : true
        })
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
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        if(this.state.isDirect === true) {
            this.getContact();
            return <Redirect to="/" />
        }
        return (
            <div>
                <div className="site-section">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <h2 className="h3 mb-3 text-black pull-left">Get In Touch</h2>
                    </div>
                    <div className="col-md-7">
                        <form action="/contact" method="POST">
                       
                        <div className="alert alert-danger" role="alert">
                       
                            <p><strong>Warning! </strong> abc </p>
                         
                        </div>          
                        <div className="p-3 p-lg-5 border">
                            <div className="form-group row">
                            <div className="col-md-12">
                                <label htmlFor="c_fname" className="text-black pull-left">Full Name <span className="text-danger">*</span></label>
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" id="name" name="name" placeholder="Enter Full Name" />
                            </div>
                            </div>
                            <div className="form-group row">
                            <div className="col-md-12">
                                <label htmlFor="c_email" className="text-black pull-left">Email <span className="text-danger">*</span></label>
                                <input onChange={(event) => this.isChange(event)} type="email" className="form-control" id="email" name="email" placeholder="Enter Email" />
                            </div>
                            </div>
                            <div className="form-group row">
                            <div className="col-md-12">
                                <label htmlFor="c_subject" className="text-black pull-left">Subject<span className="text-danger">*</span> </label>
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
                            </div>
                            </div>
                            <div className="form-group row">
                            <div className="col-md-12">
                                <label htmlFor="c_message" className="text-black pull-left">Message<span className="text-danger">*</span> </label>
                                <textarea onChange={(event) => this.isChange(event)} name="message" id="message" cols={30} rows={7} className="form-control" defaultValue={""} />
                            </div>
                            </div>
                            <div className="form-group row">
                            <div className="col-lg-12">
                                <input type="submit" onClick={(event) => this.submitForm(event)} className="btn btn-primary btn-lg btn-block" defaultValue="Send Message" />
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-5 ml-auto">
                        <div className="p-4 border mb-3">
                        <span className="d-block text-primary h6 text-uppercase">New York</span>
                        <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className="p-4 border mb-3">
                        <span className="d-block text-primary h6 text-uppercase">London</span>
                        <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className="p-4 border mb-3">
                        <span className="d-block text-primary h6 text-uppercase">Canada</span>
                        <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default FormContact;