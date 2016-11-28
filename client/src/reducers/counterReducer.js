import { INCREMENT_COUNTER } from '../actions/counter-actions';

const initialState = { value: 0 };

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { value: state.value + 1 };
    default:
      return state;
  }
}
