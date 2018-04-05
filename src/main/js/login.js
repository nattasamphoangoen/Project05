var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import Shopping from './shopping.js';
import Menu from './menu.js';





class Login extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {username: '', password: ''};
		this.handlePassChange = this.handlePassChange.bind(this);
		this.handleUserNameChange = this.handleUserNameChange.bind(this);
	}

	renderToolbar() {
		return (
		  <Ons.Toolbar>
			<div className="center">Post Systems</div>
		  </Ons.Toolbar>
		);
	}

handleUserNameChange(e) {
		this.setState({username: e.target.value});
}

handlePassChange(e) {
		this.setState({password: e.target.value});
}

	pushPageShop() {
		this.props.navigator.pushPage({ component: Shop, props: { key: 'shopping' } });
	}

	loginButton(uName, pass) {
		client({ method: 'GET', path: '/api/users' }).done(response => {
			for(var index in response){
				if(index === "entity"){
					var arrt = response[index];
				}
			}
			var check = 0;
			var max = arrt._embedded.users.length;
			for(var i=0; i<max; i++){
				var user = arrt._embedded.users[i];
				if(user.username === uName && user.password === pass){
					check = 1;
				} 
			}

			if(check === 1){
				this.props.navigator.pushPage({ component: Main, props: { key: 'pass-login' } });
			}else{
				ons.notification.alert('Invalid Username/Password');
			}
		});
	}
	
	render() {
		return (
			<Ons.Page renderToolbar={this.renderToolbar} >
			<Ons.Row style={{marginTop: '10%'}}>
				<Ons.Col></Ons.Col>
				<Ons.Col>
					<Ons.Card style={{width: '70%', marginLeft: '15%'}}>
						<h3 style={{color: '#f55959'}}>
						<Ons.Icon icon='fa-unlock-alt' />&nbsp; Login
						</h3>
						
						<div>
							<p>
								<Ons.Input
								style={{width: '80%', marginLeft: '10%'}}
								modifier='underbar'
								placeholder='Username' 
								value={this.state.username} 
								onChange={this.handleUserNameChange}/>
							</p>
							<p>
								<Ons.Input
								style={{width: '80%', marginLeft: '10%'}}
								modifier='underbar'
								type='password'
								placeholder='Password' 
								value={this.state.password} 
								onChange={this.handlePassChange}/>
							</p>
						</div>
					
					<div style={{textAlign: 'right'}}>
						<Ons.Button style={{margin: '6px', background: '#f55959'}} onClick={this.loginButton.bind(this, this.state.username, this.state.password)}>Login</Ons.Button>
					</div>
				</Ons.Card>
			  </Ons.Col>
			  <Ons.Col></Ons.Col>
			  </Ons.Row>
			  <Ons.Fab position='bottom right' onClick={this.pushPageShop.bind(this)} style={{background: '#f55959'}}>
			  	<Ons.Icon icon='fa-shopping-cart' />
        	  </Ons.Fab>
			</Ons.Page>
		);
	}
}

class Shop extends React.Component {
	constructor(props) {
		super(props);
	  }

	render() {
	  return (
		<Ons.Page>
		  <Shopping/>
		</Ons.Page>
	  );
	}
  }

  class Main extends React.Component {
	constructor(props) {
		super(props);
	  }

	render() {
	  return (
		<Ons.Page>
		  <Menu/>
		</Ons.Page>
	  );
	}
  }

  class App extends React.Component {
	renderPage(route, navigator) {
	  route.props = route.props || {};
	  route.props.navigator = navigator;
  
	  return React.createElement(route.component, route.props);
	}
  
	render() {
	  return (
		<Ons.Navigator initialRoute={{ component: Login, props: {key: 'login'} }} renderPage={this.renderPage} />
	  );
	}
  }
  

ReactDOM.render(<App />, document.getElementById('react'));