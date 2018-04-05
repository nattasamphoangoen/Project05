import Promotions from './promotions';

var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
var data ;
var userId = 5;
export default class PayMent extends React.Component {
  renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;
  
    return React.createElement(route.component, route.props);
  }
  
  render() {
    return (
    <Ons.Navigator initialRoute={{ component: Payment, props: {key: 'payment'} }} renderPage={this.renderPage} />
	);
  }
}

///////////////////////////////////////////////////
 class Payment extends React.Component {

  renderToolbar() {
		return (
			<Ons.Toolbar>
				<div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
				<div className="center">ระบบชำระเงิน</div>
			</Ons.Toolbar>
		);
}

pushPagePay() {
	this.props.navigator.pushPage({ component: Pay, props: { key: 'pay' } });
}

////////////////////////////////////////////////////////////////
render() {
		return (
			<Ons.Page renderToolbar={this.renderToolbar}>
			<section style={{textAlign: 'center'}}>
					<Ons.Button  onClick={this.pushPagePay.bind(this, navigator)}>
							เข้าสู่ระบบชำระเงิน
					</Ons.Button>
			</section>
		</Ons.Page>
		  );
	  }
  }
  class Pay extends React.Component {

	constructor(props){
			super(props);
			this.state = {username: ''};
			this.handleUserNameChange = this.handleUserNameChange.bind(this);
		}
		goPay(uName) {
				client({ method: 'GET', path: '/api/promotions' }).done(response => {
							for(var index in response){
								if(index === "entity"){
									var arrt = response[index];
								}
							}
							var check = 0;
							var max = arrt._embedded.promotions.length;
							for(var i=0; i<max; i++){
								var user = arrt._embedded.promotions[i];
								if(user.tracknum === uName){
									check = 1;
									data = user;
								}
							}
	
							if(check === 1){
								this.props.navigator.pushPage({ component: Pay2, props: { key: 'pay2' } });
							}else{
								ons.notification.alert('ไม่มีข้อมูลลูกค้าในระบบ');
							}
						});
	
		}
	handleUserNameChange(e) {
			this.setState({username: e.target.value});
	}
	
		renderToolbar() {
		  return (
			  <Ons.Toolbar>
				  <div className='center'>ระบบชำระเงิน</div>
			  </Ons.Toolbar>
		  );
		}
	
		render() {
			return (
			  <Ons.Page renderToolbar={this.renderToolbar}>
			   <section style={{textAlign: 'center'}}>
			   <p>
	
			   <Ons.SearchInput
				   style={{width: '20%', marginLeft: '1%'}}
					   modifier='underbar'
					   placeholder='ป้อนเลขพัสดุ'
				   value={this.state.username}
				   onChange={this.handleUserNameChange}/>
	
	
			  </p>
	
			  <div style={{textAlign: 'center'}}>
							<Ons.Button style={{margin: '6px'}}
							onClick={this.goPay.bind(this,this.state.username)}>ค้นหา</Ons.Button>
						</div>
			  </section>
			  
			  </Ons.Page>
			  
			);
		  }
	  }
	////////////////////////////////////////////////////////////////////////////
	class Pay2 extends React.Component {

	  constructor(props) {
		super(props);
		this.state = {price: ''};
		this.state = {total: ''};
		this.handlepriceChange = this.handlepriceChange.bind(this);
		this.handlediscountChange = this.handlediscountChange.bind(this);
		this.handleamountChange = this.handleamountChange.bind(this);
		
	   
	  }
	// client({method: 'GET', path: '/cateSystem/'+userId+'/category/'+name+'/user1/'+user+'/user2/'+pass}).done("
	   handleClick(price,discount,amount) {
			
		window.print();
			return(
			  client({method: 'GET', path: '/User/'+userId+'/name/'+data.name+'/tracknum/'+data.tracknum+'/total/'+data.total+'/count/'+data.count+'/price/'+price+'/discount/'+discount+'/amount/'+amount}).done(
			   // ons.notification.alert('บันทึกสำเร็จ')
			   
			   ons.notification.alert(price+discount+amount)
			   
				 )
			);
		  }
		  
		  
			handlepriceChange(e) {
		this.setState({price: e.target.value});
			}
			handlediscountChange(e) {
			this.setState({discount: e.target.value});
			}
			handleamountChange(e){
		this.setState({amount: e.target.value});
	  }
	  
		 
	
		  renderToolbar() {
		  return (
			  <Ons.Toolbar>
			  <div className='left'><Ons.BackButton >Back</Ons.BackButton></div>
				  <div className='center'>ข้อมูลลูกค้า</div>
			  </Ons.Toolbar>
		  );
		}
	
		render() {
			return (
			  <Ons.Page renderToolbar={this.renderToolbar}>
			   <section style={{textAlign: 'center'}}>
	
			   <p>
			   ชื่อ-สกุล ผู้ส่งพัสดุ : {data.name}
			  </p>
			  <p>
			   จำนวนพัสดุ : {data.total}
			  </p>
			  <p>
			   เลขพัสดุ : {data.tracknum}
			  </p>
          <p>
			   ส่วนลดที่ได้จากโปรโมชั่น : {data.count}
			  </p>
	
			  <Ons.List
			renderHeader={() => <Ons.ListHeader><b>ราคาการจัดส่งพัสดุ:ส่งแบบด่วนพิเศษ 50 บาท และ ส่งแบบลงทะเบียน 30 บาท :</b></Ons.ListHeader>}
		  />
		  
		  
		  <p>
			 <center><Ons.Input style={{width: '30%'}} 
						  value={this.state.price} 
						  onChange={this.handlepriceChange} 
						 
						  modifier='underbar' 
						  float
						  size = '30'
						  placeholder='ค่าจัดส่งพัสดุ(บาท)' />
						  </center>
				</p>
			 <p>
			 <center><Ons.Input style={{width: '30%'}} 
						  value={this.state.discount} 
						  onChange={this.handlediscountChange} 
					
						  modifier='underbar' 
						  float
						  size = '30'
						  placeholder='ได้ส่วนลดจากโปรโมชั่นทั้งหมด(บาท)' />
						  </center>
			 </p>

			 <p>
			 <center><Ons.Input style={{width: '30%'}} 
						  value={this.state.amount} 
						  onChange={this.handleamountChange} 
					
						  modifier='underbar' 
						  float
						  size = '30'
						  placeholder='สรุปยอดค่าใช้จ่ายทั้งหมด(บาท)' />
						  </center>
			 </p>
			
	
					   <p><center>
						  
						  <Ons.Button style={{margin: '6px'}} onClick={this.handleClick.bind(this,this.state.price,this.state.discount,this.state.amount)}>บันทึก</Ons.Button></center>
						</p>
					  </section>
					
					</Ons.Page>
					);
				  }
			}
		  
			  
		   
	
		  


ReactDOM.render(<PayMent />, document.getElementById('react'));