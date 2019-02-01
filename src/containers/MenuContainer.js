import React, { Component } from 'react';
import { connect } from 'react-redux'
import ButtonMenu from '../components/ButtonMenu'
import ItemMenu from '../components/ItemMenu'


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
      <ButtonMenu onClick= {this.showMenu} />
        {
          this.state.showMenu
            ? (
              <div ref={(element) => { this.menu = element; }}>
                <ItemMenu menu={this.props.menu.menu} />
              </div >
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
  return {
    menu: store.menu,
  }
}

export default connect(
  mapStateToProps,
)(Menu)