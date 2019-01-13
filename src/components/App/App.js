import React, { Component } from 'react';
import './App.css';

import LaptopList from '../LaptopList/LaptopList';
import Navigation from '../Navigation/Navigation';
import FilterBar from '../FilterBar/FilterBar';

class App extends Component {

    render() {
        return (
            <div className="container">
                <Navigation />

                <div className="row">
                    <FilterBar />
                    <LaptopList />
                </div>
            </div>
        );
    }
}

export default App;
