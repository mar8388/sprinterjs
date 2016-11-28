import * as types from '../actions/action-types';

export function getMembersSuccess(members) {
  return {
    type: types.GET_MEMBERS_SUCCESS,
    members
  };
}

export function deleteMemberSuccess(memberId) {
  return {
    type: types.DELETE_MEMBER_SUCCESS,
    memberId
  };
}

export function memberProfileSuccess(memberProfile) {
  return {
    type: types.MEMBER_PROFILE_SUCCESS,
    memberProfile
  };
}
