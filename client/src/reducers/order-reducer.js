import _ from 'lodash';
import * as types from '../actions/action-types';

const initialState = {
  orders: []
};

const orderReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_ORDERS_SUCCESS:
      return Object.assign({}, state, { orders: action.orders });

    case types.DELETE_ORDER_SUCCESS:

      // Use lodash to create a new order array without the order we want to remove
      const neworders = _.filter(state.orders, order => order.id !== action.orderId);
      return Object.assign({}, state, { orders: neworders })

  }

  return state;

}

export default orderReducer;
