import React from 'react'; 
import './nav.css';

export class Nav extends React.Component {
	render() {
		return(
			<nav>
				<div class="link_container">
					<ul>
						<li class="name_li li" id="name_li"><a href="#intro_nav" class="name_nav">Brian Newell</a></li>
						<li class="projects_li li"><a href="#projects_nav" class="projects_nav">Projects</a></li>
						<li class="about_li li"><a href="https://placeholder.com"><img src="http://via.placeholder.com/150x50"></img></a></li>
						<li class="about_li li"><a href="#about_nav" class="about_nav">About</a></li>
						<li class="about_li li"><a href="#about_nav" class="about_nav">About</a></li>
					</ul>
				</div>
			</nav>
			);
	}
}

