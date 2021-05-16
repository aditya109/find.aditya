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
                <ul id="horizontal-nav-list">
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
                <ul id="horizontal-social-headers-list">
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
            <div className="nav-container">
                <div className="nav-list">
                    <a href="/" className="brand-logo">
                        {this.profile.fullName}
                    </a>
                    <nav>
                        {
                            this.getNavigationItems(this.profile.navigation.nav_links)
                        }
                    </nav>
                </div>

                <div className="social-header">
                    {
                        this.getSocialHeaders(this.profile.assets.socialHeaders.logos)
                    }
                </div>
            </div>
        )
    }
}
