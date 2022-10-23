import logo from './logo.svg';
import './Calc.css';
import React from 'react';

class Calc extends React.Component {

constructor(props) {
  super(props)
  this.state = {
  result: 0
}
}
  
  static getDerivedStateFromProps(props, state) {
  return {rate: props.rate}
}
  
  calcRate = (e) => {
  e.preventDefault()
    let elements = e.target.elements
  console.log(elements)
    console.log(['count-currency'].value)
  console.log(['type-currency'].value)
     let countCurrency = elements['count-currency'].value
  let typeCurrency = elements['type-currency'].value
    this.setState({ result: (countCurrency / this.state.rate[typeCurrency]) })

}

render() {

  return (
    <div className='rate'>
    <h3>Kurs valut na {this.state.date}</h3>
<form onSubmit={this.calcRate}>
<input type='number' defaultValue='150'/>
{Object.keys(this.state.currencyRate).map((keyName, i) =>
  (
   
    <div className='currency-in'>{this.state.currencyRate[keyName].toFixed(2)}</div>

    

{Object.keys(this.props.rate).map((keyName, i) =>
  (
    <div className='block flex-item' key={keyName}>
    <div className='currency-name'>{keyName}</div>
    <option key={keyName} value={keyName}>{keyName}</option>

    <div className='currency-out'>1200 Kr</div>

    

  )
  )}
  <input type='submit' defaulvalue='calv' />

  </form>

    </div>
 
      </div>
  );
}
}

export default Calc;



