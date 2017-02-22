import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';
var {Link, IndexLink} = require('react-router');
// var About = require('About');
// var Examples = require('Examples');
// var Extra = require('Extra');

 export class Navigation extends React.Component {

   constructor(props){
     super(props);
   }

   onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }

   onSearch (e){
     e.preventDefault();
     var searchBarLocation = this.refs.searchBarLocation.value;
     var encodedLocation = encodeURIComponent(searchBarLocation);

     if(searchBarLocation.length >0){
       this.refs.searchBarLocation.value = "";
       window.location.hash = '#/?location='+ encodedLocation ;
     }
   }

  render () {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Welcome to Paradise!</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
            </li>
            <li>
              <Link to="/todos" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Todo App</Link>
            </li>
            <li>
              <Link to="/weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Check the Weather</Link>
            </li>
            <li>
              <Link to="/timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer </Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          
          <div className="page-actions"> 
            <a href="#" onClick={this.onLogout.bind(this)}>Log Out</a>
          </div>
        </div>
      </div>
    );
}
}
export default Redux.connect()(Navigation);

// <form onSubmit={this.onSearch}>
//             <ul className="menu">
//               <li>
//                 <input type="search" ref="searchBarLocation" placeholder="Search weather"/>
//               </li>
//               <li>
//                 <input type="submit" className="button" value="Get Weather"/>
//               </li>
//             </ul>
//           </form>

