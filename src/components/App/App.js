import React, { Component } from 'react';
import './App.css';

import LaptopList from '../LaptopList/LaptopList';
import Navigation from '../Navigation/Navigation';
import FilterBar from '../FilterBar/FilterBar';

class App extends Component {

    state = {
        checkboxFilters: [
            {
                title: "Brand",
                options: [
                    {
                        name: "Dell",
                        checked: true
                    },
                    {
                        name: "Lenovo",
                        checked: false
                    },
                    {
                        name: "HP",
                        checked: false
                    }
                ]
            },
            {
                title: "Processor Brand",
                options: [
                    {
                        name: "AMD",
                        checked: false
                    },
                    {
                        name: "Intel",
                        checked: false
                    }
                ]
            }
        ]
    }

    handleClick = (filterName, checkboxName, checkboxState) => {
        this.setState(prevState => {
            let nextState = {...prevState};
            nextState.checkboxFilters
                .find(filter => filter.title === filterName).options
                .find(option => option.name === checkboxName).checked = checkboxState;

            return nextState;
        });
    }

    render() {
        return (
            <div >
                <Navigation />
                <main className="container">
                    <div className="row">
                        <FilterBar handleClick={this.handleClick} filters={this.state.checkboxFilters} />
                        <LaptopList />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
