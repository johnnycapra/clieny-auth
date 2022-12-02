import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from './requireAuth';
import * as actions from '../actions';

class Feature extends Component {
    render() {
        if(!this.props.auth){return null}
        return <div> This is the feature!</div>
    };
};

function mapStateToProps(state) {
    return {auth: state.auth.authenticated};
}


export default connect(mapStateToProps, actions)(requireAuth(Feature));