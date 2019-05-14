import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect'
import Axios from 'axios';

class FormSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDirect : false,
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
    postAuth = () => {
        this.setState({
            status: 0
        })
        Axios.post('http://localhost:3000/user/signup', {
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
            })
            this.setState({
                isDirect : true
            })
            
        })
        .catch(err => {
            this.setState({
                status : err.response.status,
                message : err.response.data.message
            });
        })
    }
    isSubmitForm = (event) => {
        event.preventDefault();
        this.setState({message: []});
        
        this.postAuth();
         
    }

    render() {        
        // if(this.state.isDirect === true)
        //     return <Redirect to="/user/signin" />   
        var message = undefined;
        if(this.state.status === 404) {
            message = (
                <div class="col-sm-12 col-md-12">
                    <div class="alert-message alert-message-danger"  style={{fontSize: '15px'}}>
                        <h4>Co loi: </h4>
                        {
                            this.state.message.map(mess => {
                                return <p>  {mess}  </p>;
                            })
                        }
                    </div>
                </div>        
            )
        }  else if(this.state.status === 200) {
            message = (
                <div class="col-sm-12 col-md-12">
                    <div class="alert-message alert-message-success"  style={{fontSize: '15px'}}>
                        {this.state.message}
                    </div>
                </div> 
            )
            
        }

        return (
            <div>      
                
                {message}          
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
                            <p className="text-center"><a href="/user/signin" id="signin">Already have an account?</a></p>
                        </div>
                    </div>
                </form>                
            </div>
        );
    }
}

export default FormSignUp;