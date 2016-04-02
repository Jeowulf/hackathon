import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dumb from '../components/dumb';
import Radium from 'radium';
import Feed from './feed';
import Login from './login';
import Longform from './longform';
import GraphicNovel from './graphicNovel';
import MenuAndSettings from './menuAndSettings';
import { Link } from 'react-router';

const styles = {
    base: {
    display: 'flex',
    justifyContent: 'flex-end',
    background: 'blue',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em'
  },
  rowContainer: {
    display: 'flex',
    flexFlow: 'row-nowrap',
    justifyContent: 'space-between',
  },
  colContainer: {
    display: 'flex',
    flexFlow: 'col-nowrap',
  }
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          enabled: true,
        };
    }

    toggleEnabled() {
        debugger
        this.setState({ enabled: !this.state.enabled });
    }

    componentDidMount() {
      console.log('hola')
    }

    render() {
      const
        toggleEnabled = this.toggleEnabled;
        return (
            <div>
            </div>
        );
    }
}
Main = Radium(Main);



Main.propTypes = {
}

export default Main;
