const initialState = {
	message: null,
	error: null,
	alert: 'text-primary font-weight-bolder',
};

const LoginReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				message: 'logged successfully',
				error: null,
				alert: 'alert alert-primary',
			};
		case 'LOGIN_FAILURE':
			return {
				...state,
				message: 'Invalid email and/or password',
				error: payload,
				alert: 'alert alert-warning',
			};
		default:
			return state;
	}
};

export default LoginReducer;
