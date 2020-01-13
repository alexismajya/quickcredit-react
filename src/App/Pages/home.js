import React from 'react';

export class Home extends React.Component {
	render() {
		return (
			<div className='d-flex'>
				{/* <Header /> */}
				<div id='main' class='home page'>
					<div id='log1' class='log1forms'>
						<div id='log2'>
							<div id='log3'></div>
							<div id='allforms' class='forms'>
								<form id='homepage ' method='POST'>
									<h1> welcome !</h1>
									<p class='homep'>
										{' '}
										QCredit is an online lending platform that provides short term soft loans to
										individuals.
									</p>
									<br></br>
									<p class='homep'>
										This helps solve problems of financial inclision as a way to alleviate poveerty
										and empower low income earners.
									</p>{' '}
									<br></br>
									<p class='homep'>
										Dear clients, sign up <a href='signup'>here</a> and have a journey with us.
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
