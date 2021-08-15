import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ComposerItem from './ComposerItem';
import Spinner from '../layout/Spinner';

const ComposersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

const Composers = ({ composers, loading }) => {
  if (loading) return <Spinner />;

  return (
    <ComposersGrid>
      {composers.map((comp) => (
        <ComposerItem key={comp.id} composer={comp} />
      ))}
    </ComposersGrid>
  );
};

Composers.propTypes = {
  composers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Composers;
