import logo from './logo.svg';
import './App.css';
import React from 'react';
import Calc from './Calc.js';

class App extends React.Component {

constructor(props) {
  super(props)
}

render() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;


constructor(props) {
  super(props)
  this.state = {
    'date': '',
    'currencyRate': {}
  }
  this.currency = ['USD', 'RUB', 'CAD', 'PHP']
  this.getRate()
}

getRate = () => {
  fetch('url')
  .then(data => {
    return data.json()
  })
  .then(data=> {
    console.log(data)
    this.setState({date: data.date})
  })
  let result = {}
  for (let i = 0; i < this.currency.length; i++) {
    result[this.currency[i]] = data.rates[this.currency[i]]
  }
  console.log(result)
  this.setState({currencyRate: result})
}

render() {



  return (
    <div className='rate'>
<h3>Kurs valut na {this.state.date}</h3>
{Object.keys(this.state.currencyRate).map((keyName, i) =>
  (
    <div className='block flex-item' key={keyName}>
    <div className='currency-name'>{keyName}</div>
    <div className='currency-in'>{this.state.currencyRate[keyName].toFixed(2)}</div>

    <div className='currency-out'>1200 Kr</div>

    </div>

  )
  )}
  </div>
  <Calc rate={this.state.currencyRate}
</div>
  )
}
