import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navigation = {};
    }
    render() {
        this.navigation = {
            navigation: this.props.navigation
        }
        return (
            <div className="navbar-parent-container">
                <div className="nav-container">
                    <header>
                        <a href="/" className="logo">

                        </a>
                    </header>
                </div>
            </div>
        )
    }
}
