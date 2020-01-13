import { combineReducers } from 'redux';
import LoginReducer from './loginReducer';

const allReducers = combineReducers({
	loginRed: LoginReducer,
});

export default allReducers;
