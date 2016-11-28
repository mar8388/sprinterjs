import React, { Component,  PropTypes } from 'react'
import { Route, Router, Link, IndexLink } from 'react-router'
import { Drawer, AppBar } from 'material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import IconButton from 'material-ui/IconButton';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';

import Auth from '../modules/Auth';

const bStyles = {
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  },
};

const MyFlatButton = (props) => (
  <FlatButton
    {...props}
    label='Вход'
    style={bStyles.button}
    icon={<ActionExitToApp />}
    containerElement={<Link to='/login'>text</Link>}
  />
);
Component.muiName = 'FlatButton';

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText='Обновить' containerElement={<Link to='/refresh'>text</Link>}/>
    <Divider />
    <MenuItem primaryText='Вход' containerElement={<Link to='/login'>text</Link>}/>
    <MenuItem primaryText='Регистрация' containerElement={<Link to='/signup'>text</Link>}/>
    <Divider />
    <MenuItem primaryText='Выход' containerElement={<Link to='/logout'>text</Link>}/>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

//===============================
//=== HEADER
//===============================
class Header extends Component  {

  constructor(props){
    super(props);
    this.state = {
      open: false,
      logged: false,
      docked: true
    };
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
    console.log('open')
  };

  handleClose() {
    this.setState({open: false});
  };

  handleChange () {
    this.setState({logged: !this.state.logged});
  };

  render() {
    return (
      <div>
        <Drawer
          docked={this.state.docked}
          open={this.state.open}
          width={250}
          style={{position: 'absolute', bottom: 0, width: '100%'}}
        >

          <MenuItem
            containerElement={<Link to='/' />}
            primaryText='Sprinter МЕНЮ'
            className = 'menuTitle'
            onTouchTap={ this.handleClose.bind(this) }
          />

          <MenuItem
            onTouchTap={this.handleClose.bind(this)}
            containerElement={<Link to='/orders' />}
          >Текущие заказы
          </MenuItem>

          <Divider />

          <MenuItem
            onTouchTap={this.handleClose.bind(this)}
            containerElement={<Link to='/trips' />}
          >Доставки и рейсы
          </MenuItem>
          <MenuItem
            onTouchTap={this.handleClose.bind(this)}
            containerElement={<Link to='/opers' />}
          >Расчеты
          </MenuItem>
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose.bind(this)}
            containerElement={<Link to='/members' />}
          >Member from JSON-File
          </MenuItem>
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose.bind(this)}
            containerElement={<Link to='/users' />}
          >User from JSON-Server
          </MenuItem>
          <MenuItem
            onTouchTap={this.handleClose.bind(this)}
            containerElement={<Link to='/widgets' />}
          >Widget from JSON-Server
          </MenuItem>
        </Drawer>

        <AppBar
          title={<span>SprinterJS</span>}
          isInitiallyOpen={true}
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
          iconElementRight={this.state.logged ? <Logged /> : <MyFlatButton />}
        />

        <Toggle
          label='Logged'
          defaultToggled={false}
          onToggle={this.handleChange.bind(this)}
          labelPosition='right'
          style={{margin: 20}}
        />

        { /* child component will be rendered here */ }
        {this.props.children}

      </div>
    );
  }
}

  Header.propTypes = {
    children: React.PropTypes.element.isRequired
  };

  Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  };

export default Header;
