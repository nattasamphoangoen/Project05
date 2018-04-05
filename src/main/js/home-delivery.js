var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
var p ;
var userId = 3;
export default class HomeDelivery extends React.Component {
	renderPage(route, navigator) {
	  route.props = route.props || {};
	  route.props.navigator = navigator;
  
	  return React.createElement(route.component, route.props);
	}
  
	render() {
	  return (
		<Ons.Navigator initialRoute={{ component: Delivery, props: {key: 'delivery'} }} renderPage={this.renderPage} />
	  );
	}
}
var data;
////////////////////////////////////////หน้า1//////////////////////////////////////////////////

  class Delivery extends React.Component {

constructor(props){
		super(props);
		this.state = {username: ''};
		this.handleUserNameChange = this.handleUserNameChange.bind(this);
	}
    goDelivery(uName) {
    		client({ method: 'GET', path: '/api/categories' }).done(response => {
            			for(var index in response){
            				if(index === "entity"){
            					var arrt = response[index];
            				}
            			}
            			var check = 0;
            			var max = arrt._embedded.categories.length;
            			for(var i=0; i<max; i++){
            				var user = arrt._embedded.categories[i];
            				if(user.tracknum === uName){
            					check = 1;
            					data = user;
            				}
            			}

            			if(check === 1){
            				this.props.navigator.pushPage({ component: Delivery1, props: { key: 'delivery1' } });
            			}else{
            				ons.notification.alert('ไม่เจอเลขพัสดุ');
            			}
            		});

    }
handleUserNameChange(e) {
		this.setState({username: e.target.value});
}

    renderToolbar() {
      return (
          <Ons.Toolbar>
              <div className='center'>กรอกเลขพัสดุ</div>
          </Ons.Toolbar>
      );
    }

    render() {
        return (
          <Ons.Page renderToolbar={this.renderToolbar}>
           <section style={{textAlign: 'center'}}>
           <p>

           <Ons.SearchInput
           	style={{width: '80%', marginLeft: '10%'}}
           		modifier='underbar'
           		placeholder='NORXXXXXXXTH'
           	value={this.state.username}
           	onChange={this.handleUserNameChange}/>


          </p>

          <div style={{textAlign: 'center'}}>
						<Ons.Button style={{margin: '6px'}}
						onClick={this.goDelivery.bind(this,this.state.username)}>Go1</Ons.Button>
					</div>
          </section>
          
          </Ons.Page>
          
        );
      }
  }

  ////////////////////////////////////////หน้า2//////////////////////////////////////////////////


  class Delivery1 extends React.Component {

    goDelivery() {
        this.props.navigator.pushPage({ component: Delivery2, props: { key: 'delivery2' } });
    }


    renderToolbar() {
      return (
          <Ons.Toolbar>
          <div className='left'><Ons.BackButton >Back</Ons.BackButton></div>
              <div className='center'>รายละเอียดผุ้รับ</div>
          </Ons.Toolbar>
      );
    }

    render() {
        return (
          <Ons.Page renderToolbar={this.renderToolbar}>
           <section style={{textAlign: 'center'}}>

           <p>
           ชื่อ ที่อยู่ ผู้รับ </p><p>
          {data.usertwo}
          </p>

          <p>
           เลขพัสดุ {data.tracknum}
          </p>

          <div style={{textAlign: 'center'}}>
						<Ons.Button style={{margin: '6px'}} onClick={this.goDelivery.bind(this)}>ต่อไป</Ons.Button>
					</div>
          </section>
          
          </Ons.Page>
          
        );
      }
  }

////////////////////////////////////////หน้า3//////////////////////////////////////////////////

  class Delivery2 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      vegetable: ['ผู้รับได้รับเรียบร้อย',   'ไม่มีบ้านเลขที่ตามหน้าซอง', 'ออกใบแจ้งบ้านปิด',    'นำจ่ายใหม่'],
      selectedVegetable: 'ผู้รับได้รับเรียบร้อย'
    }
   }

    goDelivery() {
            client({method: 'GET', path:'/status/'+this.state.selectedVegetable+'/user/'+userId+'/name/'+data.usertwo+'/tracknum/'+data.tracknum
            }).done(ons.notification.alert('บันทึกการจองสำเร็จ'));;
    }
    goDelivery2() {
                p = this.state.selectedVegetable;
            this.props.navigator.pushPage({ component: Delivery3, props: { key: 'delivery3' } });

        }
    renderToolbar() {
      return (
        <Ons.Toolbar>
        <div className='left'><Ons.BackButton >Back</Ons.BackButton></div>
          <div className='center'>สถานะ</div>
        </Ons.Toolbar>
      );
    }

    handleVegetableChange(vegetable) {
      this.setState({selectedVegetable: vegetable});
    }

    renderRadioRow(row) {
      return (
        <Ons.ListItem key={row} tappable>
          <label className='left'>
            <Ons.Radio
              inputId={`radio-${row}`}
              checked={row === this.state.selectedVegetable}
              onChange={this.handleVegetableChange.bind(this, row)}
            />
          </label>
          <label htmlFor={`radio-${row}`} className='center'>
            {row}
          </label>
        </Ons.ListItem>
      )
    }

   

    render(){
      return (    
      <Ons.Page renderToolbar={this.renderToolbar}>
        

        <Ons.List
          dataSource={this.state.vegetable}
          renderHeader={() => <Ons.ListHeader>รายละเอียดสถานะ</Ons.ListHeader>}
          renderRow={this.renderRadioRow.bind(this)}
        />
<section style={{textAlign: 'center'}}>
          
          <div style={{textAlign: 'center'}}>
						<Ons.Button style={{margin: '6px'}} onClick={this.goDelivery.bind(this)}>บันทึก</Ons.Button>
						<Ons.Button style={{margin: '6px'}} onClick={this.goDelivery2.bind(this)}>ต่อไป</Ons.Button>
					</div>
          </section>
       
      </Ons.Page>
      );
    }
  
  }

  ///////////////////////////////////////หน้า4/////////////////////////////////////

  class Delivery3 extends React.Component {

    goDelivery() {
        this.props.navigator.pushPage({ component: Delivery, props: { key: 'delivery4' } });
    }


    renderToolbar() {
      return (
          <Ons.Toolbar>
          <div className='left'><Ons.BackButton >Back</Ons.BackButton></div>
              <div className='center'>UPDATE สถานะล่าสุด</div>
          </Ons.Toolbar>
      );
    }

    render() {
        return (
          <Ons.Page renderToolbar={this.renderToolbar}>
           <section style={{textAlign: 'left'}}>


           <p>
            ชื่อ ที่อยู่ ผู้รับ </p><p>
            {data.usertwo}
          </p>

          <p>
           เลขรหัสพัสดุ {data.tracknum}
          </p>

          <p>
            สถานะ {p}
            </p>


          <div style={{textAlign: 'center'}}>
						<Ons.Button style={{margin: '6px'}} onClick={this.goDelivery.bind(this)}>เสร็จสิ้น</Ons.Button>
					</div>
          </section>
          </Ons.Page>
          
        );
      }
  }




ReactDOM.render(<HomeDelivery />, document.getElementById('react'));