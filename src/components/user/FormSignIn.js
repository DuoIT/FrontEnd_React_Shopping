import React, { Component } from 'react';
import Axios from 'axios';
import Redirect from 'react-router-dom/Redirect'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


class FormSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDirect : false,
            username: '',
            password: '',
            status: 0,
            message: []
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name] : value});
    }
    postAuth = () => {
        Axios.post('http://localhost:3000/user/signin', {
            "username": this.state.username,
            "password": this.state.password
        })
        .then(res => {
            this.setState({
                status: res.status,
                message: res.data.access_token
            })
            document.cookie = 'access_token =' + res.data.access_token + "; max-age=10800; path=/";
            return window.location.reload();
        })
        .catch(err => {
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
    getCookie = (cname) => {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }

    render() {
        if(this.getCookie('access_token') !== '' ) {
            return <Redirect to="/" />
        }
        return (
            <div>        
                <ToastContainer/> 
                <form action="/user/signin" method="POST" name="login">
                    <div className="form-group">
                        <label htmlFor>Username</label>
                        <input onChange={(event) => this.isChange(event)} type="text" name="username" className="form-control" id="username" placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input onChange={(event) => this.isChange(event)} type="password" name="password" id="password" className="form-control" placeholder="Enter Password" />
                    </div>
                    <div className="col-md-12 text-center ">
                        <button style={{backgroundColor: 'blue'}} onClick={(event) => this.isSubmitForm(event)} type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Sign In</button>
                    </div>
                    <div className="col-md-12 ">
                        <div className="login-or">
                        <hr className="hr-or" />
                        <span className="span-or">or</span>
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <p className="text-center">
                        <a href="" className="google btn mybtn btn btn-outline-primary"><i className="fa fa-google-plus">
                            </i> Signup using Google
                        </a>
                        </p>
                    </div>
                    <div className="form-group">
                        <p className="text-center">Don't have account? <Link to="/user/signup" id="signup">Sign up here</Link></p>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormSignIn;