var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import Menu from './menu.js'

var button = {width: '25%', background:'#f55959'};
var bbutton = {width: '10%', background:'#f9c5ff', marginLeft: '45%', textAlign: 'center '};
var section = {margin: '16px',textAlign: 'center'};
var card = {width: '80%', marginLeft: '10%', textAlign: 'center'};
var h1 = {marginBottom: '50px'};
var h5 = {textAlign: 'left',marginLeft: '20%'};
var userID = 4;

class TruckDataCreateForm extends React.Component {

    constructor(props) {
    		super(props);

        this.state = {driver: 'Choose a driver', truck: 'Choose a truck', timestart: '', location: '',driverdata: [], truckdata: []};

        this.timestartChange = this.timestartChange.bind(this);
        this.locationChange = this.locationChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    	}

      renderToolbar() {
            return (
              <Ons.Toolbar>
                <div className="center">Truck Usage Data System</div>
              </Ons.Toolbar>
            );
      }

      handleSubmit(driver, truck, tst, lc) {
      console.log(driver +" "+ truck +" "+ tst +" "+ lc);
//        return(
//          client({method: 'GET',
//                  path: '/truckUsageSystem/'+userID+'/driver/'+driver+'/truckNo/'+truck+'/timeStart/'+tst+'/timeEnd/'+tnd}).done(res=>{
//                      console.log(res)
//                      ons.notification.alert(res.entity)
//          })
//        );
        let param = '?userID=' + userID + '&driver=' + Number(driver) + '&truck=' + Number(truck) + '&tst=' + tst + '&lc=' + lc;

        fetch('http://localhost:8080/saveTrackUsageData' + param, {
            method: 'GET',
            headers: {
                Accept: 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8',
            }
//            body: JSON.stringify({
//                timeStart : tst,
//                timeEnd : tnd,
//                truckData : Number(truck),
//                truckDriver : Number(driver),
//                createUser : Number(userID)
//            })
            }).then(data => {
                console.log(data);
                if (data.ok) {
                    ons.notification.alert("Success!");
                    this.setState({driver: 'Choose a driver'}),
                    this.setState({truck: 'Choose a truck'}),
                    this.setState({timestart: ''}),
                    this.setState({location: ''})
                } else if (data.status == 400) {
                    ons.notification.alert("Failed! : Choose driver and truck number");
                } else if (data.status == 500) {
                    ons.notification.alert("Failed! : Date is already taken or empty data");
                }

            }).catch(error => ons.notification.alert(error)
            );
      }

      timestartChange(e) {
        this.setState({timestart: e.target.value});
      }

      locationChange(e) {
        this.setState({location: e.target.value});
      }

      backPage() {
        this.props.navigator.pushPage({ component: MainMenu, props: { key: 'main-menu' } });
      }
      /*pushFetchPage() {
        this.props.navigator.pushPage({ component: FetchPage, props: { key: 'fetchpage' } });
      }*/

      componentDidMount(){
          fetch('http://localhost:8080/api/truckDrivers')
          .then(result => {
              return result.json();
          }).then(data => {
             //console.log('data',data)
          this.setState({driverdata: data._embedded.truckDrivers});
          });
          fetch('http://localhost:8080/api/truckDatas')
          .then(result => {
              return result.json();
          }).then(data => {
             //console.log('data',data)
          this.setState({truckdata: data._embedded.truckDatas});
          });
      }

        render(){
            //console.log(this.props) 
            return (
              <Ons.Page renderToolbar={this.renderToolbar}>
                {/*<h1>Truck Usage Darta Create Form Page</h1>*/}
                <Ons.Card style={card}>
                    <h1 style={h1}><ons-icon icon="fa-bookmark"> แบบฟอร์มบันทึกข้อมูลการใช้งานรถ</ons-icon></h1>
                    <p style={h5}>Driver:</p>
                    <p>
                        <Ons.Select id="select-box1"
                            style={{width: '50%'}}
                            value={this.state.driver}
                            modifier='underbar' float
                            onChange={(e) => {this.setState({driver: e.target.value})}}>
                                {this.state.driverdata.map((item, id1) => <option key={id1} value={item.id}>{item.firstName}</option>)}
                       </Ons.Select>
                    </p>

                    <p style={h5}>Truck:</p>
                    <p>
                        <Ons.Select id="select-box2"
                            style={{width: '50%'}}
                            value={this.state.truck}
                            modifier='underbar' float
                            onChange={(e) => {this.setState({truck: e.target.value})}}>
                                {this.state.truckdata.map((item, id2) => <option key={id2} value={item.id}>{item.truckNo}</option>)}
                        </Ons.Select>
                    </p>

                    <p style={h5}>Date Start:</p>
                    <p><Ons.Input id="text-box1"
                              style={{width: '50%'}}
                              value={this.state.timestart}
                              onChange={this.timestartChange}
                              modifier='underbar' float
                              placeholder='yyyy-MM-dd HH:mm:ss'/>
                    </p>

                    <p style={h5}>Location:</p>
                    <p><Ons.Input id="text-box2"
                              style={{width: '50%'}}
                              value={this.state.location}
                              onChange={this.locationChange}
                              modifier='underbar' float
                              placeholder='Location'/>
                    </p>

                    <Ons.Button id="submitbtn" style={button} onClick={this.handleSubmit.bind(this, this.state.driver, this.state.truck, this.state.timestart, this.state.location)}>Submit</Ons.Button>
                </Ons.Card>
                <Ons.Button style={bbutton} onClick={this.backPage.bind(this, navigator)}>Back</Ons.Button>
                {/*<Ons.Button onClick={this.pushFetchPage.bind(this, navigator)}>View list</Ons.Button>*/}

              </Ons.Page>
            );
        }
}

/*class FetchPage extends React.Component {

  constructor(props) {
		super(props);

    this.state = {driverdata: [], truckdata: []};
	}

  renderToolbar() {
        return (
          <Ons.Toolbar>
            <div className="center">Truck Usage Data System</div>
          </Ons.Toolbar>
        );
  }

  componentDidMount(){
      fetch('http://localhost:8080/api/truckDrivers')
      .then(result => {
          return result.json();
      }).then(data => {
      this.setState({driverdata: data._embedded.truckDrivers});
      });
  }

  render(){
      return (
        <Ons.Page renderToolbar={this.renderToolbar}>
        <p>
            {this.state.driverdata.map((item, id) =>
                  <div>
                      <h6>{item.firstName} {item.lastName}</h6>
                  </div>
              )}
        </p>
        </Ons.Page>
      );
  }
}*/

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

export default class TruckUsageData extends React.Component {
	renderPage(route, navigator) {
	  route.props = route.props || {};
	  route.props.navigator = navigator;

	  return React.createElement(route.component, route.props);
	}

	render() {
	  return (
		<Ons.Navigator initialRoute={{ component: TruckDataCreateForm, props: {key: 'truckcreate'} }} renderPage={this.renderPage} />
	  );
	}
}
ReactDOM.render(<TruckUsageData />, document.getElementById('react'));
