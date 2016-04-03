import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

//define your styling with Javascript objects
//use flexbox for styling "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"

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
  topRow: {
    disply: 'flex',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    padding: '10px',
    height: '9.5vh',
  },
  icons: {
    color: 'white',
  },
  menuLogo: {
    padding: '2px',
    width: '30vmin',
    height: '10vmin',
  },
  culturalnorm: {
    backgroundColor: '#4A90E2',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    border: '1px solid grey',
    alignItems: 'center',
    alignContent: 'center',
  },
  feedImage: {
    height: '55vh',
    backgroundImage: `url('assets/images/photo_HUGGING.png')`,
    backgroundSize: '100%',
    width: '100vw',
    justifyContent: 'space-between',
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: '10px',
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
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {

  },
  behaviorRow: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: '5vh',
    display: 'flex',
    alignItems: 'center',
  },
  volume: {
    color: '#4A90E2',
    height: '4vh',
    width: '4vh',
    marginLeft: '5px',
  },
  learningWord: {
    fontWeight: 500,
    fontSize: '20px',
    display: 'flex',
    alignContent: 'center',
  },
  dropmenu: {
    backgroundColor: '#4A90E2',
    height: '80%',
    width: '20em',
    position: 'fixed',
    top: '9.8vh',
    left: 0
  }
};

class Longform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: true,
            down: false

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
        console.log('holla at cha boi')
    }

    componentWillReceiveProps() {
    }

    componentDidUpdate() {
        if (this.state.down) {
            console.log('its working');
        }
    }

    componentWillUnmount() {
    }

    toggleDropMenu() {
        this.setState({ down: !this.state.down });
        console.log('dropmenu');
    }

    render() {

     let dropDownMenu = null;

     if (this.state.down === true) {
        dropDownMenu = (
            <div style={styles.dropmenu}>

            </div>
        )
     }

      const
        toggleEnabled = this.toggleEnabled,
        toggleDropMenu = this.toggleDropMenu;

        return (
            <div style={styles.mainContainer}>
                {dropDownMenu}
                <div style={[ styles.row, styles.topRow ]}>
                    <i className="material-icons md-18" style={styles.icons} onClick={toggleDropMenu.bind(this)}>menu</i>
                    <img style={styles.menuLogo} src={'assets/images/menubar_LOGO.png'} alt="menuLogo" />
                    <i className="material-icons md-18" style={styles.icons}>book</i>
                </div>
                <div style={[ styles.row ]}>
                    <div style={styles.feedImage}>
                        <div style={ { display: 'flex', flex: '5 1 auto' } }></div>
                        <div style={styles.behaviorRow}>
                            <span style={[styles.culturalnorm, { margin: '0px 5px', padding: '8px 4px', }]}>behavior | <span style={{fontWeight: 'normal'}}>behavior</span></span>
                            <div style={[styles.culturalnorm, { padding: '3.5px 4px' }]}><i className="material-icons .md-5" style={styles.icons}>favorite</i></div>
                        </div>
                    </div>
                </div>
                <div style={[ styles.row ]}>
                    <div style={styles.descriptions}>
                        <div style={styles.languageLocal}>
                            <div style={styles.header}>
                                <div style={styles.learningWord}>Hugging<span style={{ marginTop: '5px' }}><i className="material-icons" style={styles.volume}>volume_up</i></span></div>
                            </div>
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

//required to allow the inline styling using radium
Longform = Radium(Longform);

//define your incoming props
Longform.propTypes = {

}

export default Longform;
