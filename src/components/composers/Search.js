import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { DarkButton, LightButton } from '../styled/Buttons';

// STYLED COMPONENTS
const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 1rem;
`;

const SearchButton = styled(DarkButton).attrs({ type: 'submit', value: 'submit' })`
  font-size: 1.2rem;
  display: block;
  width: 100%;
  text-align: center;
  grid-row: 2 / 3;
  align-self: start;
`;

const ClearButton = styled(LightButton)`
  font-size: 1.2rem;
  display: block;
  width: 100%;
  text-align: center;
  grid-row: 2 / 3;
  align-self: start;
`;

// SEARCH COMPONENT
class Search extends Component {
  static propTypes = {
    searchComposers: PropTypes.func.isRequired,
    clearComposers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  state = {
    text: '',
  };

  // Hanlder Methods
  searchInputHandler = (e) => this.setState({ [e.target.name]: e.target.value });

  searchSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter valid text', 'danger');
    } else {
      this.props.searchComposers(this.state.text);
      this.setState({ text: '' });
    }
  };

  // UI
  render() {
    const { showClear, clearComposers } = this.props;
    const { text } = this.state;

    return (
      <div>
        <form onSubmit={this.searchSubmitHandler}>
          <SearchWrapper>
            <input
              type="text"
              name="text"
              placeholder="Type a composer's name"
              value={text}
              onChange={this.searchInputHandler}
              style={{ gridColumn: '1/3', outline: 'none' }}
            />
            <SearchButton>Search for a composer</SearchButton>
            {showClear ? (
              <ClearButton onClick={clearComposers}>Clear Composers</ClearButton>
            ) : null}
          </SearchWrapper>
        </form>
      </div>
    );
  }
}

export default Search;
