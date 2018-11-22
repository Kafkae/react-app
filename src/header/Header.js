import React from 'react';
import styled from 'styled-components';
import Menu from './Menu'

const Wrapper = styled.div`
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
			<Logo>React-Filter</Logo>
			<Menu />
		</Wrapper>
	  );
  }

  export default Header;
