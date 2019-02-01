import React from 'react';
import styled, { keyframes } from 'styled-components';

const donutSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #a82844;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  animation: ${donutSpin} 1.2s linear infinite;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 70px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Preloader = () => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
);
};