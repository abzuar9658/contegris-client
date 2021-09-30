import { reducer as items } from '@intellicon/ui-module';
import { combineReducers }  from 'redux';
import auth                 from './auth';

export default combineReducers({
  auth,
  items,
})
