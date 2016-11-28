import React from 'react';
import { connect } from 'react-redux';
import MemberList from '../components/member-list';
import * as memberApi from '../api/member-api';
import store from '../store';
import { loadSearchLayout } from '../actions/search-layout-actions';

const MemberListContainer = React.createClass({

  componentDidMount () {
    memberApi.getMembers();
    store.dispatch(loadSearchLayout('members', 'Список участников'));
  },

  render () {
    return <MemberList members={this.props.members} deleteMember={memberApi.deleteMember}/>
  }

});

const mapStateToProps = (store) => {
  return {
    members: store.memberState.members
  };
};

export default connect(mapStateToProps)(MemberListContainer);
