import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import TodoList from './components/todo_list.jsx';
import { Provider } from 'react-redux';
import store from './store';

import { routerReducer } from 'react-router-redux'

let routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={TodoList} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
