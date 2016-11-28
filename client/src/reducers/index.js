import { combineReducers } from 'redux';
import { authStateReducer } from 'redux-oauth';

// Reducers
import counterReducer from './counterReducer';
import timeReducer from './timeReducer';
import userReducer from './user-reducer';
import memberReducer from './member-reducer';
import widgetReducer from './widget-reducer';
import orderReducer from './order-reducer';
import searchLayoutReducer from './search-layout-reducer';

export default combineReducers({
  auth: authStateReducer,
  counter: counterReducer,
  time: timeReducer,
  userState: userReducer,
  memberState: memberReducer,
  widgetState: widgetReducer,
  orderState: orderReducer,
  searchLayoutState: searchLayoutReducer
});
