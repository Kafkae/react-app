import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: translateX(500px);
  }
  to {
    transform: translateX(0px);
  }
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70vmin;
    background-color: #a82844;
    z-index: 2;
    animation: ${rotate} .1s;
`;

const WrapperItem = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
`;

const ListItem = styled.li`
    color: white;
    font-size: 2em;
    margin-bottom: 5%;
`;

const LinkItem = styled.a`
    color: white;
    :hover {
        text-decoration: none;
        color: #997179;
    }
`;

const ItemMenu = props => {
  return (
    <Nav>
      <WrapperItem>
        {props.menu.map(menu =>
          <ListItem key={menu.id}>
            <LinkItem
              href={menu.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {menu.name}
            </LinkItem>
          </ListItem>
          )}
      </WrapperItem>
    </Nav>
    );
  };
  export default ItemMenu;