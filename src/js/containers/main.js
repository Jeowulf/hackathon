import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dumb from '../components/dumb';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          enabled: true,
        };
    }
    componentDidMount() {
      console.log('hola')
    }

    render() {
      const
        special = this.props.special;
        return (
            <div>
                <h1>This is the main component it is {special}</h1>
                <button onClick={onclick}></button>
                <Dumb />
            </div>
        );
    }
}



Main.propTypes = {
    special: PropTypes.string.isRequired,
    dave: PropTypes.string,
}

export default Main;
