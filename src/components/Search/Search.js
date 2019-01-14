import React, { Component } from 'react';

class Search extends Component {

    render = () => {
        return (
                <input className="col-md-6 float-left form-control m-3" type="text" placeholder="Have something specific in mind? Search here..." aria-label="Search" />
        );
    }

}

export default Search;