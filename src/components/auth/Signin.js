import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import withNavigation from '../withNavigation';

class Signin extends Component {

    onSubmit = async (formProps) => {
        const { navigation } = this.props;
            await this.props.signin(formProps);
                navigation("/feature");
     
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field 
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Sign in!</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage }
}

export default connect(mapStateToProps, actions)(reduxForm({ form: 'signin'})(withNavigation(Signin)));