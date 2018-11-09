import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: translateX(500px);
  }

  to {
    transform: translateX(0px);
  }
`;

const Button = styled.button`
    position: relative;
    background: none;
    border: none;
    margin-left: auto;
    cursor: pointer;
    text-transform: uppercase;
    padding: 10px;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 30vmax;
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

const CloseNav = styled.button`
    color: white;
    font-size: 2em;
    background: none;
    border: none;
    background: #8c0000;
    cursor: pointer;
`;

class Menu extends Component {
    state = { showing: false };
	render() {
      const { showing } = this.state;
	  return (   
        <div>
        <Button onClick={() => this.setState({ showing: !showing })}>
            меню
        </Button>
        { showing 
            ? <Nav>
            <CloseNav onClick={() => this.setState({ showing: !showing })}>Закрыть</CloseNav>
            <WrapperItem>
            <ListItem>
                <LinkItem
                    href="https://samara.hh.ru/resume/6d5a39ceff0544dc810039ed1f325579657057"
                    target="_blank"
                    rel="noopener noreferrer"
               >
                    Резюме
                </LinkItem>
            </ListItem>
            <ListItem>
                <LinkItem
                    href="https://vk.com/id181960073"
                    target="_blank"
                    rel="noopener noreferrer"
               >
                    Мой вк
                </LinkItem>
            </ListItem>
            <ListItem>
                <LinkItem
                    href="https://github.com/Kafkae"
                    target="_blank"
                    rel="noopener noreferrer"
               >
                    GitHub
                </LinkItem>
            </ListItem>
            </WrapperItem>
        </Nav>
            : null
        }
        </div>
	  );
	}
  } 


  export default Menu;
