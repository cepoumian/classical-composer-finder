import React from 'react';
import styled from 'styled-components';

export const AlertS = styled.div`
  padding: 0.7rem;
  margin: 1rem 0;
  opacity: 0.9;
  background: ${(props) =>
    props.type === 'primary'
      ? 'var(--primary-color)'
      : props.type === 'danger'
      ? 'var(--danger-color)'
      : props.type === 'dark'
      ? 'var(--dark-color)'
      : 'var(--light-color)'};
  color: ${(props) =>
    props.type === 'danger' || props.type === 'dark' ? '#fff' : 'var(--dark-color)'};
`;

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <AlertS type={alert.type}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </AlertS>
    )
  );
};

export default Alert;
