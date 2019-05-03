import React, { Component } from 'react';
import Axios from 'axios';
import FormSignIn from './FormSignIn';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : undefined
        }
    }
    getJWT = () => {
        return localStorage.getItem('JWTtoken');
    }

    // componentDidMount() {
    //     const jwt = this.getJWT();
    //     if(!jwt) {

    //     }
    //     Axios.get('http://localhost:3000/user/signin', { headers : { Authorization: `Bearer ${jwt}` }}
    //     .then(res => {
    //         res.setSate({
    //             user : res.data
    //         })
    //     })
    //     .catch(err => {
    //         localStorage.removeItem('JWTtoken');
    //     })
    //     )
    // }

    render() {
        return (
            <div className="container" style={{marginBottom: '30px'}}>
                <div className="row" style={{maxWidth: '600px', margin: '0 auto'}}>
                    <div className="logo mb-3">
                        <div className="col-md-12 text-center">
                            <h1>Sign In</h1>
                        </div>                        
                    </div>
                    <FormSignIn /> 
                </div>
            </div>
        );
    }
}

export default SignIn;