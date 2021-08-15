import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavbarBase from '../styled/NavbarBase';

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
      </MainNavbar>
    );
  }
}

export default Navbar;
