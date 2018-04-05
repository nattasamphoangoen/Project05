var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
var userId = 3;
var s ;
var h ;
var o ;
var p ;


export default class Reserve extends React.Component {
	renderPage(route, navigator) {
	  route.props = route.props || {};
	  route.props.navigator = navigator;
  
	  return React.createElement(route.component, route.props);
  }
  
  //เรียกclass reserveMain//
	render() {
	  return (
		<Ons.Navigator initialRoute={{ component: reserveMain, props: {key: 'reserve-main'} }} renderPage={this.renderPage} />
	  );
	}
}


///////////Main//////////
  class reserveMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '',
                     type: 'โปรดเลือก',
                     num: '',
                     time: '',
                     textReturn: ''
                    };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.editSelects = this.editSelects.bind(this);
      }
      handleTitleChange(e) {
          this.setState({name: e.target.value});
      }
  
      handleDescChange(e) {
          this.setState({num: e.target.value});
      }
  
      handleDateChange(e) {
          this.setState({time: e.target.value});
      }
  
      editSelects(event) {
          this.setState({type: event.target.value});
      }


    //   savePagereser(name1,type1,num1,time1) {
    //     ons.notification.alert(name1+" / "+num1)
    //     return(
    //       client({method: 'GET', path: '/reserve/'+userId+'/name/'+name1+'/type/'+type1+'/num/'+num1+'/time/'+time1}).done(
    //         ons.notification.alert('Success!'),
    //          )
    //     );
    //   }
     
      
      popPage() {
        this.props.navigator.popPage();
      } 
      
    renderToolbar() {
      return (
          <Ons.Toolbar>
            <div className="center">ระบบ จองพื้นที่เพื่อฝากส่งพัสดุ</div>
          </Ons.Toolbar>
      );
    }

    anyarin(){
        ons.notification.alert('บันทึกสำเสร็จ :) ');

    }

    anyarin(){
        this.props.navigator.pushPage({ component: reserve1, props: { key: 'reserve1' } });

    }

    //เชื่อมclass//                         
       anyarin() {
          client({method: 'GET', path:'/reserve/'+userId+'/name/'+this.state.name+'/type/'+this.state.type+'/num/'+this.state.num+'/time/'+this.state.time
          })
          .done(ons.notification.alert('บันทึกสำเสร็จ :) '));;
        }
       anyarin2() {
            s = this.state.name;
            h = this.state.type;
            o = this.state.num;
            p = this.state.time;
          this.props.navigator.pushPage({ component: reserve1, props: { key: 'reserve1' } 
        });
      }
      
    //pushPagereser1() {
      //this.props.navigator.pushPage({ component: reserve1, props: { key: 'reserve1' } });
    //}  
    

//////UI
      render(){
          return (
          <Ons.Page renderToolbar={this.renderToolbar}>
          <section style={{textAlign: 'center'}}>
            <h4>การจองพื้นที่เพื่อฝากส่งพัสดุ...</h4>
            <p></p>
            <p> การจองพื้นที่เพื่อฝากส่งพัสดุจะไม่เหมือนการส่งพัสดุแบบทั่วไป+</p>
            <p>เพราะหน้าซองจดหมายหรือกล่องพัสดุจะไม่มีเลข tacknumber/แสตมป์</p>
            <p>เช่น บริษัท แอดวานซ์ เอ็มเปย์ จำกัด</p>
            <p>ฝากส่งจดหมายโปรโมชั่นการใช้งานอินเตอร์เน็ตมือถือให้กับลูกค้าที่ใช้เคลือข่ายaisทุกคน</p>
            <p></p>
            <p>การจองพื้นที่เพื่อฝากส่งพัสดุ สามารถทำให้องกรค์หรือบริษัท สามารถวางแผนการส่งพัสดุได้ล่วงหน้า</p>
            <p></p>
            <p></p>
            </section>
            <p>
            </p>     
            <section style={{textAlign: 'center'}}>
            <Ons.Col>
              <Ons.Card>
                <div style={{marginBottom: '3em'}}><h2>รายการประวัติ</h2></div>
                                <p>
                                </p>
                                <p> ชื่อบริษัท/องค์กร : 
                                    <Ons.Input
                                     modifier='underbar' 
                                     placeholder='name company'
                                     value={this.state.name} 
                                     onChange={this.handleTitleChange}/>
                                </p>
                                <p> ประเภทการส่ง :
                                    <Ons.Select  value={this.state.type} onChange={this.editSelects}>
                                        <option value="โปรดเลือก">โปรดเลือก</option>
                                        <option value="จดหมาย">จดหมาย</option>
                                        <option value="กล่องพัสดุ">กล่องพัสดุ</option>
                                    </Ons.Select>
                                </p>
                                <p> จำนวน :
                                    <Ons.Input 
                                     modifier='underbar' 
                                     placeholder='Total' 
                                     value={this.state.num}
                                     onChange={this.handleDescChange} />
                                </p>
                                <p> วันที่ ที่ต้องการจัดส่ง :
                                    <Ons.Input 
                                     modifier='underbar' type='date' 
                                     placeholder='Reserve DateTime'
                                     value={this.state.time}
                                     onChange={this.handleDateChange} />
                                </p> 
                    
                              <section style={{textAlign: 'left'}}>
          
                               <div style={{textAlign: 'left'}}>
                                  <Ons.Button style={{margin: '6px'}} 
                                    onClick={this.anyarin.bind(this)}>บันทึก</Ons.Button>
                                  <Ons.Button style={{margin: '6px'}} 
                                    onClick={this.anyarin2.bind(this)}>ต่อไป</Ons.Button>
					                    </div>
                              </section>

              </Ons.Card>
            </Ons.Col>
            </section>
          </Ons.Page>
          );
      }
  }
  //<section style={{textAlign: 'left'}}>
  //<//Ons.Button 
    //onClick={this.savePagereser.bind((this, this.state.name, this.state.num, this.state.time, this.state.type))}>
   // ยืนยัน
  //</Ons.Button>
//</section>



//////class2/////
  class reserve1 extends React.Component {
    renderToolbar() {
      return (
        <Ons.Toolbar>
          <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
          <div className="center"> {s} </div>
        </Ons.Toolbar>
      );
  }   
    constructor(props) {
      super(props);
      this.getReserve();
  }  
      render(){
            return (
              <Ons.Page renderToolbar={this.renderToolbar}>
                    <Ons.Row>
                        <Ons.Col>
                        <h4><p>Reserve summary Create Form Page.</p></h4>
                            <Ons.Card>
                            <div style={{marginBottom: '2em'}}>รายละเอียดแบบฟอร์มจองพื้นที่ฝากส่งพัสดุ</div>
                                
                                <p>
                                <p>  ชื่อบริษัท/องค์กร :  {s}  </p>
                                <p>  ประเภทการส่ง :    {h}  </p>
                                <p>  จำนวน :    {o}        </p>
                                <p>  วันที่ ที่ต้องการจัดส่ง :    {p}    </p>
                                </p>
                                
					
                            </Ons.Card>
                        </Ons.Col>
                    </Ons.Row>
            </Ons.Page>
          );
       }



       getReserve() {
        client({ method: 'GET', path: '/api/reserves' }).done(response => {
          this.setState({ reserve: response.entity._embedded.reserve});
        });
    }
          
    }
   



ReactDOM.render(<Reserve />, document.getElementById('react'));