var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import Menu from './menu.js'

var button = {width: '25%', background:'#f55959'};
var bbutton = {width: '10%', background:'#f9c5ff', marginLeft: '45%', textAlign: 'center '};
var section = {margin: '16px',textAlign: 'center'};
var card = {width: '60%', marginLeft: '20%', textAlign: 'center'};
var h1 = {marginBottom: '50px'};
var userID = 4;

class Status extends React.Component {

    renderToolbar() {
        return (
          <Ons.Toolbar>
            <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
            <div className="center">Post System Main Menu</div>
          </Ons.Toolbar>
        );
    }

//Push Page Function for call components
    pushPageStatus1() {
		  this.props.navigator.pushPage({ component: Status1, props: { key: 'status1' } });
    }

    pushPageStatus2() {
		  this.props.navigator.pushPage({ component: Status2, props: { key: 'status2' } });
    }

    pushPageStatus3() {
		  this.props.navigator.pushPage({ component: Status3, props: { key: 'status3' } });
    }

    pushPageStatus4() {
		  this.props.navigator.pushPage({ component: Status4, props: { key: 'status4' } });
    }

    backPage() {
          this.props.navigator.pushPage({ component: MainMenu, props: { key: 'main-menu' } });
    }

//Button sub menu on main page of Status notification
    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar}>
                <h1>Status Notification Page</h1>
                <section style={section}>
                    <Ons.Button style={button} onClick={this.pushPageStatus1.bind(this, navigator)}>
                        รับเข้าระบบ
                    </Ons.Button>
                </section>

                <section style={section}>
                    <Ons.Button style={button} onClick={this.pushPageStatus2.bind(this, navigator)}>
                        ปิดถุงต้นทาง
                    </Ons.Button>
                </section>

                <section style={section}>
                    <Ons.Button style={button} onClick={this.pushPageStatus3.bind(this, navigator)}>
                        ปิดถุงปลายทาง
                    </Ons.Button>
                </section>

                <section style={section}>
                    <Ons.Button style={button} onClick={this.pushPageStatus4.bind(this, navigator)}>
                        นำจ่าย
                    </Ons.Button>
                </section>
                <Ons.Button style={bbutton} onClick={this.backPage.bind(this, navigator)}>Back</Ons.Button>
            </Ons.Page>
        );
    }
}

class MainMenu extends React.Component {

  constructor(props) {
		super(props);
	  }

    render(){
        return (
          <Ons.Page>
            <Menu/>
          </Ons.Page>
        );
    }
}

//When click on first menu button will call this class
class Status1 extends React.Component {

      constructor(props) {
        super(props);
        this.state = {text: ''};

        this.textChange = this.textChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }

      renderToolbar() {
            return (
              <Ons.Toolbar>
                <div className="center">Post System</div>
              </Ons.Toolbar>
            );
        }

      handleSubmit(trackNumber , status) {
        return(

          client({method: 'GET',
                  path: '/statusSystem/'+userID+'/tracknum/'+trackNumber+'/status1/'+status}).done(res=>{
                      console.log(res)
                      ons.notification.alert(res.entity.status)
                      this.setState({text: ''})
          })
        );
      }

  textChange(e) {
    this.setState({text: e.target.value});
  }
    
  backPage() {
    this.props.navigator.popPage();
  }

    render(){
        return (
          <Ons.Page renderToolbar={this.renderToolbar}>
              <Ons.Card style={card}>
                  <h1 style={h1}><ons-icon icon="fa-bookmark"> สถานะรับเข้าระบบ</ons-icon></h1>
                  <p><Ons.Input id='textbox-1' style={{width: '50%'}}
                            value={this.state.text} 
                            onChange={this.textChange} 
                            modifier='underbar' float
                            placeholder='Enter tracking number' />
                  </p>
                  <Ons.Button style={button} onClick={this.handleSubmit.bind(this, this.state.text, "รับเข้าระบบ")}>Submit</Ons.Button>
              </Ons.Card>
              <Ons.Button style={bbutton} onClick={this.backPage.bind(this, navigator)}>Back</Ons.Button>
          </Ons.Page>
        );
    }
}

//When click on second menu button will call this class
class Status2 extends React.Component {

      constructor(props) {
        super(props);
        this.state = {text: ''};

        this.textChange = this.textChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      renderToolbar() {
            return (
              <Ons.Toolbar>
                <div className="center">Post System</div>
              </Ons.Toolbar>
            );
        }

      handleSubmit(trackNumber , status) {
        return(
              client({method: 'GET',
              path: '/statusSystem/'+userID+'/tracknum/'+trackNumber+'/status2/'+status}).done(res=>{
                      console.log(res)
                      ons.notification.alert(res.entity.status)
                      this.setState({text: ''})
              })
        );
      }

      textChange(e) {
        this.setState({text: e.target.value});
      }
        
      backPage() {
        this.props.navigator.popPage();
      }

    render(){
        return (
          <Ons.Page renderToolbar={this.renderToolbar}>
                <Ons.Card style={card}>
                    <h1><ons-icon icon="fa-bookmark"> สถานะปิดถุงต้นทาง</ons-icon></h1>
                    <p><Ons.Input id='textbox-1' style={{width: '50%'}}
                              value={this.state.text} 
                              onChange={this.textChange} 
                              modifier='underbar' float
                              placeholder='Enter tracking number' />
                    </p>
                    <Ons.Button style={button} onClick={this.handleSubmit.bind(this, this.state.text,"ปิดถุงต้นทาง")}>Submit</Ons.Button>
                </Ons.Card>
            <Ons.Button style={bbutton} onClick={this.backPage.bind(this, navigator)}>Back</Ons.Button>
          </Ons.Page>
        );
      }
}

//When click on third menu button will call this class
class Status3 extends React.Component {

      constructor(props) {
        super(props);
        this.state = {text: ''};

        this.textChange = this.textChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      renderToolbar() {
            return (
              <Ons.Toolbar>
                <div className="center">Post System</div>
              </Ons.Toolbar>
            );
        }

      handleSubmit(trackNumber , status) {
        return(
              client({method: 'GET',
              path: '/statusSystem/'+userID+'/tracknum/'+trackNumber+'/status3/'+status}).done(res=>{
                    console.log(res)
                    ons.notification.alert(res.entity.status)
                    this.setState({text: ''})
              })
            );
      }

      textChange(e) {
        this.setState({text: e.target.value});
      }
        
      backPage() {
        this.props.navigator.popPage();
      }

        render(){
            return (
              <Ons.Page renderToolbar={this.renderToolbar}>
                    <Ons.Card style={card}>
                        <h1><ons-icon icon="fa-bookmark"> สถานะปิดถุงปลายทาง</ons-icon></h1>
                        <p><Ons.Input id='textbox-1' style={{width: '50%'}}
                                  value={this.state.text} 
                                  onChange={this.textChange} 
                                  modifier='underbar' float
                                  placeholder='Enter tracking number' />
                        </p>
                        <Ons.Button style={button} onClick={this.handleSubmit.bind(this, this.state.text, "ปิดถุงปลายทาง")}>Submit</Ons.Button>
                    </Ons.Card>
                <Ons.Button style={bbutton} onClick={this.backPage.bind(this, navigator)}>Back</Ons.Button>
              </Ons.Page>
            );
          }
}

//When click on fourth menu button will call this class
class Status4 extends React.Component {

      constructor(props) {
        super(props);
        this.state = {text: ''};

        this.textChange = this.textChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      renderToolbar() {
            return (
              <Ons.Toolbar>
                <div className="center">Post System</div>
              </Ons.Toolbar>
            );
        }

      handleSubmit(trackNumber , status) {
        return(
              client({method: 'GET',
              path: '/statusSystem/'+userID+'/tracknum/'+trackNumber+'/status4/'+status}).done(res=>{
                    console.log(res)
                    ons.notification.alert(res.entity.status)
                    this.setState({text: ''})
              })
        );
      }

      textChange(e) {
        this.setState({text: e.target.value});
      }
        
        backPage() {
          this.props.navigator.popPage();
        }

        render(){
            return (
              <Ons.Page renderToolbar={this.renderToolbar}>
                    <Ons.Card style={card}>
                        <h1><ons-icon icon="fa-bookmark"> สถานะนำจ่าย</ons-icon></h1>
                        <p><Ons.Input id='textbox-1' style={{width: '50%'}}
                                  value={this.state.text} 
                                  onChange={this.textChange} 
                                  modifier='underbar' float
                                  placeholder='Enter tracking number' />
                        </p>
                        <Ons.Button style={button} onClick={this.handleSubmit.bind(this, this.state.text, "นำจ่าย")}>Submit</Ons.Button>
                    </Ons.Card>
                <Ons.Button style={bbutton} onClick={this.backPage.bind(this, navigator)}>Back</Ons.Button>
              </Ons.Page>
            );
        }
}

export default class StatusNotification extends React.Component {
	renderPage(route, navigator) {
	  route.props = route.props || {};
	  route.props.navigator = navigator;
  
	  return React.createElement(route.component, route.props);
	}
  
	render() {
	  return (
		<Ons.Navigator initialRoute={{ component: Status, props: {key: 'status'} }} renderPage={this.renderPage} />
	  );
	}
}
ReactDOM.render(<StatusNotification />, document.getElementById('react'));