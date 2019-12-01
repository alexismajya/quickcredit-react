import { combineReducers } from 'redux';
import Loginreducer from './loginReducer';

const allReducers = combineReducers({
	loginRed: Loginreducer,
});

export default allReducers;
