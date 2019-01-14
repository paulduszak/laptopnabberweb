import React, { Component } from 'react';

import logo from './logo.svg';

import './Navigation.css';

import Search from '../Search/Search';

class Navigation extends Component {

    render() {
        return (
            <header className="shadow pt-2 pb-2">
                <div className="container">
                    <div className="row">
                        <img className="m-2 col-md-3 float-left" src={logo} alt="LaptopNabber" />
                        <Search />
                        {/*<nav className="navbar navbar-expand-lg col-md-2 m-2">
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
                    </div>
                </div>
            </header>
        );
    }

}

export default Navigation;