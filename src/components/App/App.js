import React, { Component } from 'react';
import './App.css';

import LaptopList from '../LaptopList/LaptopList';
import Navigation from '../Navigation/Navigation';
import FilterBar from '../FilterBar/FilterBar';

class App extends Component {

    render() {
        return (
            <div >
                <Navigation />
                <main>
                    <div className="container">
                        <div className="row">
                            <FilterBar />
                            <LaptopList />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
