import React from 'react';
var {Link, IndexLink} = require('react-router');

 var Navigation = () => {

    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Welcome to Paradise!</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Time Me</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>

            <li>

            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                <p>Created by <a href="https://github.com/reeplay22" alt="Check out my GitHub!!">Timothy Reed</a></p>
              </li>
              <li>

              </li>
            </ul>
        </div>
      </div>
    );

}

module.exports = Navigation;
