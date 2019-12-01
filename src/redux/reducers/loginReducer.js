const initialState = {
	message: null,
	error: null,
};

const Loginreducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				message: payload,
				error: null,
			};
		case 'LOGIN_FAILURE':
			return {
				...state,
				message: null,
				error: payload,
			};
		default:
			return state;
	}
};

export default Loginreducer;
