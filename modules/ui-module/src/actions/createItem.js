import * as API         from "../api";
import * as ActionTypes from './actionTypes';

// export default function yourAction(values) {
//   return dispatch => {
//     dispatch({ type: ActionTypes.YOUR_ACTION_TYPE_REQUEST, payload: values });
//     return API.createItem(values)
//       .then(response => {
//         let data = {
//           values: response.data.data,
//           associate: response.data.data.customer
//         }
//         dispatch({ type: ActionTypes.YOUR_ACTION_TYPE_SUCCESS, payload: values });
//         return data;
//       })
//       .catch(err => {
//           dispatch({ type: ActionTypes.YOUR_ACTION_TYPE_FAILURE, payload: err });
//           return false;
//         }
//       )
//   }
// };