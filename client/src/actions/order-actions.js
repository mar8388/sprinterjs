import * as types from '../actions/action-types';

export function getOrdersSuccess(orders) {
  return {
    type: types.GET_ORDERS_SUCCESS,
    orders
  };
}

export function deleteOrdertSuccess(orderId) {
  return {
    type: types.DELETE_ORDER_SUCCESS,
    orderId
  };
}

export function orderProfileSuccess(orderProfile) {
  return {
    type: types.ORDER_PROFILE_SUCCESS,
    orderProfile
  };
}
