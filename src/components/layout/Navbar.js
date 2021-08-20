import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { NavbarBase } from '../styled/Navbars';

const MainNavbar = styled(NavbarBase)`
  background-color: var(--primary-color);
  i {
    margin-right: 1rem;
  }
`;

class Navbar extends Component {
  static defaultProps = {
    title: 'Classical Composer Finder',
    icon: 'fas fa-guitar',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <MainNavbar>
        <h1 className="text-dark">
          <i className={this.props.icon}></i>
          {this.props.title}
        </h1>
        <ul style={{ display: 'flex', gap: 10 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </MainNavbar>
    );
  }
}

export default Navbar;
