import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.profile = {}
        this.getNavigationItems = this.getNavigationItems.bind(this);
        this.getSocialHeaders = this.getSocialHeaders.bind(this);
    }

    getNavigationItems(navLinks) {
        return (
            <React.Fragment>
                <ul>
                    {
                        navLinks.map(navLink => (
                            <li key={navLink}>
                                <a href="/">{navLink}
                                </a>
                            </li>)
                        )
                    }
                </ul>
            </React.Fragment>
        );
    }

    getSocialHeaders(socialHeaders) {
        return (
            <React.Fragment>
                <ul>
                    {
                        socialHeaders.map(socialHeader => (
                            <li key={socialHeader.name}>
                                <a href="/">
                                    <img src={socialHeader.icon.default} alt={socialHeader.name}></img>
                                </a>
                            </li>)
                        )
                    }
                </ul>
            </React.Fragment>
        )
    }

    render() {
        this.profile = this.props.profile;
        return (
            // Navigation
            <div className="navbar-parent-container">
                <div className="nav-container">
                    <header>
                        <a href="/" className="logo">
                            {this.profile.fullName}
                        </a>
                        <nav>
                            {
                                this.getNavigationItems(this.profile.navigation.nav_links)
                            }
                        </nav>
                    </header>
                    <div className="social-header">
                        {
                            this.getSocialHeaders(this.profile.assets.socialHeaders.logos)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
