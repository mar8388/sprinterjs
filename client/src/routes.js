//import Base from './components/Base.jsx';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';

import LoginPage from   './containers/LoginPage.jsx';
import SignUpPage from  './containers/SignUpPage.jsx';
import Auth from        './modules/Auth';


import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './layouts/main-layout';
import SearchLayoutContainer from './containers/search-layout-container';

// Pages
import MemberListContainer from './containers/member-list-container';
import UserListContainer from './containers/user-list-container';
import UserProfileContainer from './containers/user-profile-container';
import WidgetListContainer from './containers/widget-list-container';
import OrderListContainer from './containers/order-list-container';
//import OrderPage from './containers/OrderPage.jsx';

import NoMatch from './containers/NoMatchPage.jsx';

/*
const routes = {
  // base component (wrapper for the whole application).
  component: Header,//Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();
        // change the current URL to /
        replace('/');
      }
    },
  ]
};
*/

const routes = (
    <Route path='/' component={Header}>
      <IndexRoute getComponent={(location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }} />

      <Route path='/login' component={LoginPage}/>
      <Route path='/signup' component={SignUpPage}/>
      <Route path='/logout' onEnter={ (nextState, replace) => {
              Auth.deauthenticateUser();
              replace('/');
      }} />

      <Route path='users'>
        <Route component={SearchLayoutContainer}>
          <IndexRoute component={UserListContainer} />
        </Route>
        <Route path=':userId' component={UserProfileContainer} />
      </Route>

      <Route path='widgets'>
        <Route component={SearchLayoutContainer}>
          <IndexRoute component={WidgetListContainer} />
        </Route>
      </Route>

      <Route path='orders' component={OrderListContainer} />

      <Route path='members'>
        <Route component={SearchLayoutContainer}>
          <IndexRoute component={MemberListContainer} />
        </Route>
      </Route>


      <Route path='/time' component={NoMatch}/>
      <Route path='/counter' component={NoMatch}/>
      <Route path='/about' component={NoMatch}/>

      <Route path='*' component={NoMatch}/>
    </Route>

);

export default routes;
