import * as types from '../actions/action-types';

const loadSearchLayout = (searchType, title) => {
  return {
    type: types.LOAD_SEARCH_LAYOUT,
    searchType,
    title
  };
}

export default loadSearchLayout;
