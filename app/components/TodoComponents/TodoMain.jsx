import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoComponents/TodoList';
import AddTodo from 'TodoComponents/AddTodo';
import TodoSearch from 'TodoComponents/TodoSearch';

import * as actions from 'actions';

export class TodoMain extends React.Component {


//<!--   -->
  render () {
    //var {auth} = this.state;
    return (
      <div>
      
          
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>

      </div>
    )
  }

};

export default Redux.connect()(TodoMain);
