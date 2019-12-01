import axios from 'axios';
const loginAction = async payload => {
	try {
		console.log(payload);
		const res = await axios.post('http://localhost:3030/api/v1/auth/signin', payload);
		const { data } = res.data;
		//localStorage.setItem('quickcredit_token', data.token);
		return {
			type: 'LOGIN_SUCCESS',
			payload: data,
		};
	} catch (error) {
		const message = error.response ? error.response.data.msg : 'No internet access';
		return {
			type: 'LOGIN_FAILURE',
			payload: message,
		};
	}
};

export default loginAction;
