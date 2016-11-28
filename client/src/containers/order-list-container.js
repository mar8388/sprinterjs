import React from 'react';
import { connect } from 'react-redux';
import { MuiDataTable } from 'mui-data-table';
import OrderList from '../components/order-list';
import * as OrderApi from '../api/order-api';
import store from '../store';
import { loadSearchLayout } from '../actions/search-layout-actions';


let orders = [
  { id: 1, name: 'Chikwa Eligson', date3: '11.05.2016', location: 'Рейс 123 АХ2233ВС тел.', status: 'Подготовлен', mood: 'happy' },
  { id: 2, name: 'Bamidele Johnson', date3: '11.05.2016', location: 'Самовывоз', status: 'Отгружен', mood: 'anxious' },
  { id: 3, name: 'John Lee', date3: '11.05.2016', location: 'Самовывоз', status: 'В работе', mood: 'indifferent' },
  { id: 4, name: 'Binta Pelumi', date3: '11.05.2016', location: 'Рейс 123 АХ2233ВС тел.', status: 'Доставлен', mood: 'sad' },
  { id: 5, name: 'Cassidy Ferangamo', date3: '11.05.2016', location: 'Рейс 887 АХ9856АА', status: 'Отгружен', mood: 'angry' },
  { id: 6, name: 'Damian Swaggbag', date3: '11.05.2016', location: 'Рейс 887 АХ9856АА', status: 'Подготовлен', mood: 'bitter' },
  { id: 7, name: 'Loveth Sweetstick', date3: '25.10.2016', location: 'Рейс 887 АХ9856АА', status: 'Доставлен', mood: 'happy' },
  { id: 8, name: 'Zzaz Zuzzi', date3: '25.10.2016', location: 'Рейс 123 АХ2233ВС тел.', status: 'В работе', mood: 'party-mood' },
  { id: 9, name: 'Ian Sweetmouth', date3: '25.10.2016', location: 'Рейс 887 АХ9856АА тел.', status: 'Отгружен', mood: 'happy' },
  { id: 10, name: 'Elekun Bayo', date3: '25.10.2016', location: 'Самовывоз', status: 'Отгружен', mood: 'anxious' },
];
//let orders = OrderApi.getOrders();

let config = {
  paginated: true,
  search: 'name',
  data: orders,
  sort: 'name',
  selectable: true,
  fixedHeader: true,
  fixedFooter: true,
  enableSelectAll: true,
  displaySelectAll: true,
  displayRowCheckbox: true,
  stripedRows: true,
  showRowHover: true,
  columns: [
    { property: 'id', title: 'Номер'},
    { property: 'name', title: 'Клиент' },
    { property: 'date3', title: 'Дата дост.' },
    { property: 'location', title: 'Тип доставки' },
    { property: 'status', title: 'Статус' },
    { title: 'Адрес', renderAs: function (data) {
      return `${data.name} is in a ${data.mood} mood.`;
    }},
  ]
};

const OrderListContainer = React.createClass({

  render() {
    return (
      <MuiDataTable config={config} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    orders: store.orderState.orders
  };
};

export default connect(mapStateToProps)(OrderListContainer);
