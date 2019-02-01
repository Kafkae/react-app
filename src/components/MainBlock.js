import React from 'react';
import styled  from 'styled-components';
import UserContainer from '../containers/UserContainer' 

const Wrapper = styled.main`
  max-width: 1200px;
  min-height: 700px;
  margin: 0 auto;
  border: 3px solid #a82844;
  border-radius: 20px;
  margin: 10px;
`;

const MainTitle = styled.h1`
  margin-top: 29px;
  text-align: center;
`;

export const MainBlock = () => {
    return (
        <Wrapper>
          <MainTitle>Список Пользователей</MainTitle>
          <UserContainer />
        </Wrapper>
    );
  };