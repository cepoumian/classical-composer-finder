import styled from 'styled-components';

export const BaseContainer = styled.div`
  max-width: ${(props) => props.width || '1100px'};
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
`;
