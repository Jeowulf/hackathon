import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

//define your styling with Javascript objects
//use flexbox for styling "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
const
contentPieceData = [{
    photo: '',
    state: '',
    localTitle: 'The Adventures of Huckleberry Finn',
    localAuthor: 'Mark Twain',
    foreignTitle: '',
    foreignAuthor: '',
},
{
    photo: '',
    state: '',
    localTitle: 'The Cat in the Hat',
    localAuthor: 'Dr. Seuss',
    foreignTitle: '',
    foreignAuthor: '',
},
{
    photo: '',
    state: '',
    localTitle: 'General Chemistry Principles, Patterns, and Application',
    localAuthor: 'Bruce A. Averill',
    foreignTitle: '',
    foreignAuthor: '',
},
{
    photo: '',
    state: '',
    localTitle: 'The Walking Dead, Issues 1 - 5',
    localAuthor: 'Robert Kirtman & Tony Moore',
    foreignTitle: '',
    foreignAuthor: '',
}],
styles = {
  mainContainer: {
    width: '100vw',
    fontFamily: 'Roboto',
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
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    padding: '10px',
    height: '9vh',
    boxShadow: '0px 3px 10px #26466D',
  },
  plusRow: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    padding: '10px',
    height: '8vh',
    justifyContent: 'center',
    position: 'relative',
    zIndex: -1,
  },
  icons: {
    color: 'white',
  },
  menuLogo: {
    padding: '2px',
    width: '30vmin',
    height: '10vmin',
  },
};

class Library extends Component {
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
        let contentPiece = null;

        contentPiece = contentPieceData.map() {
            return (
                <div></div>
            );
        };
        return (
            <div style={styles.mainContainer}>
              <div style={[ styles.row, styles.topRow ]}>
                    <i className="material-icons md-18" style={styles.icons}>menu</i>
                    <img style={styles.menuLogo} src={'assets/images/menubar_LOGO.png'} alt="menuLogo" />
                    <i className="material-icons md-18" style={styles.icons}>book</i>
              </div>
              <div style={[ styles.row, styles.plusRow ]}>
                <i className="material-icons md-36" style={[styles.icons, { fontSize: '30px' }]}>add</i>
              </div>
              {contentPiece}
            </div>
        );
    }
}
Library = Radium(Library);

Library.propTypes = {
}

export default Library;
