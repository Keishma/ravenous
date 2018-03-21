import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review-count',
}

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      'term': '',
      'location': '',
      'sortBy': 'best_match',
    }
  }

  getSortByClass(sortByOption){
    if(this.state.sortBy === sortByOption){
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption){
    this.setState({
      'sortBy': sortByOption
    })
  }

  handleTermChange(event){
    this.setState({
      'term':event.target.value,
    })
  }

  handleLocationChange(event){
    this.setState({
      'location':event.target.value,
    })
  }

  handleSearch(event){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
    event.preventDefault();
  }

  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];

      return (
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this,sortByOptionValue)}
        >
          {sortByOption}
        </li>
      )
    });
  }

  render(){
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
            <input onChange={this.handleTermChange} placeholder="Search Businesses" />
            <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div onClick={this.handleSearch} className="SearchBar-submit">
          <a>Lets Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;