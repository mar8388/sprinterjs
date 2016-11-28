import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';


const Base = ({ children }) => (
  <div>

    <div className="navbar navbar-default navbar-static-top">
      <div className='top-bar'>
        <div className='navbar-header'>
          <div className="navbar-brand">
            <IndexLink to="/">SprinterJS App</IndexLink>
          </div>
        </div>

        <div id='myNavbar' className='collapse navbar-collapse'>

          {Auth.isUserAuthenticated() ? (
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to="/logout">Выход</Link></li>
            </ul>
          ) : (
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/login">Вход</Link></li>
              <li><Link to="/signup">Регистрация</Link></li>
            </ul>
          )}
        </div>
      </div>
    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
