import React, { Component } from 'react';
import CheckboxFilter from "./CheckboxFilter";

import "./FilterBar.css";

class FilterBar extends Component {

    handleClick = (checkboxName, checkboxState) => {
        this.props.handleClick(checkboxName, checkboxState);
    }

    render() {
        return (
            <div className="filterbar col pt-2">
                <div className="row">
                    <div className="col">
                        <h6 className="title m-0 float-left">Laptop Filters</h6>
                        <a className="reset float-right">Reset all</a>
                    </div>
                </div>
                <div className="row">
                    <div className="results col mb-2">
                        687 Results
                    </div>
                </div>
                <div className="row">
                    <div className="col p-2">
                        {this.props.filters.checkboxFilters.map(filter => <CheckboxFilter title={filter.title} key={filter.title} handleClick={this.handleClick} options={filter.options} selected={filter.selected} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterBar;