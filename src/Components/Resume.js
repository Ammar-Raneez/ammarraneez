import React, { Component } from 'react';

class Resume extends Component {
	render() {
		if(this.props.data){
			var education = this.props.data.education.map(function(education){
				return <div key={education.school}><h3>{education.school}</h3>
				<p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
				<p>{education.description}</p></div>
			});
			var work = this.props.data.work.map(function(work, index){
				return <div key={work.company}><h3>{work.company}</h3>
					<p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
					{typeof work.description === 'string' ? 
						<p>{work.description}</p>
						:
						<ul>
							<li>{work.description[0]}</li>
							<li>{work.description[1]}</li>
						</ul>
					}
				</div>
			});
		}

		return (
			<section id="resume">
				<div className="row education">
					<div className="three columns header-col">
						<h1><span>Education</span></h1>
					</div>

					<div className="nine columns main-col">
						<div className="row item">
						<div className="twelve columns">
							{education}
						</div>
						</div>
					</div>
				</div>

				<div className="row work">
					<div className="nine columns header-col">
						<h1><span>Work</span></h1>
					<div style={{ marginTop: '20px' }} className="three columns main-col">
					{work}
					</div></div>
				</div>

				<div className="row skill">
					<div className="three columns header-col">
						<h1><span>Skills</span></h1>
					</div>
					<br />

					<div
						style={{marginTop: '30px', padding: '0 20px'}}
					>
						<h4>Frontend</h4>
						<p>
							<a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
									alt="html5"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://handlebarsjs.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/handlebarsjs/handlebarsjs-ar21.svg"
									alt="handlebars"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
									alt="css3"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
									alt="tailwind"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://lesscss.org/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/lesscss/lesscss-icon.svg"
									alt="sass"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
									alt="sass"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
									alt="bootstrap"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://materializecss.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg"
									alt="materialize"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/javascript/javascript-vertical.svg"
									alt="js"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
									alt="typescript"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg"
									alt="angular"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/AliasIO/wappalyzer/79011e2000d4cfc20b71e85ce7be3c03b0a88e86/src/drivers/webextension/images/icons/Svelte.svg"
									alt="svelte"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"
									alt="vue"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
									alt="react"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
									alt="nextjs"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://reactnative.dev/img/header_logo.svg"
									alt="reactnative"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://redux.js.org" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
									alt="redux"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://dart.dev" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
									alt="dart"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://flutter.dev" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
									alt="flutter"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
						</p>

						<h4>Backend</h4>
						<p>
						<a href="https://www.serverless.com/" target="_blank" rel="noopener noreferrer">
							<img
								src="https://www.vectorlogo.zone/logos/serverless/serverless-icon.svg"
								alt="serverless"
								width="40"
								height="40"
								style={{margin: '10px'}}
							/>
						</a>
							<a href="https://www.java.com" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
									alt="java"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://www.python.org" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
									alt="python"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"
									alt="flask"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
									alt="scikit_learn"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://www.tensorflow.org" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
									alt="tensorflow"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://opencv.org/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg"
									alt="opencv"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
								<a href="https://www.r-project.org/" target="_blank" rel="noopener noreferrer">
									<img
										src="https://www.vectorlogo.zone/logos/r-project/r-project-official.svg"
										alt="R"
										width="40"
										height="40"
										style={{margin: '10px'}}
									/>
								</a>
							<a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
									alt="nodejs"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
									alt="express"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg"
									alt="nest"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://deno.land/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/simple-icons/simple-icons/de63615eebd106ac1bcab3318ec85e1b32168ccf/icons/deno.svg"
									alt="deno"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://caolan.github.io/async/v3/docs.html" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/asyncjs/asyncjs-ar21.svg"
									alt="async"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://lodash.com/docs/4.17.15" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/lodash/lodash-icon.svg"
									alt="lodash"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
						</p>

						<h4>Databases</h4>
						<p>
							<a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
									alt="mongodb"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
									alt="mysql"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
									alt="postgresql"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://graphql.org" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
									alt="graphql"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://redis.io/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/redis/redis-icon.svg"
									alt="redis"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
									alt="firebase"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
						</p>

						<h4>Tools</h4>
						<p>
							<a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"
									alt="netlify"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg"
									alt="kaggle"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://hasura.io/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/hasuraio/hasuraio-icon.svg"
									alt="hasura"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://expo.dev/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg"
									alt="expo"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://auth0.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/auth0/auth0-icon.svg"
									alt="auth0"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg"
									alt="npm"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://gruntjs.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/gruntjs/gruntjs-icon.svg"
									alt="grunt"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/gulpjs/gulpjs-ar21.svg"
									alt="gulp"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/docker/docker-official.svg"
									alt="docker"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/jupyter/jupyter-ar21.svg"
									alt="jupyter"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://heroku.com" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
									alt="heroku"
									width="40"
									height="40" 
									style={{margin: '10px'}}
								/> 
							</a>
							<a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
									alt="figma"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://www.lucidchart.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/lucidchart/lucidchart-icon.svg"
									alt="lucid"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://www.atlassian.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21.svg"
									alt="jira"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"
									alt="vscode"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/jetbrains/jetbrains-icon.svg"
									alt="jetbrain"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
									alt="git"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
						</p>

						<h4>Cloud</h4>
						<p>
							<a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
									alt="aws"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://azure.microsoft.com/en-in/" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
									alt="azure"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
							<a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer">
								<img
									src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
									alt="gcp"
									width="40"
									height="40"
									style={{margin: '10px'}}
								/>
							</a>
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Resume;
