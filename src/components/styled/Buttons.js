import styled from 'styled-components';

export const BaseButton = styled.button`
  display: inline-block;
  background: var(--light-color);
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
`;

export const DarkButton = styled(BaseButton)`
  background: var(--dark-color);
  color: #fff;
`;

export const LightButton = styled(BaseButton)`
  background: var(--light-color);
  color: #333;
`;
