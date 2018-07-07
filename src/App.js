// pkg
import React, { Component } from 'react';
// material


import scrollToComponent from 'react-scroll-to-component';
import './App.css';
import { List, ListItem, ListItemText } from '@material-ui/core';
import SideBar from './components/SideBar';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Links from './Links';
import Projects from './Projects';
import LittleNotification from './components/LittleNotification';

function ListItemNav({menuName, onClick}) {

	return (
		<ListItem button onClick={onClick}>
			<ListItemText>{menuName}</ListItemText>
		</ListItem>
	);
};

const pages = [
	{link: '/', menuName:'Home', Component: (key) => <Home key={key}/>},
	{link: '/projects', menuName:'Projects', Component: (key) => <Projects key={key}/>},
	
	{link: '/contact', menuName: 'Contact', Component: (key) => <Contact key={key} />},
	{link: '/links', menuName: 'Links', Component: (key) => <Links key={key}/>}
]

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currentPage: '/'
		}
	}

	onClick = link => () => {
		this.setState({
			currentPage: link
		}, () => {
			
			scrollToComponent(this[link], {offset: -100, align: 'top'});
			



		});
	}

	render() {
		return (
			<div className="App">
				<LittleNotification />
				<SideBar>
					<List>
						{pages.map(({link, menuName}, index) => 
							<ListItemNav onClick={this.onClick(link)} link={link} menuName={menuName} key={index} />
						)}
						
					</List>
					
					
				</SideBar>

				<div className='main'>
					{
						pages.map(({link, Component}, index) => 
							<div 
								style={{paddingBottom: '500px', height: '600px'}} 
								ref={(section) => this[link] = section} 
								key={index} >

								{Component(index)}

							</div>
						)
					}
					

				</div>
					
					
			
			</div>
		);
	}
}

export default App;
