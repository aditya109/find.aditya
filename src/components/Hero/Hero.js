import Navbar from '../Navbar/Navbar';
import React, { Component } from 'react';
import './Hero.css';

export default class Hero extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.profile = {};
    }
    render() {
        this.profile = {
            fullName: this.props.fullName,
            shortName: this.props.shortName,
            navigation: this.props.navigation,
            hero: this.props.hero
        };
        return (
            <>
                <Navbar
                    navigation={this.profile.navigation}
                />
            </>
        )
    }
}
