var moment = require('moment');
//var uuid = require('uuid');

export var authReducer = (state={}, action) => {
    switch(action.type) {
        case "LOGIN": 
            return {
                user: action.user
            }
        case "LOGOUT":
            return {};

        default:
            return state;
    }
}

export var searchTextReducer = (state = "", action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
       
        default:
            return state;
    }
}

export var showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case 'UPDATE_SHOW_COMPLETED':
            return !state;       
        default:
            return state
    }
}

export var todosReducer = (state=[], action) => {
 
    switch(action.type){
        case "ADD_TODO":
            return [
                 ...state,
                 action.todo
                
                ];
        case "ADD_TODOS":
            return[
                ...state,
                ...action.todos
            ]
        case "UPDATE_TODO":        
            return state.map((todo) => {
                     if(todo.id === action.id) {
                        //var nextCompleted = !todo.completed; 
                        //action.text = todo.text;
                        return {
                            ...todo,
                            ...action.updates
                        }                      
                     }else{
                         return todo;
                     }
            });
            case "EDIT_TODO":        
            return [
                ...state,
                action.text == todo.text]
                 
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.id);
            
        case "LOGOUT":
        return []
        
        default:
            return state;
    
    }
}

    export var weatherReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            return !state;       
        default:
            return state
        }
    }


    export var timerReducer = (state = {}, action) => {
        switch (action.type) {
            case 'START_TIMER':
                return !state;       
            default:
                return state
        }
    }

