import axios from 'axios';
import store from '../store';
import { getOrdersSuccess, deleteOrderSuccess, orderProfileSuccess } from '../actions/order-actions';

/**
 * Get all
 */
export function getOrders() {
  return axios.get('http://localhost:8080/orders.json')
    .then(response => {
      store.dispatch(getOrdersSuccess(response.data));
      return response;
    })
    .catch(error => {
      alert(error); // Error: Not Found
    });
}

/**
 * Search
 */
export function searchOrders(query = '') {
  return axios.get('http://localhost:8080/orders?q='+ query)
    .then(response => {
      store.dispatch(getOrdersSuccess(response.data));
      return response;
    })
    .catch(error => {
      alert(error); // Error: Not Found
    });
}

/**
 * Delete
 */
export function deleteOrder(orderId) {
  return axios.delete('http://localhost:8080/orders/' + orderId)
    .then(response => {
      store.dispatch(deleteOrderSuccess(orderId));
      return response;
    });
}

/**
 * getProfile() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */
export function getProfile(orderId) {
  // Start with an empty profile object and build it up
  // from multiple XHR requests.
  let profile = {};
  // Get the order data from our local database.
  return axios.get('http://localhost:3001/orders/' + orderId)
    .then(response => {

      let order = response.data;
      profile.name = order.name;


    });

}
