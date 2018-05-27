import { combineReducers } from 'redux';
import users from './users';
console.log('users: ', users);

const rootReducer = combineReducers({
  users,
});
export default rootReducer;
