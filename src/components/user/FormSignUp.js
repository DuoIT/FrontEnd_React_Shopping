import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

class FormSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            re_pass: '',
            email: '',
            name: '',
            phone: '',
            status: 0,
            message: []
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name] : value});
    }
    postAuth = async () => {
        await Axios.post('http://localhost:3000/user/signup', {
            "username": this.state.username,
            "password": this.state.password,
            "re_pass": this.state.re_pass,
            "email": this.state.email,
            "name": this.state.name,
            "phone": this.state.phone
        })
        .then(res => {
            this.setState({
                status: res.status,
                message: res.data.message
            });
            toast.success('Dang ky thanh cong, hay dang nhap', {
                position: toast.POSITION.TOP_RIGHT
            });
            
        })
        .catch(err => {
            console.log(err.response.data);
            this.setState({
                status : err.response.status,
                message : err.response.data.message
            });
            this.state.message.map(mess => {
                toast.error(mess, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
        })
    }
    isSubmitForm = (event) => {
        event.preventDefault();
        this.setState({message: []});        
        this.postAuth();
    }

    render() {               
        return (
            <div>                      
                <ToastContainer/>          
                <form style={{fontSize: '15px'}} action="/user/signup" method="POST" name="signup">                
                    <div className="form-group">
                        <label htmlFor>Username</label>
                        <input onChange={(event) => this.isChange(event)} type="text" name="username" className="form-control" id="username" placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input onChange={(event) => this.isChange(event)} type="password" name="password" id="password" className="form-control" placeholder="Enter Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Confirm Password</label>
                        <input onChange={(event) => this.isChange(event)} type="password" name="re_pass" id="re_pass" className="form-control" placeholder="Enter Confirm Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Email</label>
                        <input onChange={(event) => this.isChange(event)} type="email" name="email" className="form-control" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Full Name</label>
                        <input onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control" id="name" placeholder="Enter Full Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Phone Number</label>
                        <input onChange={(event) => this.isChange(event)} type="text" name="phone" className="form-control" id="phone" placeholder="Enter Phone Number" />
                    </div>
                    <div className="col-md-12 text-center mb-3">
                        <button style={{backgroundColor: 'green'}} onClick={(event) => this.isSubmitForm(event)} type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
                    </div>
                    <div className="col-md-12 " style={{marginTop: '10px'}}>
                        <div className="form-group">
                            <p className="text-center"><Link to="/user/signin" id="signin">Already have an account?</Link></p>
                        </div>
                    </div>
                </form>                
            </div>
        );
    }
}

export default FormSignUp;