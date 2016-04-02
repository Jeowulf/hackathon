import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { makeFunOfHim } from '../actions/crazyPerson';
import Login from './login.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const
            { crazyPerson, onclick } = this.props,
            dave = 'dave';
        return (
            <div>
               <Login />
            </div>
        );
    }
}


App.propTypes = {
    crazyPerson: PropTypes.object.isRequired,
    onclick: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        crazyPerson: state.crazyPerson,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onclick: () => dispatch(makeFunOfHim()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
