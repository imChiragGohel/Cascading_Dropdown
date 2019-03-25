import React, { Component } from 'react';
import CasCading from './cascading';
import './mainstyles.css';
class Navbar extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light bg-dark justify-content-center">
                    <a className="navbar-brand" href="#">
                        Cascading Dropdown
                    </a>
                </nav>
                <CasCading />
            </React.Fragment>
        );
    }
}

export default Navbar;