var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
var userId = 2;

//ห้ามแตะ
class Cate extends React.Component {
    
        renderToolbar() {
            return (
              <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className="center">ประเภทการส่งพัสดุ</div>
              </Ons.Toolbar>
            );
        }
    
        pushPageCat1() {
          this.props.navigator.pushPage({ component: Cat1, props: { key: 'cat1' } });
        }
    
        pushPageCat2() {
          this.props.navigator.pushPage({ component: Cat2, props: { key: 'cat2' } });
        }
    
    
        ////////////////////////////////////////////////////////////////
        render() {
            return (
              <Ons.Page renderToolbar={this.renderToolbar}>
              <h1>เลือกประเภทการส่งพัสดุ</h1>
              <section style={{textAlign: 'center'}}>
                  <Ons.Button  onClick={this.pushPageCat1.bind(this, navigator)}>
                      ลงทะเบียน
                  </Ons.Button>
              </section>
              <p>
              </p>
              <section style={{textAlign: 'center'}}>
                  <Ons.Button  onClick={this.pushPageCat2.bind(this, navigator)}>
                      ด่วนพิเศษ
                  </Ons.Button>
              </section>
          </Ons.Page>
            );
        }
    }

//class 1 
    class Cat1 extends React.Component {
      renderToolbar() {
        return (
          <Ons.Toolbar>
            <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
            <div className="center">ส่งแบบ ลงทะเบียน</div>
          </Ons.Toolbar>
        );
    } 
      constructor(props) {
        super(props);
        this.state = {username: ''};
        this.state = {password: ''};
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        
      }
      handleClick(user,pass,name) {
        ons.notification.alert(user+pass)
        return(
          client({method: 'GET', path: '/cateSystem/'+userId+'/category/'+name+'/user1/'+user+'/user2/'+pass}).done(
             // ons.notification.alert('Voted!')
             )
        );
      }
      handleUsernameChange(e) {
        this.setState({username: e.target.value});
      }   
      handlePasswordChange(e) {
        this.setState({password: e.target.value});
      }
          render(){
              return (
                  <Ons.Page renderToolbar={this.renderToolbar}>
                  <section style={{textAlign: 'center'}}>
                    <p>
                      <Ons.Input
                        style={{width: '40%'}}
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                        modifier='underbar'
                        float
                        placeholder='ชื่อ-ที่อยู่  ผู้ส่ง' />
                    </p>
                    <p>
                      <Ons.Input
                      style={{width: '40%'}}
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        modifier='underbar'
                        float
                        placeholder='ชื่อ-ที่อยู่ ผู้รับ' />
                    </p>
                    <p>
                      
                    </p>
                    <p>
                      <Ons.Button onClick={this.handleClick.bind(this,this.state.username,this.state.password,"ลงทะเบียน")}>บันทึก</Ons.Button>
                    </p>
                  </section>
                  />
                </Ons.Page>
              );
            }
      }
//class2
      class Cat2 extends React.Component {
        renderToolbar() {
          return (
            <Ons.Toolbar>
              <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
              <div className="center">ส่งแบบ ด่วนพิเศษ</div>
            </Ons.Toolbar>
          );
      }   
        constructor(props) {
          super(props);
          this.state = {username1: ''};
          this.state = {password1: ''};
          this.handleUsernameChange = this.handleUsernameChange.bind(this);
          this.handlePasswordChange = this.handlePasswordChange.bind(this);
          
      }
      handleClick(user1,pass1,name) {
        ons.notification.alert(user1+pass1)
        return(
          client({method: 'GET', path: '/cateSystem/'+userId+'/category1/'+name+'/user1/'+user1+'/user2/'+pass1}).done(
             // ons.notification.alert('Voted!')
        )
        );
        }
        handleUsernameChange(e) {
          this.setState({username1: e.target.value});
        }
      
        handlePasswordChange(e) {
          this.setState({password1: e.target.value});
        }
        
       
          render(){
                return (
                  <Ons.Page renderToolbar={this.renderToolbar}>
                  <section style={{textAlign: 'center'}}>
                    <p>
                      <Ons.Input
                      style={{width: '40%'}}
                        value={this.state.username1}
                        onChange={this.handleUsernameChange}
                        modifier='underbar'
                        float
                        placeholder='ชื่อ-ที่อยู่  ผู้ส่ง' />
                    </p>
                    <p>
                      <Ons.Input
                       style={{width: '40%'}}
                        value={this.state.password1}
                        onChange={this.handlePasswordChange}
                        modifier='underbar'
                        float
                        placeholder='ชื่อ-ที่อยู่ ผู้รับ' />
                    </p>
                    <p>
                      
                    </p>
                    <p>
                    <Ons.Button onClick={this.handleClick.bind(this,this.state.username1,this.state.password1,"ด่วนพิเศษ")}>บันทึก</Ons.Button>
                    </p>
                  </section>
                  />
                  
                </Ons.Page>
                );
              }
        }


//ห้ามแตะ
export default class Category extends React.Component {
	renderPage(route, navigator) {
	  route.props = route.props || {};
	  route.props.navigator = navigator;
  
	  return React.createElement(route.component, route.props);
	}
  
	render() {
	  return (
		<Ons.Navigator initialRoute={{ component: Cate, props: {key: 'cate'} }} renderPage={this.renderPage} />
	  );
	}
}
ReactDOM.render(<Category />, document.getElementById('react'));