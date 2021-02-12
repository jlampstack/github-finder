import { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';

export class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navbar title='Github Finder' icon='fab fa-github' />
				{/* <Navbar title='Github Finder' icon='fab fa-github' /> */}
				<h2>Github Finder</h2>
				<User />
			</div>
		);
	}
}

export default App;
