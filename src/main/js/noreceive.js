var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
var userId = 3;
var data;
var p ;
export default class Noreceive extends React.Component {
	renderPage(route, navigator) {
	  route.props = route.props || {};
	  route.props.navigator = navigator;
  
	  return React.createElement(route.component, route.props);
	}
  
	render() {
	  return (
		<Ons.Navigator initialRoute={{ component: Normain, props: {key: 'noreceice'} }} renderPage={this.renderPage} />
	  );
	}
}

////////////////////////////////////////หน้า1//////////////////////////////////////////////////

class Normain extends React.Component {

    constructor(props){
            super(props);
            this.state = {username: ''};
            this.handleUserNameChange = this.handleUserNameChange.bind(this);
        }
        goNor(uName) {
    		client({ method: 'GET', path: '/api/categories' }).done(response => {
            			for(var index in response){
            				if(index === "entity"){
            					var arrt = response[index];
            				}
            			}
            			var check = 0;
            			var max = arrt._embedded.categories.length;
            			for(var i=0; i<max; i++){
            				var userdetail = arrt._embedded.categories[i];
            				if(userdetail.tracknum === uName){
            					check = 1;
            					data = userdetail;
            				}
            			}

            			if(check === 1){
            				this.props.navigator.pushPage({ component: Normain2, props: { key: 'delivery1' } });
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
                  <div style={{color: '#f55959'}} className='center'>กรอกเลขพัสดุ</div>
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
                            <Ons.Button style={{margin: '6px' , background: '#f55959'}}
                            onClick={this.goNor.bind(this,this.state.username)}>Go</Ons.Button>
                        </div>
              </section>
              
              </Ons.Page>
              
            );
          }
      }
    
      ////////////////////////////////////////หน้า2//////////////////////////////////////////////////
    
    
      class Normain2 extends React.Component {
    
         goDelivery1() {
            this.props.navigator.pushPage({ component: Normain3, props: { key: 'nor2' } });
         }

         goDelivery2() {
          this.props.navigator.pushPage({ component: Normain4, props: { key: 'nor2' } });
       }
    
    
        renderToolbar() {
          return (
              <Ons.Toolbar>
              <div style={{color: '#f55959'}} className='left'><Ons.BackButton >Back</Ons.BackButton></div>
              
                  <div style={{color: '#f55959'}}  className='center'>ข้อมูลผู้ที่ไม่ได้พัสดุ</div>
                  
              </Ons.Toolbar>
          );
        }
    
        render() {
            return (
                <Ons.Page renderToolbar={this.renderToolbar} >
               <Ons.Row style={{marginTop: '10%'}}>
               <Ons.Col></Ons.Col>
               <Ons.Col>
               <Ons.Card style={{width: '70%', marginLeft: '15%'}}>

               <h3 style={{color: '#f55959'}}>
						<Ons.Icon icon='fa-id-card' />&nbsp; ชื่อ/ที่อยู่ ผู้รับ
						</h3>

                        <div>
							<p>
                            {data.usertwo}
							</p>

                            <h3 style={{color: '#f55959'}}>
						<Ons.Icon icon='fa-phone-square' />&nbsp; เลขพัสดุ
						</h3>
							<p>
							{data.tracknum}
							</p>

         
						</div>

                       <div style={{textAlign: 'center'}}>

                            { <Ons.Button style={{margin: '6px', background: '#f55959'}}  onClick={this.goDelivery1.bind(this)}>ตีกลับไปยังผู้ส่ง</Ons.Button> }
                          
                        </div>
                      
                        <div style={{textAlign: 'center'}}>
                            { <Ons.Button style={{margin: '6px', background: '#f55959'}} onClick={this.goDelivery2.bind(this)}>นำจ่ายใหม่</Ons.Button> }
                        </div>
                      
				</Ons.Card>
			  </Ons.Col>
			  <Ons.Col></Ons.Col>
			  </Ons.Row>
         

              </Ons.Page>
              
            );
          }
      }
    
    ////////////////////////////////////////หน้า3//////////////////////////////////////////////////

    class Normain3 extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
            vegetable: ['ตีกลับผู้ส่ง'],
            selectedVegetable: 'ตีกลับผู้ส่ง'
          }
         }

        goDelivery() {
            client({method: 'GET', path:'/statussp2/'+this.state.selectedVegetable+'/user/'+userId+'/name/'+data.userone+'/tracknum/'+data.tracknum
            }).done(ons.notification.alert('ตีกลับพัสดุไปยังผู้ส่งเรียบร้อยเเล้ว'));;
    }
    goDelivery2() {
                p = this.state.selectedVegetable;
            this.props.navigator.pushPage({ component: Normain, props: { key: 'nOR16' } });

        }
  
  
      renderToolbar() {
        return (
            <Ons.Toolbar>
            <div style={{color: '#f55959'}}  className='left'><Ons.BackButton >Back</Ons.BackButton></div>
                <div  style={{color: '#f55959'}} className='center'>รายละเอียดผู้ส่ง</div>
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
  
      render() {
          return (
            <Ons.Page renderToolbar={this.renderToolbar} >
               <Ons.Row style={{marginTop: '10%'}}>
               <Ons.Col></Ons.Col>
               <Ons.Col>
               <Ons.Card style={{width: '70%', marginLeft: '15%'}}>

               <h3 style={{color: '#f55959'}}>
						<Ons.Icon icon='fa-id-card' />&nbsp; ชื่อ/ที่อยู่ ผู้ส่ง
						</h3>

                        <div>
							<p>
                            {data.userone}
							</p>

                            <h3 style={{color: '#f55959'}}>
						<Ons.Icon icon='fa-phone-square' />&nbsp; เลขพัสดุ
						</h3>
							<p>
							{data.tracknum}
							</p>

         
						</div>

                        

                        <section style={{textAlign: 'center'}}>
          
          <div style={{textAlign: 'center'}}>
						<Ons.Button style={{margin: '6px' ,background: '#f55959'}} onClick={this.goDelivery.bind(this)}>บันทึกการตีกลับ</Ons.Button>
                        </div>
                        <p>

                            </p>
                            <p>
                            
                            </p>
                            <p>
                            
                            </p>
                            <p>
                            
                            </p>

                            <div style={{textAlign: 'right'}}>
						<Ons.Button style={{margin: '6px' , background: '#f55959'}} onClick={this.goDelivery2.bind(this)}>เสร็จสิ้น</Ons.Button>
					</div>
          </section>
                      
				</Ons.Card>
			  </Ons.Col>
			  <Ons.Col></Ons.Col>
			  </Ons.Row>
            
            </Ons.Page>
            
          );
        }
    }

    ////////////////////////////////////////หน้า4//////////////////////////////////////////


    

    class Normain4 extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
            vegetable: ['นำจ่ายใหม่'],
            selectedVegetable: 'นำจ่ายใหม่'
          }
         }

        goDelivery() {
            client({method: 'GET', path:'/status/'+this.state.selectedVegetable+'/user/'+userId+'/name/'+data.userone+'/tracknum/'+data.tracknum
            }).done(ons.notification.alert('นำจ่ายใหม่ไปยังผู้รับเรียบร้อยเเล้ว'));;
    }
    goDelivery2() {
                p = this.state.selectedVegetable;
            this.props.navigator.pushPage({ component: Normain, props: { key: 'nOR17' } });

        }
  
  
      renderToolbar() {
        return (
            <Ons.Toolbar>
            <div style={{color: '#f55959'}}  className='left'><Ons.BackButton >Back</Ons.BackButton></div>
                <div  style={{color: '#f55959'}} className='center'>รายละเอียดผู้รับ</div>
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
  
      render() {
          return (
            <Ons.Page renderToolbar={this.renderToolbar} >
               <Ons.Row style={{marginTop: '10%'}}>
               <Ons.Col></Ons.Col>
               <Ons.Col>
               <Ons.Card style={{width: '70%', marginLeft: '15%'}}>

               <h3 style={{color: '#f55959'}}>
						<Ons.Icon icon='fa-id-card' />&nbsp; ชื่อ/ที่อยู่ ผู้รับ
						</h3>

                        <div>
							<p>
                            {data.userone}
							</p>

                            <h3 style={{color: '#f55959'}}>
						<Ons.Icon icon='fa-phone-square' />&nbsp; เลขพัสดุ
						</h3>
							<p>
							{data.tracknum}
							</p>

         
						</div>

                        

                        <section style={{textAlign: 'center'}}>
          
          <div style={{textAlign: 'center'}}>
						<Ons.Button style={{margin: '6px' ,background: '#f55959'}} onClick={this.goDelivery.bind(this)}>บันทึกการนำจ่าย</Ons.Button>
                        </div>
                        <p>

                            </p>
                            <p>
                            
                            </p>
                            <p>
                            
                            </p>
                            <p>
                            
                            </p>

                            <div style={{textAlign: 'right'}}>
						<Ons.Button style={{margin: '6px' , background: '#f55959'}} onClick={this.goDelivery2.bind(this)}>เสร็จสิ้น</Ons.Button>
					</div>
          </section>
                      
				</Ons.Card>
			  </Ons.Col>
			  <Ons.Col></Ons.Col>
			  </Ons.Row>
            
            </Ons.Page>
            
          );
        }
    }

//////////////////////////////////////////////////////////////////////////////////////

      ReactDOM.render(<Noreceive />, document.getElementById('react'));