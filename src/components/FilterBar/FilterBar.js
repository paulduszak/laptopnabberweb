import React, { Component } from 'react';
import FilterItem from "./FilterItem";

import "./FilterBar.css";

class FilterBar extends Component {

    render() {
        return (
            <div className="filterbar col-sm-3 pt-2">
                <div className="row">
                    <div className="col-sm-12">
                        <h6 className="title m-0 float-left">Laptop Filters</h6>
                        <a className="reset float-right">Reset all</a>
                    </div>
                </div>
                <div className="row">
                    <div className="results col-md-12 mb-2">
                        687 Results
                    </div>
                </div>
                <div className="row">
                    <div className="col p-2">
                        <FilterItem/>
                        <FilterItem/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterBar;