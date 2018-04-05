var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
var data ;
var userId = 5;
export default class Promotions extends React.Component {
  renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;
  
    return React.createElement(route.component, route.props);
  }
  
  render() {
    return (
    <Ons.Navigator initialRoute={{ component: Promotion, props: {key: 'promotion'} }} renderPage={this.renderPage} />
    );
  }
}
///////////////////////////////////////////////////
 class Promotion extends React.Component {

constructor(props){
		super(props);
		this.state = {username: ''};
		this.handleUserNameChange = this.handleUserNameChange.bind(this);
	}
    goPromotion(uName) {
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
            				this.props.navigator.pushPage({ component: Promotion1, props: { key: 'promotion1' } });
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
              <div className='center'>ระบบโปรโมชั่น</div>
          </Ons.Toolbar>
      );
    }

    render() {
        return (
          <Ons.Page renderToolbar={this.renderToolbar}>
           <section style={{textAlign: 'center'}}>
           <p>

           <Ons.SearchInput
           	style={{width: '20%', marginLeft: '5%'}}
           		modifier='underbar'
           		placeholder='ป้อนเลขพัสดุ'
           	value={this.state.username}
           	onChange={this.handleUserNameChange}/>


          </p>

          <div style={{textAlign: 'center'}}>
						<Ons.Button style={{margin: '6px'}}
						onClick={this.goPromotion.bind(this,this.state.username)}>ค้นหา</Ons.Button>
					</div>
          </section>
          
          </Ons.Page>
          
        );
      }
  }

  ////////////////////////////////////////หน้า2//////////////////////////////////////////////////


  class Promotion1 extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {count: ''};
    this.state = {total: ''};
    this.handlecountChange = this.handlecountChange.bind(this);
    this.handletotalChange = this.handletotalChange.bind(this);
   
  }
// client({method: 'GET', path: '/cateSystem/'+userId+'/category/'+name+'/user1/'+user+'/user2/'+pass}).done("
   handleClick(count,total) {
        
        return(
          client({method: 'GET', path: '/User/'+userId+'/name/'+data.userone+'/total/'+total+'/tracknum/'+data.tracknum+'/count/'+count}).done(
           // ons.notification.alert('บันทึกสำเร็จ')
           ons.notification.alert(count+total)
             )
        );
      }
      
        handlecountChange(e) {
    this.setState({count: e.target.value})
        }
        handletotalChange(e){
    this.setState({total: e.target.value});
  }
  
     

      renderToolbar() {
      return (
          <Ons.Toolbar>
          <div className='left'><Ons.BackButton >Back</Ons.BackButton></div>
              <div className='center'>ข้อมูลผู้ส่งพัสดุ</div>
          </Ons.Toolbar>
      );
    }

    render() {
        return (
          <Ons.Page renderToolbar={this.renderToolbar}>
           <section style={{textAlign: 'center'}}>

           <p>
           ชื่อ-สกุล ผู้ส่งพัสดุ : {data.userone}
          </p>

          <p>
           เลขพัสดุ : {data.tracknum}
          </p>

          <Ons.List
        renderHeader={() => <Ons.ListHeader><b>โปรโมชั่นล่าสุด : เพียงแค่ลูกค้าส่งพัสดุ 5 ชิ้นขึ้นไป ส่งฟรี 1 ชิ้นต่อไป  ในราคา 100 บาท :</b></Ons.ListHeader>}
      />
      
      
      <p>
         <center><Ons.Input style={{width: '30%'}} 
                      value={this.state.count} 
                      onChange={this.handlecountChange} 
                     
                      modifier='underbar' 
                      float
                      size = '30'
                      placeholder='จำนวนพัสดุ(ชิ้น)' />
                      </center>
            </p>
         <p>
         <center><Ons.Input style={{width: '30%'}} 
                      value={this.state.total} 
                      onChange={this.handletotalChange} 
                
                      modifier='underbar' 
                      float
                      size = '30'
                      placeholder='ได้ส่วนลดจากโปรโมชั่นทั้งหมด(บาท)' />
                      </center>
         </p>
        

                   <p><center>
                      
                      <Ons.Button style={{margin: '6px'}} onClick={this.handleClick.bind(this,this.state.count,this.state.total)}>บันทึก</Ons.Button></center>
                    </p>
                  </section>
                
                </Ons.Page>
                );
              }
        }
      
          
       

      
      
  

ReactDOM.render(<Promotions />, document.getElementById('react'));