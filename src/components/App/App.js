import React, { Component } from 'react';
import './App.css';

import LaptopList from '../LaptopList/LaptopList';
import Navigation from '../Navigation/Navigation';
import FilterBar from '../FilterBar/FilterBar';

class App extends Component {

    state = {
        filters : {
            checkboxFilters: [
                {
                    title: "Brand",
                    options: ["Dell", "Lenovo", "HP"],
                    selected: []
                },
                {
                    title: "Processor Brand",
                    options: ["AMD", "Intel"],
                    selected: []
                }
            ]
        }
    }

    handleClick = (checkboxName, checkboxState) => {
        console.log(checkboxName + " " + checkboxState)
    }

    render() {
        return (
            <div >
                <Navigation />
                <main className="container">
                    <div className="row">
                        <FilterBar handleClick={this.handleClick} filters={this.state.filters} />
                        <LaptopList />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
