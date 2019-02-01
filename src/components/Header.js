import React from 'react';
import styled from 'styled-components';
import Menu from '../containers/MenuContainer' 

const Wrapper = styled.header`
  display: flex;
  padding: 10px;
  height: 60px;
  align-items: center;
`;
const Logo = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin-right: auto;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo>React-App</Logo>
      <Menu />
    </Wrapper>
  );
};

export default Header;
