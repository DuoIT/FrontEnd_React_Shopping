import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Cate extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            // <div>
                <li><NavLink to={"/cates/"+ this.props.id}>{this.props.name}</NavLink></li>
            // </div>
        );
    }
}

export default Cate;