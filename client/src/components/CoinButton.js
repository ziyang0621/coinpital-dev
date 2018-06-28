import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CoinButton extends Component {
  state = {
    backgroundColor: 'white',
    selected: false
  };

  handleOnClick = event => {
    const { selected } = this.state;

    const newSelectedState = !selected;
    this.setState({
      backgroundColor: newSelectedState ? '#92b7d2' : 'white',
      selected: newSelectedState
    });

    this.props.onPress();
  };

  render() {
    return (
      <div
        onClick={this.handleOnClick}
        className="waves-effect waves-light z-depth-2 coin-button"
        style={{
          backgroundColor: this.state.backgroundColor
        }}
      >
        <img src={this.props.imgSrc} alt="" />
        <div>{this.props.text}</div>
      </div>
    );
  }
}

CoinButton.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func
};

CoinButton.defaultProps = {
  onPress: () => {}
};

export default CoinButton;
