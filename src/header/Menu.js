import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux'


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
    width: 50vmax;
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

class Menu extends Component {

  state = { showMenu: false }

  showMenu = (e) => {
    e.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu = (e) => {
    if (!this.menu.contains(e.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }
  render() {
    return (
      <>
        <Button onClick={this.showMenu}>
          Меню
        </Button>
        {
          this.state.showMenu
            ? (
              <Nav ref={(element) => { this.menu = element; }}>
                <WrapperItem >
                  {this.props.menu.map(menu =>
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
              </Nav >
            )
            : (
              null
            )
        }
      </>
    );
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    menu: store.menu,
  }
}

export default connect(mapStateToProps)(Menu)