import React, { Component } from 'react';

import logo from './logo.svg';

import './Navigation.css';

import Search from '../Search/Search';

class Navigation extends Component {

    render() {
        return (
            <header className="row shadow p-3">
                <a className="m-2" href="#home"><img className="brand" src={logo} alt="LaptopNabber" /></a>
                <Search />
                {/*<nav className="navbar navbar-expand-lg m-2">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Link<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>*/}
            </header>
        );
    }

}

export default Navigation;