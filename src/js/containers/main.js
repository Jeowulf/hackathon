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
  mainContainer: {
    width: '100vw',
    height: '95vh',
  },
  row: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
  },
  col: {
    display: 'flex',
    flexFlow: 'col-nowrap',
    justifyContent: 'space-between',
  },
  icons: {
    color: 'white',
  },
  culturalnorm: {
    backgroundColor: '#d3d3d3',
    borderRadius: '15px',
    fontWeight: 'bold',
    padding: '2px 15px',
    border: '1px solid grey',
    flex: '1 1 auto',
  },
  feedImage: {
    height: '50vh',
    backgroundImage: `url('assets/images/photo_HUGGING.png')`,
    width: '100vw',
    justifyContent: 'space-between',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  descriptions: {
    width: '50vw',
    padding: '5px',
  },
  languageLocal: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  languageForeign: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  header: {

  },
  content: {

  },
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
            <div styles={styles.mainContainer}>
                <div style={[ styles.row, { backgroundColor: '#4A90E2' } ]}>
                    <i className="material-icons md-18" style={styles.icons}>menu</i>
                    <img src={'assets/images/menubar_LOGO.png'} alt="menuLogo" />
                    <i className="material-icons md-18" style={styles.icons}>book</i>
                </div>
                <div style={[ styles.row ]}>
                    <div style={styles.feedImage}>
                        <div style={ { display: 'flex', flex: '5 1 auto' } }></div>
                        <div><span style={styles.culturalnorm}>#culturalnorm</span></div>
                    </div>
                </div>
                <div style={[ styles.row ]}>
                    <div style={styles.descriptions}>
                        <div style={styles.languageLocal}>
                            <div style={styles.header}></div>
                            <div style={styles.content}></div>
                        </div>
                    </div>
                    <div style={styles.descriptions}>
                        <div style={styles.languageForeign}>
                            <div style={styles.header}></div>
                            <div style={styles.content}></div>
                        </div>
                    </div>
                </div>
                <div style={[ styles.row ]}>
                </div>
            </div>
        );
    }
}
Main = Radium(Main);



Main.propTypes = {
}

export default Main;
