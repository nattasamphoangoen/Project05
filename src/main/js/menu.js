var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import Event from './event.js' 
import StatusNotification from './status.js'
import HomeDelivery from './home-delivery.js'
import Promotions from './promotions.js'
import Category from './category.js'
import TruckUsageData from './truck_usage_data.js'
import Calendar from './calendar.js'
import Noreceive from './noreceive.js'
import PayMent from './payment.js'
import GiT from './gitinsurance.js'

import Reserve from './reserve.js'

 class Menu extends React.Component {
    renderToolbar() {
        return (
          <Ons.Toolbar>
            <div className="center">Post System Main Menu</div>
          </Ons.Toolbar>
        );
    }

    pushPageMemuEvent() {
		  this.props.navigator.pushPage({ component: EventMenu, props: { key: 'event-menu' } });
    }

    pushPageStatus() {
		  this.props.navigator.pushPage({ component: StatusMenu, props: { key: 'statusmenu' } });
    }

    pushPageDelivery() {
		  this.props.navigator.pushPage({ component: DeliveryMenu, props: { key: 'delivery' } });
    }

    pushPagePromotion() {
		  this.props.navigator.pushPage({ component: PromotionMenu, props: { key: 'promotion' } });
    }

    pushPageCategory() {
		  this.props.navigator.pushPage({ component: CategoryMenu, props: { key: 'categorymenu' } });
    }

    pushPageTruckUsage() {
    	  this.props.navigator.pushPage({ component: TruckUsageMenu, props: { key: 'truckusagemenu' } });
    }
    pushPageCalendar() {
		  this.props.navigator.pushPage({ component: CalendarMenu, props: { key: 'calendarmenu' } });
    }
    pushPageNor() {
		  this.props.navigator.pushPage({ component: NorMenu, props: { key: 'noreceivemenu' } });
    }
	pushPagePayment() {
      this.props.navigator.pushPage({ component: PaymentMenu, props: { key: 'paymentmenu' } });
  }
pushPageReserve() {
      this.props.navigator.pushPage({ component: ReserveMenu, props: { key: 'reservemenu' } });
    }
    pushPageGiTinsurance() {
		  this.props.navigator.pushPage({ component: GiTinsurance, props: { key: 'git-insurance' } });
    }
    render(){
      return (
        <Ons.Page renderToolbar={this.renderToolbar}>
        <Ons.Row>
                <Ons.Col>
                  <div>
                    <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                      <div style={{fontSize: '80px', backgroundColor: '#f55959', textAlign: 'center'}}>
                        <Ons.Icon icon="fa-money" style={{color: '#ffffff'}}></Ons.Icon>
                      </div>
                      <h3 style={{color: '#f55959'}}>ระบบจัดการตั๋วและบริจาค</h3>
                    </Ons.Card>
                  </div>
                </Ons.Col>
                
                <Ons.Col>
                <div>
                    <Ons.Card onClick={this.pushPageCategory.bind(this)}>
                      <div style={{fontSize: '80px', backgroundColor: '#f55959', textAlign: 'center'}}>
                        <Ons.Icon icon="fa-upload" style={{color: '#ffffff'}}></Ons.Icon>
                      </div>
                      <h3 style={{color: '#f55959'}}>ระบบเลือกประเภทการส่งพัสดุ</h3>
                    </Ons.Card>
                  </div>
                </Ons.Col>
                
                <Ons.Col>
                <div>
                    <Ons.Card onClick={this.pushPageDelivery.bind(this)}>
                      <div style={{fontSize: '80px', backgroundColor: '#f55959', textAlign: 'center'}}>
                        <Ons.Icon icon="fa-taxi" style={{color: '#ffffff'}}></Ons.Icon>
                      </div>
                      <h3 style={{color: '#f55959'}}>ระบบนำจ่ายตามบ้าน</h3>
                    </Ons.Card>
                  </div>
                </Ons.Col>

                <Ons.Col>
                <div>
                    <Ons.Card onClick={this.pushPageStatus.bind(this)}>
                      <div style={{fontSize: '80px', backgroundColor: '#f55959', textAlign: 'center'}}>
                        <Ons.Icon icon="fa-bell" style={{color: '#ffffff'}}></Ons.Icon>
                      </div>
                      <h3 style={{color: '#f55959'}}>ระบบแจ้งสถานะ</h3>
                    </Ons.Card>
                  </div>
                </Ons.Col>
            </Ons.Row>
            <Ons.Row>
                <Ons.Col>
                  <div>
                    <Ons.Card onClick={this.pushPagePromotion.bind(this)}>
                      <div style={{fontSize: '80px', backgroundColor: '#f55959', textAlign: 'center'}}>
                        <Ons.Icon icon="fa-bullhorn" style={{color: '#ffffff'}}></Ons.Icon>
                      </div>
                      <h3 style={{color: '#f55959'}}>ระบบโปรโมชั่น</h3>
                    </Ons.Card>
                  </div>
                </Ons.Col>
                
                <Ons.Col>
                    <div>
                        <Ons.Card onClick={this.pushPageTruckUsage.bind(this)}>
                          <div style={{fontSize: '80px', backgroundColor: '#f55959', textAlign: 'center'}}>
                            <Ons.Icon icon="fa-truck" style={{color: '#ffffff'}}></Ons.Icon>
                          </div>
                          <h3 style={{color: '#f55959'}}>ระบบการใช้งานรถ</h3>
                        </Ons.Card>
                     </div>
             
                </Ons.Col>
                <Ons.Col>
                <div>
                    <Ons.Card onClick={this.pushPageCalendar.bind(this)}>
                      <div style={{fontSize: '80px', backgroundColor: '#f55959', textAlign: 'center'}}>
                        <Ons.Icon icon="calendar" style={{color: '#ffffff'}}></Ons.Icon>
                      </div>
                      <h3 style={{color: '#f55959'}}>ปฏิทิน(กิจกรรม)</h3>
                    </Ons.Card>
                  </div>
                </Ons.Col>
                <Ons.Col>
                <div>
                    <Ons.Card onClick={this.pushPageNor.bind(this)}>
                      <div style={{fontSize: '80px', backgroundColor: '#f55959', textAlign: 'center'}}>
                        <Ons.Icon icon="fa-eye-slash" style={{color: '#ffffff'}}></Ons.Icon>
                      </div>
                      <h3 style={{color: '#f55959'}}>ระบบแจ้งรับพัสดุ(กรณีไม่มีผู้รับ)</h3>
                    </Ons.Card>
                </div>
                </Ons.Col>
		<Ons.Col>
                    <div>
                        <Ons.Card onClick={this.pushPagePayment.bind(this)}>
                          <div style={{fontSize: '80px', backgroundColor: '#f55959', textAlign: 'center'}}>
                            <Ons.Icon icon="fa-credit-card-alt" style={{color: '#ffffff'}}></Ons.Icon>
                          </div>
                          <h3 style={{color: '#f55959'}}>ระบบชำระเงิน</h3>
                        </Ons.Card>
                     </div>
             
                </Ons.Col>
 		<Ons.Col>
                <div>
                    <Ons.Card onClick={this.pushPageReserve.bind(this)}>
                      <div style={{fontSize: '80px', backgroundColor: '#f55959', textAlign: 'center'}}>
                        <Ons.Icon icon="fa-building" style={{color: '#ffffff'}}></Ons.Icon>
                      </div>
                      <h3 style={{color: '#f55959'}}>ระบบจองพื้นที่การฝากส่งพัสดุ</h3>
                    </Ons.Card>
                  </div>
                </Ons.Col>
                <Ons.Col>
                  <div>
                    <Ons.Card onClick={this.pushPageGiTinsurance.bind(this)}>
                      <div style={{fontSize: '80px', backgroundColor: '#f55959', textAlign: 'center'}}>
                        <Ons.Icon icon="fa-umbrella" style={{color: '#ffffff'}}></Ons.Icon>
                      </div>
                      <h3 style={{color: '#f55959'}}>ระบบประกันภัยพัสดุ</h3>
                    </Ons.Card>
                  </div>
                </Ons.Col>
            </Ons.Row>

        </Ons.Page>
      );
    }
}


class StatusMenu extends React.Component {

  constructor(props) {
		super(props);
	  }

    render(){
        return (
          <Ons.Page>
            <StatusNotification/>
          </Ons.Page>
        );
    }
}

class EventMenu extends React.Component {

  constructor(props) {
		super(props);
	  }

    render(){
        return (
          <Ons.Page>
            <Event/>
          </Ons.Page>
        );
    }
}

class DeliveryMenu extends React.Component {

  constructor(props) {
		super(props);
	  }

    render(){
        return (
          <Ons.Page>
            <HomeDelivery/>
          </Ons.Page>
        );
    }
}

class PromotionMenu extends React.Component {

  constructor(props) {
		super(props);
	  }

    render(){
        return (
          <Ons.Page>
            <Promotions/>
          </Ons.Page>
        );
    }
}

class CategoryMenu extends React.Component {  
  constructor(props) {
    super(props);
    }

    render(){
        return (
          <Ons.Page>
            <Category/>
          </Ons.Page>
        );
    }
}

class TruckUsageMenu extends React.Component {
  constructor(props) {
    super(props);
    }

    render(){
        return (
          <Ons.Page>
            <TruckUsageData/>
          </Ons.Page>
        );
    }
}
class NorMenu extends React.Component {  
  constructor(props) {
    super(props);
    }

    render(){
        return (
          <Ons.Page>
            <Noreceive/>
          </Ons.Page>
        );
    }
}
class CalendarMenu extends React.Component {  
  constructor(props) {
    super(props);
    }
    render(){
        return (
          <Ons.Page>
            <Calendar/>
          </Ons.Page>
        );
    }
}
class PaymentMenu extends React.Component {
  constructor(props) {
    super(props);
    }

    render(){
        return (
          <Ons.Page>
            <PayMent/>
          </Ons.Page>
        );
    }
}
class ReserveMenu extends React.Component {  
  constructor(props) {
    super(props);
    }
    render(){
        return (
          <Ons.Page>
            <Reserve/>
          </Ons.Page>
        );
    }
}
class GiTinsurance extends React.Component {  
  constructor(props) {
    super(props);
    }

    render(){
        return (
          <Ons.Page>
            <GiT/>
          </Ons.Page>
        );
    }
}
export default class App extends React.Component {
	renderPage(route, navigator) {
	  route.props = route.props || {};
	  route.props.navigator = navigator;
  
	  return React.createElement(route.component, route.props);
	}
  
	render() {
	  return (
		<Ons.Navigator initialRoute={{ component: Menu, props: {key: 'login'} }} renderPage={this.renderPage} />
	  );
	}
  }

ReactDOM.render(<App />, document.getElementById('react'));