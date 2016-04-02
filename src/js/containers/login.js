import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import Main from './main';
import { Link } from 'react-router';

//define your styling with Javascript objects
//use flexbox for styling "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
const styles = {
    mainComponent: {
        backgroundColor: 'blue',
    },
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: true,
        };
    }
    //set component initial state above

    //custom functions here- use this.setState() to change the state of the app
    toggleEnabled() {
        this.setState({ enabled: !this.state.enabled });
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        //define your content- JSX variables and dynamic JSX
      const
        toggleEnabled = this.toggleEnabled;
        //return your JSX with defined content (anything in the render method occurs anytime a change occurs, to limit rerendering add changes to component lifecycle)
        //bind your functions to allow them access to the this functionality
        return (
            <div>
                <div style={styles.mainComponent}>
                    Your component build goes here
                </div>
                <Link to="Main">Start</Link>
            </div>
        );
    }
}
//required to allow the inline styling using radium
Login = Radium(Login);

//define your incoming props
Login.propTypes = {
}

export default Login;