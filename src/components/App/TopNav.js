import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import {logout, isLogin} from '../../api/auth';

const UserDropdown = withRouter(props => {
  return (
      <li className="dropdown">
          <a
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-expanded="false">
              Admin <span className="caret" />{' '}
          </a>
          <ul className="dropdown-menu">
              <li>
                  <a
                      onClick={e => {
                          e.preventDefault();
                          logout();
                          props.history.replace('/signin');
                      }}>
                      Log out
                  </a>
              </li>
              <li>
                  <a>Setting</a>
              </li>
          </ul>
      </li>
  );
});

const DropDown = withRouter(UserDropdown);


export default class TopNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top jr-top-nav">
      <div className="container">
          <div className="navbar-header">
              <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
              </button>
              <Link to="/" className="navbar-brand">
                  <img src={logo} style={{ height: 40 }} alt="logo" />
              </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                  <li>
                      <Link to="/courses">Courses</Link>
                  </li>
                  <li>
                      <Link to="/students">Students</Link>
                  </li>
                  <li>
                      <Link to="/lecturers">Lecturers</Link>
                  </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  {isLogin() ? (
                      <UserDropdown />
                  ) : (
                      <li>
                          <Link to="/signin">Sign in</Link>
                      </li>
                  )}
              </ul>
          </div>
      </div>
  </nav>
    );
  }
}

