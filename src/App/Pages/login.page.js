import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginAction from '../../redux/actions/login.action';
//import Header from '../Components/Header';
import axios from 'axios';

export class LogIn extends React.Component {
	constructor(props) {
		super(props);
		this.handleInput = this.handleInput.bind();
		this.handleSubmit = this.handleSubmit.bind();
		this.fetchUsers = this.fetchUsers.bind();
	}
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
		this.fetchUsers();
	};
	fetchUsers() {
		const login = axios.get('https://alexis-qc-backend-staging.herokuapp.com/api/v1/users');
	}

	render() {
		const { password, email } = this.state;
		const { alert, message } = this.props.user;
		return (
			<div className='d-flex'>
				{/* <Header /> */}
				<div className='mainlogin'>
					<div id='log1' class='log1forms'>
						<div id='log2'>
							<div id='log3'></div>
							<div id='allforms' class='forms'>
								<form method='post' onSubmit={this.handleSubmit}>
									<h1> LOGIN FORM</h1>
									{message && (
										<div name='response' className={alert}>
											{message}
										</div>
									)}
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
									<br></br>
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
										<Link to={`/password/reset`} className='active'>
											{' '}
											Forgot Password{' '}
										</Link>{' '}
									</p>
									<button class='allbutt' type='submit'>
										{'Login'}
									</button>
									Quick credit?
									<Link to={`/signup`} className='active'>
										{' '}
										signup{' '}
									</Link>{' '}
								</form>
							</div>
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

export const mapStateToProps = ({ loginRed }) => ({
	user: loginRed,
});
export const mapDispatchToProps = dispatch => {
	return {
		log: async data => dispatch(await loginAction(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
