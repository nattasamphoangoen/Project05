var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
var data;
var userId = 1;

export default class Event extends React.Component {
	renderPage(route, navigator) {
	  route.props = route.props || {};
	  route.props.navigator = navigator;
  
	  return React.createElement(route.component, route.props);
    }
    
  
	render() {
	  return (
		<Ons.Navigator initialRoute={{ component: EventMain, props: {key: 'login'} }} renderPage={this.renderPage} />
	  );
	}
}

  class EventMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  eventTitle: '',
                        eventDuration: '',
                        description: '',
                        eventType: '',
                        
                        events: [] };
        this.getEvent();

    }

    // updateEvent() {
    //       client({ method: 'GET', path: '/api/events' }).done(response => {
    //         for(var index in response){
    //           if(index === "entity"){
    //             var arrt = response[index];
    //           }
    //         }
    //         var check = 0;
    //         var max = arrt._embedded.events.length;
    //         for(var i=0; i<max; i++){
    //           var eventdata = arrt._embedded.events[i];
    //           if(eventdata.title != null){
    //             check = 1;
    //             data = eventdata;
    //           }
    //         }
    //         // this.setState({ events: response.entity._embedded.events});
    //       });
    //   }
   
    refreshPage(){
        client({ method: 'GET', path: '/api/events' }).done(response => {
            this.setState({ events: response.entity._embedded.events});
          });
    }

    pushPageCreateEvent() {
		  this.props.navigator.pushPage({ component: CreateEventMenu, props: { key: 'create-event' } });
    }

    // pushPageChartEvent() {
	// 	  this.props.navigator.pushPage({ component: ChartEventMenu, props: { key: 'chart-event' } });
    // }

    // pushPageSumEvent() {
	// 	  this.props.navigator.pushPage({ component: SumEventMenu, props: { key: 'sum-event' } });
    // }

    pushPageEventSubmit(abc, event) {
        this.props.navigator.pushPage({ component: EventSubmit, props: { key: 'sum-event', elist: abc  } });
  }

//   pushThisEvent(titleName, type, id) {
//     client({ method: 'GET', path: '/api/events' }).done(response => {
//         for(var index in response){
//             if(index === "entity"){
//                 var arrt = response[index];
//             }
//         }
//         var check = 0;
//         var max = arrt._embedded.events.length;
//         for(var i=0; i<max; i++){
//             var types = arrt._embedded.events[i];
//             if(types.eventType === type && types.password === pass){
//                 check = 1;
//             } 
//         }

//         if(check === 1){
//             this.props.navigator.pushPage({ component: Main, props: { key: 'pass-login' } });
//         }else{
//             ons.notification.alert('Invalid Username/Password');
//         }
//     });
// }

    renderToolbar() {
      return (
          <Ons.Toolbar>
              <div className='center'>Manage Event</div>
          </Ons.Toolbar>
      );
    }

    getEvent() {
        client({ method: 'GET', path: '/api/events' }).done(response => {
          this.setState({ events: response.entity._embedded.events});
        });
    }
    // doing
    renderRowDonation(row) {
        if(row.type === 'donate'){
            return (
            <Ons.ListItem key={row._links.self.href}>
                <Ons.Card  onClick={this.pushPageEventSubmit.bind(this, row)}>
                    <div style={{borderColor: '#f55959'}} >
                        <h5>{row.title}</h5>
                    </div>
                </Ons.Card>
            </Ons.ListItem>
            )
        }
      }

      renderRowConcert(row) {
        if(row.type === 'concert'){
            return (
            <Ons.ListItem key={row._links.self.href}>
                <Ons.Card onClick={this.pushPageEventSubmit.bind(this, row)}>
                <div style={{borderColor: '#f55959'}} >
                    <h5>{row.title}</h5>
                </div>
            </Ons.Card>
            </Ons.ListItem>
            )
        }
      }

      renderRowLiveShow(row) {
        if(row.type === 'liveshow'){
            return (
            <Ons.ListItem key={row._links.self.href}>
               <Ons.Card onClick={this.pushPageEventSubmit.bind(this, row)}>
               <div style={{borderColor: '#f55959'}} >
                   <h5>{row.title}</h5>
               </div>
           </Ons.Card>
            </Ons.ListItem>
            )
        }
      }


      renderRowSeminar(row) {
        if(row.type === 'seminar'){
            return (
            <Ons.ListItem key={row._links.self.href}>
               <Ons.Card onClick={this.pushPageEventSubmit.bind(this, row)}>
               <div style={{borderColor: '#f55959'}} >
                   <h5>{row.title}</h5>
               </div>
           </Ons.Card>
            </Ons.ListItem>
            )
        }
      }



    render() {
        return (
          <Ons.Page renderToolbar={this.renderToolbar} >
            <Ons.SpeedDial position='bottom right'>
                <Ons.Fab>
                    <Ons.Icon icon='fa-bars' />
                </Ons.Fab>
                <Ons.SpeedDialItem onClick={this.pushPageCreateEvent.bind(this)}>
                     <Ons.Icon icon='fa-plus-square-o' />
                </Ons.SpeedDialItem>
                {/* <Ons.SpeedDialItem onClick={this.pushPageChartEvent.bind(this)}>
                     <Ons.Icon icon='fa-area-chart' />
                </Ons.SpeedDialItem>
                <Ons.SpeedDialItem onClick={this.pushPageSumEvent.bind(this)}>
                     <Ons.Icon icon='fa-gift' />
                 </Ons.SpeedDialItem> */}
            </Ons.SpeedDial>
            
            <div><h1>&nbsp;&nbsp; Event list
            {/* <Ons.Button 
                style={{margin: '14px'}} modifier='cta'
                onClick={this.updateEvent.bind(this, navigator)}>
                update
                </Ons.Button> */}
                 <Ons.Button 
                style={{margin: '14px'}} modifier='cta'
                onClick={this.refreshPage.bind(this, navigator)}>
                refresh
                </Ons.Button>
             </h1>
            
                
            </div>
            <Ons.Row>
                <Ons.Col>
                    <Ons.List dataSource={this.state.events}
                            renderRow={this.renderRowDonation.bind(this)}
                            renderHeader={() => <Ons.ListHeader>Donation-list</Ons.ListHeader>}
                              />
                </Ons.Col>
                <Ons.Col>
                    <Ons.List dataSource={this.state.events}
                            renderRow={this.renderRowConcert.bind(this)}
                            renderHeader={() => <Ons.ListHeader>Concert-list</Ons.ListHeader>}
                              />
                </Ons.Col>
            </Ons.Row>
            <Ons.Row>
                <Ons.Col>
                    <Ons.List dataSource={this.state.events}
                            renderRow={this.renderRowLiveShow.bind(this)}
                            renderHeader={() => <Ons.ListHeader>LiveShow-list</Ons.ListHeader>}
                              />
                </Ons.Col>
                <Ons.Col>
                    <Ons.List dataSource={this.state.events}
                            renderRow={this.renderRowSeminar.bind(this)}
                            renderHeader={() => <Ons.ListHeader>Seminar-list</Ons.ListHeader>}
                             />
                </Ons.Col>
            </Ons.Row>
           
          </Ons.Page>
          
        );
      }
  }


  class CreateEventMenu extends React.Component {

     constructor(props) {
       super(props);
       this.state = {eventTitle: '',
                     eventDuration: '',
                     description: '',
                     eventType: 'donate',
                     textReturn: ''
                    };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
     }



    renderToolbar() {
      return (
          <Ons.Toolbar>
              <div className='center'>Manage Event</div>
          </Ons.Toolbar>
      );
    }


    handleTitleChange(e) {
        this.setState({eventTitle: e.target.value});
    }

    handleDescChange(e) {
        this.setState({description: e.target.value});
    }

    handleDateChange(e) {
        this.setState({eventDuration: e.target.value});
    }

    handleTypeChange(event) {
        this.setState({eventType: event.target.value});
    }
    
    // {
    //     if(this.state.blood == null || this.state.urin == null ||
    //       this.state.spinal_cord == null||
    //       this.state.infection == null || this.state.microbiological_culture == null || this.state.x_sray == null ||
    //       this.state.ultraSound == null || this.state.mri == null || this.state.biopsy == null || this.state.autopsy == null ||this.state.d_patient == null ||this.state.d_doctor == null 
    //     ){
    //       ons.notification.alert('กรุณากรอกข้อมูลให้ครบ!')
    //     }else{
    //       this.setState({dialogShown: true});
    //     }
    //   }  

    createEventList(title, type, dateTime, description) {
        return (
        client({method: 'GET', path: '/event/'+userId+'/create/'+title+'/'+type+'/'+dateTime+'/'+description+'/'}).done( 
            ons.notification.alert('Success!'),
            this.setState({eventDuration: ''}),
            this.setState({eventTitle: ''}),
            this.setState({description: ''})
            
        )
        );
    }

    popPage() {
        this.props.navigator.popPage();
    } 

      render(){
          return (
            <Ons.Page renderToolbar={this.renderToolbar}>                    
                    <Ons.Row>
                        <Ons.Col><h1></h1>
                            <h2 style={{marginBottom: '2em' , textAlign: 'center'}}>&nbsp;รายละเอียดการสร้างกิจกรรม</h2>
                            <p >&nbsp;&nbsp;&nbsp;&nbsp;๑.) ชื่อกิจกรรมควรมีความยาวไม่เกิน 69 อักษระ</p>
                            <p >&nbsp;&nbsp;&nbsp;&nbsp;๒.) ควรตั้งชื่อให้สร้างสรรค์ต่อระบบของเรา</p>                   
                            <p >&nbsp;&nbsp;&nbsp;&nbsp;๓.) ประเภทของการสร้างกิจกรรมมีอยู่ใน drop down</p>
                            <p >&nbsp;&nbsp;&nbsp;&nbsp;๔.) โปรดระบุวันที่สิ้นสุดของกิจกรรมที่สร้าง</p>
                            <p >&nbsp;&nbsp;&nbsp;&nbsp;๕.) โปรดกรอกรายละเอียดของกิจกรรมให้ครบถ้วน</p>
                            <p >&nbsp;&nbsp;&nbsp;&nbsp;๖.) กรุณาจิ้มปุ่ม create เบาๆ</p>
                           
                        </Ons.Col>
                        <Ons.Col>
                            <Ons.Card>
                                <div style={{textAlign: 'center'}} style={{marginBottom: '2em'}}>Create Event</div>
                                <p > Title name:
                                    <Ons.Input
                                     modifier='underbar' 
                                     placeholder='Event title'
                                     value={this.state.eventTitle} 
                                     onChange={this.handleTitleChange}/>
                                </p>
                                <p > Title Type:
                                    <Ons.Select  value={this.state.eventType} onChange={this.handleTypeChange}>
                                        <option value="donate">Donate</option>
                                        <option value="concert">Concert</option>
                                        <option value="liveshow">LiveShow</option>
                                        <option value="seminar">Seminar</option>
                                    </Ons.Select>
                                </p>
                                <p > Event Date :
                                    <Ons.Input 
                                     modifier='underbar' type='date' 
                                     placeholder='Event DateTime'
                                     value={this.state.eventDuration}
                                     onChange={this.handleDateChange} />
                                </p>
                                <p > Event Description:
                                    <Ons.Input 
                                     modifier='underbar' 
                                     placeholder='description' 
                                     value={this.state.description}
                                     onChange={this.handleDescChange} />
                                </p>
                                <div style={{textAlign: 'center'}}>
                                    <Ons.Button  
                                     style={{margin: '6px'}} 
                                     onClick={this.createEventList.bind(this, this.state.eventTitle, this.state.eventType, this.state.eventDuration, this.state.description)}>
                                        Create
                                     </Ons.Button>                                    
                                </div>
                            </Ons.Card>
                        </Ons.Col>                       
                    </Ons.Row>
                    <p style={{textAlign: 'center'}}>
                    <Ons.Button 
                    style={{margin: 'center', textAlign: 'center ', marginBottom: '5%'}}
                    onClick={this.popPage.bind(this, navigator)}>
                    Back
                    </Ons.Button>
                    </p>
            </Ons.Page>
          );
      }
  }

  class EventSubmit extends React.Component {

    constructor(props) {
        super(props);
        this.state = { textname: '',
                    textamount: '' ,
                    events: [] 
             };
        this.getEvent();
        this.textNChange = this.textNChange.bind(this);
        this.textAChange = this.textAChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    //         getEvent() {
    //       client({ method: 'GET', path: '/api/events' }).done(response => {
    //         for(var index in response){
    //           if(index === "entity"){
    //             var arrt = response[index];
    //           }
    //         }
    //         var check = 0;
    //         var max = arrt._embedded.events.length;
    //         for(var i=0; i<max; i++){
    //           var eventdata = arrt._embedded.events[i];
    //           if(eventdata.title != null){
    //             check = 1;
    //             data = eventdata;
    //           }
    //         }
    //         this.setState({ events: response.entity._embedded.events});
    //       });
    //   }

    getEvent() {
        client({ method: 'GET', path: '/api/events' }).done(response => {
          this.setState({ events: response.entity._embedded.events});
        });
    }

    renderToolbar() {
      return (
          <Ons.Toolbar>
              <div className='center'>Event Detail</div>
          </Ons.Toolbar>
      );
    }
    renderEventSubmit(row){
       {
            return (
            <Ons.ListItem key={row._links.self.href}
            style={{textAlign: 'center '}}
                > 
                {/* <h1></h1> */}
                {/* <Ons.Card>
                    <div>
                        <h5>{row.title} </h5>
                        <p></p>
                        <p>{row.type}</p>
                        <p>{row.desc}</p>
                        <p>{row.dateTime}</p>
                    </div>
                     
                </Ons.Card> */}
            </Ons.ListItem>
            )
        }
    }

    // updateEvent() {
    //     client({ method: 'GET', path: '/api/events' }).done(response => {
    //       for(var index in response){
    //         if(index === "entity"){
    //           var arrt = response[index];
    //         }
    //       }
    //       var check = 0;
    //       var max = arrt._embedded.events.length;
    //       for(var i=0; i<max; i++){
    //         var eventdata = arrt._embedded.events[i];
    //         if(eventdata.title != null){
    //           check = 1;
    //           data = eventdata;
    //         }
    //       }
    //       // this.setState({ events: response.entity._embedded.events});
    //     });
    // }


    handleSubmit(customername , amount) {
        return(

          client({method: 'GET',
                  path: '/eventtransaction/'+userId+'/create/'+this.props.elist.title+'/'+this.props.elist.type+'/'+customername+'/'+amount}).done(res=>{
                      console.log(res),
                      ons.notification.alert('Success!'),
                      this.setState({textname: ''}),
                      this.setState({textamount: ''})
          }));
          }
        
      


    textNChange(e) {
        this.setState({textname: e.target.value});
      }
      
      textAChange(e) {
        this.setState({textamount: e.target.value});
      }

    popPage() {
        this.props.navigator.popPage();
    } 

      render(){
          console.log(this.props.elist.title);
          return (
            <Ons.Page renderToolbar={this.renderToolbar}>
            {/* <Ons.row>
                <Ons.Col>
                </Ons.Col>
                <Ons.Col>
          
            </Ons.Col>
            <Ons.Col>
            </Ons.Col>
            </Ons.row> */}
        <Ons.List 
             dataSource={this.state.events}
                      renderRow={this.renderEventSubmit} 
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;Submit Detail
            <Ons.Card>
            <div 
            className="title" 
            >
                <h1 style={{textAlign: 'center '}}>{this.props.elist.title}</h1>
                <p></p>
                <h2 style={{textAlign: 'center '}}>{this.props.elist.type}</h2>
                <h3 style={{textAlign: 'center '}}>{this.props.elist.desc}</h3>
                <p></p>
                <p style={{textAlign: 'center '}}>{this.props.elist.dateTime}</p>
                <p style={{textAlign: 'center'}}><Ons.Input style={ {width: '50%' }} 
                              value={this.state.textname} 
                              onChange={this.textNChange} 
                              modifier='underbar' float
                              placeholder='Type customer name' />
                    </p>
                    <p style={{textAlign: 'center'}}><Ons.Input style={ {width: '50%' }} 
                              value={this.state.textamount} 
                              onChange={this.textAChange} 
                              modifier='underbar' float
                              placeholder='Type amount ' />
                    </p>
            </div>
            <div style={{textAlign: 'center'}}>           
                {/* <Ons.Button 
                style={{margin: '14px'}} modifier='cta'
                onClick={this.updateEvent.bind(this, navigator)}>
                update
                </Ons.Button> */}
            {/* <Ons.Button onClick={this.handleSubmit}>Submit</Ons.Button> */}
            <Ons.Button onClick={this.handleSubmit.bind(this, this.state.textname, this.state.textamount)}>Submit</Ons.Button>                   
            </div>
            </Ons.Card>

           
            <Ons.Button 
                style={{margin: '5px'}} 
                onClick={this.popPage.bind(this, navigator)}>
                Back
                </Ons.Button>
          </Ons.Page>
          );
      }
  }

//   class ChartEventMenu extends React.Component {

//     constructor(props) {
//         super(props);
//         }

    
//     renderToolbar() {
//       return (
//           <Ons.Toolbar>
//               <div className='center'>Manage Event</div>
//           </Ons.Toolbar>
//       );
//     }
    


//       render(){
//           return (
//             <Ons.Page renderToolbar={this.renderToolbar}>
            
            
//             <h2>Chart Event list</h2>
           

//           </Ons.Page>
//           );
//       }
//   }
//   class SumEventMenu extends React.Component {

//     constructor(props) {
//         super(props);
//         }
    

//     renderToolbar() {
//       return (
//           <Ons.Toolbar>
//               <div className='center'>Manage Event</div>
//           </Ons.Toolbar>
//       );
//     }


//       render(){
//           return (
//             <Ons.Page renderToolbar={this.renderToolbar}>
           
//             <h2>Sum Event list</h2>
//           </Ons.Page>
//           );
//       }
//   }

 ReactDOM.render(<Event />, document.getElementById('react'));