import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginAction from '../../redux/actions/login.action';
//import Header from '../Components/Header';

export class LogIn extends React.Component {
	state = {
		email: '',
		password: '',
	};

	handleInput = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const { log } = this.props;
		const { email, password } = this.state;
		const data = {
			email,
			password,
		};
		log(data);
	};

	render() {
		const { password, email } = this.state;
		const { error } = this.props.user;
		console.log(this.props, 'here');
		return (
			<div className='d-flex'>
				{/* <Header /> */}
				<div className='container signup'>
					<div className='row'>
						<div className='col-md-6 col-lg-6 bg-sm-white rounded'>
							<h3 className='text-center mb-4'> Login form </h3>
							<hr />
							{error && <p className='alert alert-danger'>{error}</p>}
							<form onSubmit={this.handleSubmit}>
								<div className='form-label-group mt-4'>
									<input
										type='email'
										name='email'
										className='form-control'
										onChange={this.handleInput}
										placeholder='Email address'
										required={true}
										value={email}
									/>
								</div>
								<div className='form-label-group mt-4'>
									<input
										type='password'
										name='password'
										className='form-control'
										onChange={this.handleInput}
										placeholder='Password'
										required={true}
										value={password}
									/>
								</div>
								<br />
								<p>
									<Link to={`/password/reset`} activeClassName='active'>
										{' '}
										Forgot Password{' '}
									</Link>{' '}
								</p>
								<button className='btn-primary btn-block my-3 form-control' type='submit'>
									{'Login'}
								</button>
								Quick credit?
								<Link to={`/signup`} activeClassName='active'>
									{' '}
									signup{' '}
								</Link>{' '}
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

LogIn.propTypes = {
	user: PropTypes.object.isRequired,
};

export const mapDispatchToProps = dispatch => {
	return {
		log: async data => dispatch(await loginAction(data)),
	};
};

export const mapStateToProps = ({ loginRed }) => ({
	user: loginRed,
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
