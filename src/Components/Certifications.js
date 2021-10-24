import React, { Component } from 'react'

class Certifications extends Component {
	render() {
		if(this.props.data){
			var projects = this.props.data.projects.map(function(projects, index){
				var projectImage = 'images/certificates/'+projects.image;
				return <div key={index} className="columns portfolio-item">
					<div className="item-wrap">
						<a rel="noopener noreferrer" target="_blank" href={projects.url} title={projects.title}>
						<img alt={projects.title} src={projectImage} />
						<div className="overlay">
							<div className="portfolio-item-meta">
							<h5>{projects.title}</h5>
								<p>{projects.category}</p>
							</div>
						</div>
						<div className="link-icon"><i className="fa fa-link"></i></div>
						</a>
					</div>
				</div>
			})
		}

		return (
			<section id="certifications">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Some of my Certifications.</h1>
						<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
							{projects}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Certifications;