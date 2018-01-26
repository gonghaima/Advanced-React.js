import React, { PureComponent } from 'react';

class SearchBar extends PureComponent {
    state = { 
      searchTerm: ''
    };
    handleSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
      console.log(this.state.searchTerm);
    }
    render() {
      return (
        <input 
          value={this.state.searchTerm}
          type="search" 
          placeholder="Enter search term"
          onChange={this.handleSearch}/>
      );
    }
}

export default SearchBar;