import axios from 'axios';
import { toast } from 'react-toastify';

const loginAction = async payload => {
	try {
		const login = await axios.post(
			'https://alexis-qc-backend-staging.herokuapp.com/api/v1/auth/signin',
			payload,
		);
		const { data } = login.data;
		localStorage.setItem('quickcredit_token', data.token);
		toast.success(' logged in successfully');
		return {
			type: 'LOGIN_SUCCESS',
			payload: data,
		};
	} catch (error) {
		const message = error.response ? error.response.data.msg : 'No internet access';
		toast.error(message);
		return {
			type: 'LOGIN_FAILURE',
			payload: message,
		};
	}
};

export default loginAction;
