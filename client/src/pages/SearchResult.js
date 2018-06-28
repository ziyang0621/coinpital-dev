import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchResult extends Component {
  render() {
    return (
      <h3>SearchResult Page</h3>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(SearchResult);
