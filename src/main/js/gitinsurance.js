var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
var userID = 2;
var data;

var button = {width: '25%', background:'#f55959'};
var bbutton = {width: '10%', background:'#f9c5ff', marginLeft: '45%', textAlign: 'center '};
var section = {margin: '16px',textAlign: 'center'};
var card = {width: '50%', marginLeft: '10%', textAlign: 'center'};
var h1 = {marginBottom: '40px'};

class GiTMain extends React.Component {
    
        renderToolbar() {
            return (
              <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className="center">GiT Insurance</div>
              </Ons.Toolbar>
            );
        }
    
        pushPageRegister() {
          this.props.navigator.pushPage({ component: Register, props: { key: 'reg' } });
        }
    
        pushPageClaiming() {
          this.props.navigator.pushPage({ component: Claiming, props: { key: 'clm' } });
        }
        
        backPage() {
            this.props.navigator.popPage();
          }
        
    
          render(){
            return(
              <Ons.Page renderToolbar={this.renderToolbar}>
                <Ons.Row style={{marginTop: '3%'}}>
                  <Ons.Col>
                  </Ons.Col>
                  <Ons.Col>
                    <h1 style={{textAlign: 'center'}}>Goods in Transit Insurance</h1>
                    <p>&nbsp;&nbsp;&nbsp;ประกันภัยพัสดุในระหว่างการส่ง</p>
                    <div>
                    <p>&nbsp; เพื่อเพิ่มความมั่นใจให้กับเจ้าของสินค้าที่กำลังจะนำส่งสินค้านั้นๆ
                    ไปยังจุดหมายปลายทางอย่างปลอดภัย ซึ่งให้ความคุ้มครองความเสียหายหรือความสูญเสียของสินค้า</p>
                 
                    </div>
                    <p></p>
                    <h2>มาๆ มาทำประกันกับฉันนิ!</h2>
                  </Ons.Col>
                  <Ons.Col>
                  </Ons.Col>
                </Ons.Row>
                <Ons.Row style={{marginTop: '1%'}}>
                <Ons.Col>
                  </Ons.Col>
                  <Ons.Col>
                          <Ons.Card>
                          <h1 style={h1}><ons-icon icon="fa-cubes"> Please select a goal</ons-icon></h1>
                         <section style={{textAlign: 'center'}}>
                             <Ons.Button  onClick={this.pushPageRegister.bind(this, navigator)}>
                                 Insurance Register
                             </Ons.Button>
                           
                         </section>
                         <p>
                         </p>
                         <section style={{textAlign: 'center'}}>
                         <Ons.Button  onClick={this.pushPageClaiming.bind(this, navigator)}>
                                Insurance Claiming
                             </Ons.Button>
                         </section>
                  </Ons.Card>
                  </Ons.Col>
                  <Ons.Col>
                  </Ons.Col>
                </Ons.Row>
                <Ons.Row>
                <Ons.Col>
                <Ons.Button style={{marginLeft: '10%', textAlign: 'center ', marginBottom: '5%'}} onClick={this.backPage.bind(this, navigator)}>Back</Ons.Button>
                  </Ons.Col>
                  <Ons.Col>
                  </Ons.Col>
                <Ons.Col>
                 </Ons.Col>
                </Ons.Row>
               </Ons.Page> 
            );
          }
    }


    class Register extends React.Component {

        constructor(props) {
          super(props);
          this.state = {text: '',
                        categories:[]};
  
          this.textChange = this.textChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);

          this.getCategory();
  
        }

        getCategory() {
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
              if(user.tracknum != null){
                check = 1;
                data = user;
              }
            }
            this.setState({ categories: response.entity._embedded.categories.userone});
          });
      }
  
        renderToolbar() {
              return (
                <Ons.Toolbar>
                  <div className="center">Goods in Transit Insurance</div>
                </Ons.Toolbar>
              );
          }
  
        handleSubmit(trackNumber , insurStatus) {
          return(
  
            client({method: 'GET',
                    path: '/gitinsurance/'+userID+'/tracknum/'+trackNumber+'/cussnd/'+data.userone+'/reg/'+insurStatus}).done(res=>{
                        console.log(res)
                        ons.notification.alert(res.entity.insurStatus)
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
            return(
              <Ons.Page renderToolbar={this.renderToolbar}>
                <Ons.Row style={{marginTop: '5%'}}>
                  <Ons.Col>
                  </Ons.Col>
                  <Ons.Col>
                    <h1 style={{textAlign: 'center'}}>Goods in Transit Insurance Register </h1>
                    <p></p>
                    <div>
                    <p>&nbsp; เพื่อเพิ่มความมั่นใจให้กับเจ้าของสินค้าที่กำลังจะนำส่งสินค้านั้นๆ
                    ไปยังจุดหมายปลายทาง</p>
                    <p>&nbsp; บริษัทฯ ขอเสนอประกันภัยขนส่งสินค้าภายในประเทศ
                    ซึ่งให้ความคุ้มครองความเสียหายหรือความสูญเสียของสินค้าที่เอาประกันภัย 
                    อันมีสาเหตุจากอุบัติเหตุระหว่างการขนส่งภายในประเทศไทยทั้งโดยทางรถบรรทุก ทางเรือ ทางรถไฟ</p>
                    </div>
                    <p></p>
                    <h2>ซื้อถั่วะนายน้อย</h2>
                  </Ons.Col>
                  <Ons.Col>
                  </Ons.Col>
                </Ons.Row>
                <Ons.Row style={{marginTop: '1%'}}>
                <Ons.Col>
                  </Ons.Col>
                  <Ons.Col>
                  <Ons.Card >
                       <h1 style={{textAlign: 'center'}}><ons-icon icon="fa-edit"> Insurance register</ons-icon></h1>
                      <p style={{textAlign: 'center'}}><Ons.Input style={ {width: '50%' }} 
                              value={this.state.text} 
                              onChange={this.textChange} 
                              modifier='underbar' float
                              placeholder='Type tracking number' />
                    </p>
                    
                    <div style={{textAlign: 'center'}}>
                    <Ons.Button onClick={this.handleSubmit.bind(this, this.state.text, "Warranty", this.state.categories)}>Register</Ons.Button>                   
                    </div>
                </Ons.Card>
                  </Ons.Col>
                  <Ons.Col>
                  </Ons.Col>
                </Ons.Row>
                <Ons.Row>
                <Ons.Col>
                <Ons.Button style={{marginLeft: '10%', textAlign: 'center ', marginBottom: '5%'}} onClick={this.backPage.bind(this, navigator)}>Back</Ons.Button>
                  </Ons.Col>
                  <Ons.Col>
                  </Ons.Col>
                <Ons.Col>
                 </Ons.Col>
                </Ons.Row>
               </Ons.Page> 
            );
          }
  }

  class Claiming extends React.Component {

    constructor(props) {
      super(props);
      this.state = {text: '',
                    categories:[]};

      this.textChange = this.textChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.getCategory();

    }

    getCategory() {
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
          if(user.tracknum != null){
            check = 1;
            data = user;
          }
        }
        this.setState({ categories: response.entity._embedded.categories.userone});
      });
  }

    renderToolbar() {
          return (
            <Ons.Toolbar>
              <div className="center">Goods in Transit Insurance</div>
            </Ons.Toolbar>
          );
      }

      handleSubmit(trackNumber , insurStatus) {
        return(

          client({method: 'GET',
                  path: '/gitinsurance/'+userID+'/tracknum/'+trackNumber+'/cussnd/'+data.userone+'/clm/'+insurStatus}).done(res=>{
                      console.log(res)
                      ons.notification.alert(res.entity.insurStatus)
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
      return(
        <Ons.Page renderToolbar={this.renderToolbar}>
          <Ons.Row style={{marginTop: '5%'}}>
            <Ons.Col>
            </Ons.Col>
            <Ons.Col>
              <h1 style={{textAlign: 'center'}}>Goods in Transit Insurance Claiming </h1>
              <p></p>
              <div>
              <p>&nbsp; สิ่งสุดท้ายที่เราควรจะกล่าวถึงคือความเสียหาย ความเสียหายของสิ่งที่ส่งจะไม่ได้รับการคุ้มครอง ยกเว้นว่าของที่เสียหายนั้นได้รับการแพคอย่างระวัดระวังโดยสถานที่ทำการเท่านั้น </p>
              <p>&nbsp; ในกรณีที่คุณต้องการเคลมประกัน กรุณาติดต่อสำนักงานของเราทันที
              การเคลมทั้งหมด จะต้องยื่นภายใน 30 วัน นับจากวันที่ได้รับของ</p>
              </div>
              <p></p>
              <h2>เคลมให้ฉันเดิ้ง</h2>
            </Ons.Col>
            <Ons.Col>
            </Ons.Col>
          </Ons.Row>
          <Ons.Row style={{marginTop: '1%'}}>
          <Ons.Col>
            </Ons.Col>
            <Ons.Col>
            <Ons.Card >
                 <h1 style={{textAlign: 'center'}}><ons-icon icon="fa-eraser"> Insurance Claim</ons-icon></h1>
                <p style={{textAlign: 'center'}}><Ons.Input style={{width: '50%'}} 
                        value={this.state.text} 
                        onChange={this.textChange} 
                        modifier='underbar' float
                        placeholder='Type tracking number' />
              </p>
                    <div style={{textAlign: 'center'}}>
                    <Ons.Button onClick={this.handleSubmit.bind(this, this.state.text, "Expired warranty", this.state.categories)}>Claiming</Ons.Button>                   
                    </div>
          </Ons.Card>
            </Ons.Col>
            <Ons.Col>
            </Ons.Col>
          </Ons.Row>
          <Ons.Row>
          <Ons.Col>
          <Ons.Button style={{marginLeft: '10%', textAlign: 'center ', marginBottom: '5%'}} onClick={this.backPage.bind(this, navigator)}>Back</Ons.Button>
            </Ons.Col>
            <Ons.Col>
            </Ons.Col>
          <Ons.Col>
           </Ons.Col>
          </Ons.Row>
         </Ons.Page> 
      );
    }
}


export default class GiT extends React.Component {
	renderPage(route, navigator) {
	  route.props = route.props || {};
	  route.props.navigator = navigator;
  
	  return React.createElement(route.component, route.props);
	}
  
	render() {
	  return (
		<Ons.Navigator initialRoute={{ component: GiTMain, props: {key: 'gitmain'} }} renderPage={this.renderPage} />
	  );
	}
}
ReactDOM.render(<GiT />, document.getElementById('react'));