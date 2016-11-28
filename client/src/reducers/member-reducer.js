import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  members: [],
  memberProfile: {
    repos: []
  }
};

const memberReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_MEMBERS_SUCCESS:
      return Object.assign({}, state, { members: action.members });

  }

  return state;

}

export default memberReducer;
