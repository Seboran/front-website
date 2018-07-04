// pkg
import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
// material



import './App.css';
import { Typography } from '@material-ui/core';
import SideBar from './components/SideBar';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<SideBar>
						
						<Typography><Link to='/'>Home</Link></Typography>
						<Typography><Link to='/blog'>Blog</Link></Typography>
						<Typography><Link to='/contact'>Contact</Link></Typography>
						
					</SideBar>
					
					<div className='main'>
						<Route exact path='/' component={() => <Home />} />
						<Route path='/blog' component={() => <Blog />} />
						<Route path='/contact' component={() => <Contact />} />

					</div>
						
						
				
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
