import styled from 'styled-components';

const ContainerBase = styled.div`
  max-width: ${(props) => props.width || '1100px'};
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
`;

export default ContainerBase;
