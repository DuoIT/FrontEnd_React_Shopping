import React, { Component } from 'react';
import Axios from 'axios';

class AddToCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        }
        // this.setState({ id : this.props.match.params.id})
        this.postProduct = this.postProduct.bind(this);
    }

    postProduct () {
        Axios.post('http://localhost:3000/add-to-cart/'+this.state.id, { "userId" : this.state.id})
        .then(res => {
            console.log(res.status);
        })
        .catch(err => {
            console.log(err.respone);
        })
    }
    
    render() {
        // console.log(this.state.id);
        return (
            <div>
                
            </div>
        );
    }
}

export default AddToCard;