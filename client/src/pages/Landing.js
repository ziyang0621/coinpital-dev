import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import CoinButton from '../components/CoinButton';

class Landing extends Component {
  state = {
    currency: 'RMB'
  };

  componentDidMount() {
    // const currencyDropdown = $(
    //   ReactDOM.findDOMNode(this.refs.currencyDropdown)
    // );
    // currencyDropdown.material_select();
    // currencyDropdown.on('change', this.handleCurrencyDropdownChange);
  }

  handleCurrencyDropdownChange = event => {
    console.log('on change', event.target.value);
    this.setState({
      currency: event.target.value
    });
  };

  onSearch = values => {
    console.log('the form values', values);
    this.props.history.push('/search-result');
  };

  renderCurrencyField = field => {
    const { label, input } = field;
    return (
      <div className="landing-search-column">
        <label htmlFor="currency-dropdown" className="landing-label-text">
          {label}:
        </label>
        <div className="input-field" id="currency-input">
          <select id="currency-dropdown" {...input} />
        </div>
      </div>
    );
  };

  renderAmountField = field => {
    const { label, input } = field;
    return (
      <div className="landing-search-column">
        <label htmlFor="amount" className="landing-label-text">
          {label}:
        </label>
        <div className="input-field">
          <input id="amount" type="number" className="validate" {...input} />
        </div>
      </div>
    );
  };

  render() {
    const { currency } = this.state;
    const { handleSubmit } = this.props;

    return (
      <div>
        <form
          className="landing-search-container"
          onSubmit={handleSubmit(this.onSearch)}
        >
          <div ref="landing-search-row" className="landing-search-row">
            <Field
              ref="currency"
              label="Currency"
              name="currency"
              component={this.renderCurrencyField}
            />
            <Field
              label="Amount"
              name="amount"
              component={this.renderAmountField}
            />
          </div>
          <div className="landing-search-row">
            <div className="landing-search-column">
              <label htmlFor="coin" className="landing-label-text">
                Coins:
              </label>
              <div className="coin-button-group">
                <CoinButton
                  imgSrc="https://files.coinmarketcap.com/static/img/coins/32x32/bitcoin.png"
                  text="BTC"
                />
                <CoinButton
                  imgSrc="https://files.coinmarketcap.com/static/img/coins/32x32/ethereum.png"
                  text="ETH"
                />
                <CoinButton
                  imgSrc="https://files.coinmarketcap.com/static/img/coins/32x32/litecoin.png"
                  text="LTC"
                />
              </div>
            </div>
          </div>
          <div className="landing-search-row">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              id="search-button"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default reduxForm({ form: 'SearchForm' })(
  connect(mapStateToProps, actions)(Landing)
);
