import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import routes from './routes.js';
import store from './store';

injectTapEventPlugin();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>), document.getElementById('root'));

//ReactDom.render(<App />, document.getElementById('app'));

//React.render(<App />, document.getElementById('app')); //document.querySelector('app')

//ReactDom.render((
  //<MuiThemeProvider muiTheme={getMuiTheme()}>
    //<Router history={browserHistory} routes={routes} />
  //</MuiThemeProvider>), document.getElementById('app'));
