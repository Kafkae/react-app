import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const ErrorMessage = styled.span`
  font-size: 1.4em;
  font-weight: bold;
`;


export const Error = ({ error }) => {
  return (
    <Wrapper>
      <ErrorMessage>Пошло что-то не так :((</ErrorMessage>
      <ErrorMessage>{error}</ErrorMessage>
    </Wrapper>
);
};