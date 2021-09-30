import * as ActionTypes from '../actions/actionTypes';

/* Multiple ways for writing your reducer*/
/* First One */

// function reducer(state = {}, action) {
//   const handlers = {
//     [ActionTypes.YOUR_ACTION_TYPE_SUCCESS]: action.payload,
//   };
//
//   return handlers[action.type] || state;
// }


/* Second One */

function reducer(state = [], { type, payload }) {
  switch (type) {
    case ActionTypes.YOUR_ACTION_TYPE_SUCCESS:
      return {
        item: payload
      }

    default:
      return state;
  }
}


export default reducer;