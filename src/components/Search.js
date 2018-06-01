import React, { Component } from 'react';
import "./Search.css";
class Search extends Component{
    render(props){
        return(
            <div>
                <input
                    className= "searchBox"
                    type="search"
                    placeholder="search locations"
                    onChange={this.props.searchChange}


                />
            </div>
        )
    }
};

export default Search;