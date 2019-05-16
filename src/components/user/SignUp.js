import React, { Component } from 'react';
import FormSignUp from './FormSignUp';

class SignUp extends Component {
    render() {
        return (
            <div className="container" style={{marginTop: '30px', fontFamily: 'sans-serif', fontSize: '18px', padding: '20px'}}>
                <div className="row" style={{maxWidth: '600px', margin: '0 auto'}}>
                    {/* <div className="logo mb-3"> */}
                        <div className="col-md-12" style={{marginBottom: '30px'}}>
                            <h1>Sign Up</h1>
                        </div>                        
                    {/* </div> */}
                    <FormSignUp />
                </div>
            </div>
        );
    }
}

export default SignUp;