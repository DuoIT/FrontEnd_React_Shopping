import React, { Component } from 'react';
import Axios from 'axios';
import FormSignUp from './FormSignUp';

class SignUp extends Component {
    render() {
        return (
            <div className="container" style={{marginBottom: '30px'}}>
                <div className="row" style={{maxWidth: '600px', margin: '0 auto'}}>
                    <div className="logo mb-3">
                    <div className="col-md-12 text-center">
                        <h1>Sign Up</h1>
                    </div>                        
                    </div>
                    <FormSignUp />
                </div>
            </div>
        );
    }
}

export default SignUp;