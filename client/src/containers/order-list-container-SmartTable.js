import React from 'react';
import { connect } from 'react-redux';
import SmartTable from '../components/SmartTable';
import OrderList from '../components/order-list';
//import * as OrderApi from '../api/order-api';
import store from '../store';
import loadSearchLayout from '../actions/search-layout-actions';

const tableHeaders = [
  { alias: 'ID', sortable: true, dataAlias: 'id', format: { type: 'link', url: 'http://someurl' } },
  { alias: 'Name', sortable: true, dataAlias: 'name', format: { type: 'link', url: 'http://someurl' } },
  { alias: 'Status', sortable: true, dataAlias: 'age', format: { type: 'link', url: 'http://someurl' } },
  { alias: 'Location', sortable: false, dataAlias: 'location', format: { type: 'link', url: 'http://someurl' } },
  { alias: 'Level', sortable: false, dataAlias: 'level', format: { type: 'link', url: 'http://someurl' } },
  { alias: 'Mood', sortable: false, dataAlias: 'mood', format: { type: 'link', url: 'http://someurl' } }
]

let orders = [
  { id: 1, name: 'Chikwa Eligson', age: 24, location: 'Lagos', level: 'stage-1', mood: 'happy' },
  { id: 2, name: 'Bamidele Johnson', age: 18, location: 'Anambra', level: 'stage-4', mood: 'anxious' },
  { id: 3, name: 'John Lee', age: 20, location: 'Abuja', level: 'stage-2', mood: 'indifferent' },
  { id: 4, name: 'Binta Pelumi', age: 22, location: 'Jos', level: 'stage-3', mood: 'sad' },
  { id: 5, name: 'Cassidy Ferangamo', age: 30, location: 'Lagos', level: 'stage-4', mood: 'angry' },
  { id: 6, name: 'Damian Swaggbag', age: 35, location: 'PortHarcourt', level: 'stage-1', mood: 'bitter' },
  { id: 7, name: 'Loveth Sweetstick', age: 20, location: 'Imo', level: 'stage-3', mood: 'happy' },
  { id: 8, name: 'Zzaz Zuzzi', age: 19, location: 'Bayelsa', level: 'stage-2', mood: 'party-mood' },
  { id: 9, name: 'Ian Sweetmouth', age: 18, location: 'Enugu', level: 'stage-4', mood: 'happy' },
  { id: 10, name: 'Elekun Bayo', age: 21, location: 'Zamfara', level: 'stage-4', mood: 'anxious' }
];

//orders = OrderApi.getOrders();
export class OrderListContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
      return (
        <SmartTable { ...{ tableHeaders, orders, offset: 1, limit: 5, total: orders.length, false } } />
      );
    }
}


const mapStateToProps = function(store) {
  return {
    orders: store.orderState.orders
  };
};

export default connect(mapStateToProps)(OrderListContainer);
