import React from 'react';
import { connect } from 'react-redux';
import WidgetList from '../components/widget-list';
import * as widgetApi from '../api/widget-api';
import store from '../store';
import { loadSearchLayout } from '../actions/search-layout-actions';

const WidgetListContainer = React.createClass({

  componentDidMount: function() {
    widgetApi.getWidgets();
    store.dispatch(loadSearchLayout('widgets', 'Список виджетов'));
  },

  render: function() {
    return (
      <WidgetList widgets={this.props.widgets} deleteWidget={widgetApi.deleteWidget} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    widgets: store.widgetState.widgets
  };
};

export default connect(mapStateToProps)(WidgetListContainer);
