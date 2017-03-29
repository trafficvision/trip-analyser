import thunk from 'redux-thunk';
import * as redux from 'redux';

// import { } from 'reducers';

export var configure = (initialState = {}) => {
  // -------------------------------
  // Combine reducers
  // -------------------------------
  var reducer = redux.combineReducers({
  // apis: {     // data from various services
  //   api1: {},
  //   api2: {}
  // },
  // components: {}, // UI state data for each widget, component, you name it
  // session: {}, // session-specific information
  });

  // use redux.compose to add middleware functions to the redux application
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    // to keep the middleware process working we pass the argument through in the
    // case that our desired middleware (here devToolsExtension) does not exist
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ));

  return store;
};
