import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardBase from '../styled/CardBase';
import ButtonBase from '../styled/ButtonBase';

const ComposerCard = styled(CardBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ComposerDetailsButton = styled(ButtonBase)`
  font-size: 0.8rem;
  padding: 0.3rem 1rem;
  margin: 1rem 0;
  background: var(--dark-color);
  color: #fff;
`;

class ComposerItem extends Component {
  static defaultProps = {
    id: '87',
    name: 'Bach',
    completeName: 'Johann Sebastian Bach',
    epoch: 'Baroque',
    portrait: 'https://assets.openopus.org/portraits/12091447-1568084857.jpg',
  };

  static propTypes = {
    composer: PropTypes.object.isRequired,
  };

  render() {
    const { portrait, complete_name: completeName, name } = this.props.composer;

    return (
      <ComposerCard>
        <img
          src={portrait}
          alt="Composer's Portrait"
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{completeName}</h3>
        <ComposerDetailsButton>Learn more about {name} </ComposerDetailsButton>
      </ComposerCard>
    );
  }
}

export default ComposerItem;
