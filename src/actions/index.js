import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

export const signup = (formProps) => async dispatch => {
    try {
      const response = await axios.post('http://localhost:8080/signup', formProps)
      dispatch({ type: AUTH_USER, payload: response.data.token})
      localStorage.setItem('token', response.data.token);

    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use'});
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    };
};

export const signin = (formProps) => async dispatch => {
    try {
      const response = await axios.post('http://localhost:8080/signin', formProps)
      dispatch({ type: AUTH_USER, payload: response.data.token})
      localStorage.setItem('token', response.data.token);

    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid Login Credentials'});
    }
};