import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import Main from './main';
import { Link, browserHistory } from 'react-router';
import { push } from 'react-router-redux';


//define your styling with Javascript objects
//use flexbox for styling "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
const styles = {
    mainComponent: {
        backgroundImage: `url('assets/images/photo_SPLASH.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexFlow: 'column wrap',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoDiv:{
        display: 'flex',
        height: '28%',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImg: {
        maxWidth: '75%'
    },
    startButtonDiv:{
        color: '#4A90E2',
        // borderColor: 'white',
        // borderStyle: 'solid',
        // borderWidth: '2px',
        backgroundColor: 'white',
        marginTop: '5%',
        display: 'flex',
        height: '5%',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    }
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
           setTimeout(function(){
            browserHistory.push('/main');
         }, 5000);
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
                <div style={[styles.mainComponent]}>
                    <div style={[styles.logoDiv]}>
                        <img src="assets/images/logo.png" alt="1000 Faces Logo" style={[styles.logoImg]} />
                    </div>

                </div>
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
