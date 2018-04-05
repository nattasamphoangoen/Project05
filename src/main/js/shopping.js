import { Carousel } from 'react-onsenui';
var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
var button = { width: '25%', background: '#f55959' };
var section = { margin: '16px', textAlign: 'center' };
var poke;
var userId = 1;


class shop extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      selecteddata: 'no',
      da: ''
    }
    this.getEvent();

  }
  getEvent() {
    client({ method: 'GET', path: 'api/products' }).done(response => {
      this.setState({ products: response.entity._embedded.products });
    });
  }
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className="center">Shopping</div>
      </Ons.Toolbar>
    );
  }

 

  handleVegetableChange(products) {
    this.setState({ selecteddata: products });
    this.setState({ da: size });
  }

  renderCheckboxRow(row) {
    return (
      <Ons.ListItem key={row.name + ' ขนาด ' + row.size + ' ราคา ' + row.price + 'บาท'} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row.name + ' ขนาด ' + row.size + ' ราคา ' + row.price + 'บาท'}`}
            checked={row.name + ' ขนาด ' + row.size + ' ราคา ' + row.price + 'บาท' === this.state.selecteddata}
            onChange={this.handleVegetableChange.bind(this, row.name + ' ขนาด ' + row.size + ' ราคา ' + row.price + 'บาท')}
          />
        </label>
        <label htmlFor={`checkbox-${row.name + ' ขนาด ' + row.size + ' ราคา ' + row.price + 'บาท'}`} className='center'>
          {row.name + ' ขนาด ' + row.size + ' ราคา ' + row.price + 'บาท'}
        </label>
      </Ons.ListItem>
    )
  }

  pushPageshop1() {
    poke = this.state.selecteddata

    

    this.props.navigator.pushPage({ component: shop1, props: { key: 'shop1' } });
  }




  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>

        <Ons.List
          dataSource={this.state.products}
          renderHeader={() => <Ons.ListHeader>เลือกซื้อสิ้นค้า</Ons.ListHeader>}
          renderRow={this.renderCheckboxRow.bind(this)}
        />
        <section style={section}>
          <Ons.Button style={button} onClick={this.pushPageshop1.bind(this, navigator)}>
            สั่งซื้อ
        </Ons.Button>
        </section>
      </Ons.Page>
    );
  }

}

class shop1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.getEvent();

  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className="center">สรุปการสั่งซื้อ </div>
      </Ons.Toolbar>
    );
  }
  getEvent() {
    client({ method: 'GET', path: 'api/products' }).done(response => {
      this.setState({ products: response.entity._embedded.products });
    });
  }

  
  createEventList() {
    return (
      client({ method: 'GET', path: '/Id/' + userId + '/n/' + poke }).done(
        ons.notification.alert('บันทึก'))
    );
  }




  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <Ons.ListItem >{poke}</Ons.ListItem>
        <section style={section}>
          <Ons.Button style={button} onClick={this.createEventList.bind(this)} >
            ยืนยัน
         </Ons.Button>
        </section>
      </Ons.Page>
    );
  }
}



export default class Shopping extends React.Component {


  renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;

    return React.createElement(route.component, route.props);
  }

  render() {
    return (
      <Ons.Navigator initialRoute={{ component: shop, props: { key: 'shop' } }} renderPage={this.renderPage} />
    );
  }


}
ReactDOM.render(<Shopping />, document.getElementById('react'));