import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import Main from './main';
import { Link, browserHistory } from 'react-router';

//define your styling with Javascript objects
//use flexbox for styling "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
const
contentPieceData = [{
    photo: 'assets/images/huckfinn.png',
    region: 'assets/images/georgia.png',
    localTitle: 'The Adventures of Huckleberry Finn',
    localAuthor: 'Mark Twain',
    foreignTitle: 'مغامرات الفنلندي التوت',
    foreignAuthor: 'مارك توين',
},
{
    photo: 'assets/images/cat.png',
    region: 'assets/images/usa.png',
    localTitle: 'The Cat in the Hat',
    localAuthor: 'Dr. Seuss',
    foreignTitle: 'القطة في القبعة',
    foreignAuthor: 'الدكتور سيوس',
},
{
    photo: 'assets/images/Chemistry.png',
    region: 'assets/images/usa.png',
    localTitle: 'General Chemistry Principles, Patterns, and Application',
    localAuthor: 'Bruce A. Averill',
    foreignTitle: 'مبادئ الكيمياء العامة و',
    foreignAuthor: 'أنماط و والتطبيقات',
},
{
    photo: 'assets/images/walkingDead.png',
    region: 'assets/images/georgia.png',
    localTitle: 'The Walking Dead, Issues 1 - 5',
    localAuthor: 'Robert Kirtman & Tony Moore',
    foreignTitle: 'الميت المشي, قضايا ٥­۱',
    foreignAuthor: 'روبرت كيركمان و توني مور',
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
    flexFlow: 'column nowrap',
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
  content: {
    display: 'flex',
    flexFlow: 'row nowrap',
    borderBottom: '1px solid #d3d3d3',
  },
  contentAssets: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: '1 1',
    height: '18vh',
    alignItems: 'flex-start',
    padding: '5px 5px 5px 5px',
    backgroundSize: 'cover',
  },
  contentRegionDiv: {
    display: 'flex',
    flex: '1 1',
    color: 'white',
    backgroundColor: '#4A90E2',
    backgroundRepeat: 'no-repeat',
    padding: '5px',
    alignItems: 'center',
  },
  contentColumn: {
    display: 'flex',
    flex: '2 1',
    flexFlow: 'column nowrap',
    padding: '8px',
    justifyContent: 'center',
  },
  contentAuthor: {
    marginBottom: '5px',
    color: 'grey',
    fontSize: '12px',
  },
  contentTitle: {
    fontWeight: 500,
  },
  contentForeignAuthor: {
    fontFamily: 'Myriad Arabic',
    fontSize: '12px',
  },
  contentForeignTitle: {
    fontFamily: 'Myriad Arabic',
    fontWeight: 600,
  },
  image: {
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: 'white',
    height: '3vh',
    width: '3vh',
  },
  chevrons: {
    display: 'flex',
    color: '#4A90E2',
  },
  chevronContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

    nextPage () {
      browserHistory.push('/main');
    }

    onClickGraphicNovel () {
      browserHistory.push('/graphicnovel');
    }

    onClickChemistry () {
      browserHistory.push('/chemistry');
    }

    render() {
        let contentPiece = null;

        contentPiece = contentPieceData.map((c, idx) => {
            return (
                <div style={styles.content}>
                    <div style={[styles.contentAssets, { backgroundImage: `url(${c.photo})` }]}>
                        <div style={ { display: 'flex', flex: '3 1' } }></div>
                        <div style={[styles.contentRegionDiv]}>
                            <div style={[ styles.image, { backgroundImage: `url(${c.region})` }]}></div>
                        </div>
                    </div>
                    <div style={styles.contentColumn}>
                        <div style={styles.contentTitle}>{c.localTitle}</div>
                        <div style={styles.contentAuthor}>{c.localAuthor}</div>
                        <div style={styles.contentForeignTitle}>{c.foreignTitle}</div>
                        <div style={styles.contentForeignAuthor}>{c.foreignAuthor}</div>
                    </div>
                    <div style={styles.chevronContainer}>
                        <i className="material-icons md-36" style={[styles.chevrons, { fontSize: '30px' }]} onClick={idx === 3 ? this.onClickGraphicNovel.bind(this) : this.onClickChemistry.bind(this)}>chevron_right</i>
                    </div>
                </div>
            );
        });
        return (
            <div style={styles.mainContainer}>
              <div style={[ styles.row, styles.topRow ]}>
                    <i className="material-icons md-18" style={styles.icons}>menu</i>
                    <img style={styles.menuLogo} src={'assets/images/menubar_LOGO.png'} alt="menuLogo" />
                    <i className="material-icons md-18" style={styles.icons} onClick={this.nextPage.bind(this)}>panorama</i>
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
