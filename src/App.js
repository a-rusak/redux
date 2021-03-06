import React, { Component } from 'react';
import { increment, decrement, async } from './actions';
import { connect } from 'react-redux';
import { getCounterValue, getWarning } from './reducers';

export class App extends Component {
  onPlus = evt => {
    evt && evt.preventDefault();
    const { increment } = this.props;
    increment(1);
  };

  onMinus = evt => {
    evt && evt.preventDefault();
    const { decrement } = this.props;
    decrement(1);
  };

  onAsync = evt => {
    evt && evt.preventDefault();
    const { async } = this.props;
    async();
  };

  render() {
    return (
      <div className="App">
        <button className="plus" onClick={this.onPlus}>+</button>
        <button onClick={this.onMinus}>-</button>
        <button onClick={this.onAsync}>async</button>
        <label className="counter-value" htmlFor="">{this.props.counterValue}</label>
        <label htmlFor="">{this.props.warn}</label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counterValue: getCounterValue(state),
  warn: getWarning(state)
});

const mapDispatchToProps = {
  increment,
  decrement,
  async
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
