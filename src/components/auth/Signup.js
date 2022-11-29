import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import withNavigation from '../withNavigation';

class Signup extends Component {

    onSubmit = (formProps) => {
        const { navigation } = this.props;
        this.props.signup(formProps);
        navigation('/feature');
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
                <button>Sign up!</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup'})
    )(withNavigation(Signup));