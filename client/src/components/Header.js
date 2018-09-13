import React from 'react';
import Login from './Login';

const Header = ({ loggedIn, login, logout, username }) => {
  return (
    <div className="header">
      <div className="site-title">Reddit Clone</div>
      <div className="user-info">
        {loggedIn ? (
          <span className="user-meta">
            {username} |{' '}
            <a className="logout-btn" onClick={logout}>
              logout
            </a>
          </span>
        ) : (
          <Login login={login} />
        )}
      </div>
    </div>
  );
};

export default Header;
