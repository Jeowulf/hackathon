import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import Main from './library';
import { Link, browserHistory } from 'react-router';

//define your styling with Javascript objects
//use flexbox for styling "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"




const
contentData = [
    {
        top: 'that',
        bottom: '',
        expansion: '',
    },
],
styles = {
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexFlow: 'column nowrap',
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
    backgroundColor: '#FFFFFF',
    height: '100vh',
    width: '21em',
    position: 'fixed',
    top: '0',
    left: '0'
  },
  dropmenuTopDiv: {
    backgroundColor: '#E6E6E6',
    height: '9.5vh',
    width: '21em'
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: '2vh',
    display: 'flex',
    marginRight: '.65em',
    color: '#4A90E2',
    fontSize: '36px'
  },
  nameForeign: {
    fontSize: '34px',
    fontFamily: 'Myriad Arabic',
    position: 'absolute',
    left: 18,
    top: 1
  },
  robotoText: {
    fontFamily: 'Roboto-Light',
    fontSize: '13px',
    color: '#4A4A4A',
    position: 'absolute',
    left: 18,
    top: 42
  },
  RobotoMedium: {
      /* MY ACCOUNT | حسابي: */
    fontFamily: 'Roboto-Medium',
    fontSize: '14px',
    color: '#7F7F7F',
    position: 'absolute',
    left: 18,
    top: '2.3vh'
  },
  dropDownMainTextDiv: {
    height: '8vh',
    width:'21em',
    position: 'relative',
    top: 0,
    left: 0
  },
  robotoLight14: {
    fontFamily: 'Roboto-Light',
    fontSize: '14px',
    color: '#4A4A4A',
    position: 'relative',
    left: 56,
    top: '1.2vh'
  },
  descriptionForeign: {
    fontSize: '14px',
    fontFamily: 'Myriad Arabic',
    position: 'relative',
    left: 56,
    top: '1vh'
  },
  menuIcons: {
    color: '#4A90E2',
    fontSize: '26px',
    position: 'absolute',
    left: 12,
    top: 14
  },
  bottomLine: {
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 'thin',
    borderBottomStyle: 'solid'
  },
  graphicNovelMainDiv: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: 'auto',
    alignContent: 'stretch',
    justifyContent: 'flex-start',
  },
  graphicNovelChildDivTop: {
    flex: '1 1 auto',
    backgroundSize: '100% 100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
    height: '45.75vh',
  },
  graphicNovelChildDivBottom: {
    flex: '1 1 auto',
    backgroundSize: '100% 100%',
    display: 'flex',
    height: '45.75vh',
  },
  helpIcon: {
    display: 'flex',
    height: '7vmin',
    width: '5.5vmin',
    marginRight: '30vw',
  },
  helpIconContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'column nowrap',
    alignItems: 'flex-end',
  },
  bookmark: {
    color: '#4A90E2',
    marginRight: '3vw',
  },
  graphicNovelMainDivExpanded: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: 'auto',
    alignContent: 'stretch',
    justifyContent: 'flex-start',
  },
  middleContent: {
    height: '20vh',
    width: '100vw',
  }
};

class GraphicNovel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: true,
            down: false,
            bookMarked: true,
            expanded: true,
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
    }

    componentWillUnmount() {
    }

    toggleExpansion() {
        this.setState({ expanded: !this.state.expanded });
    }

    toggleDropMenu() {
        this.setState({ bookMarked: !this.state.bookMarked });
        console.log('dropmenu dropped');
    }

    toggleBookmarked() {
        this.setState({ bookMarked: !this.state.bookMarked });
    }

    determineBookmarkIcon() {
        if (this.state.bookMarked) {
            return (
                <div>
                    <i className="material-icons md-18" style={styles.bookmark} onClick={toggleDropMenu.bind(this)}>bookmark</i>
                </div>
            );
        } else {
            return (
                <div>
                    <i className="material-icons md-18" style={styles.bookmark} onClick={toggleDropMenu.bind(this)}>bookmark_border</i>
                </div>
            );
        }
    }

    nextPage () {
      browserHistory.push('/library');
    }

    render() {
      let
        expandedMiddle = (<div></div>),
        graphicNovelMainDiv = styles.graphicNovelMainDiv,
        content;

        if (this.state.expanded && this.props.content === 'walking dead') {
            expandedMiddle = (
                <div>
                    <img style={styles.middleContent} src={'assets/images/walkingdead_CONTENT (1).png'} alt="menuLogo" />
                </div>
            );
            graphicNovelMainDiv = styles.graphicNovelMainDivExpanded;
        } else if (this.props.content === 'chemistry') {
            expandedMiddle = (
                <div>
                    <img style={styles.middleContent} src={'assets/images/generalchemistry_CONTENT (1).png'} alt="menuLogo" />
                </div>
            );
            graphicNovelMainDiv = styles.graphicNovelMainDivExpanded;
        }

      const
        toggleEnabled = this.toggleEnabled,
        toggleDropMenu = this.toggleDropMenu,
        toggleExpansion = this.toggleExpansion,
        bookmarkIcon = this.determineBookmarkIcon;

        if (this.props.content === 'walking dead') {
            content = contentData.map((c) => {
            return (
                <div>
                    <div>
                        <div style={[ styles.row, styles.topRow ]}>
                        <i className="material-icons md-18" style={styles.icons} onClick={toggleDropMenu.bind(this)}>chevron_left</i>
                        <img style={styles.menuLogo} src={'assets/images/menubar_LOGO.png'} alt="menuLogo" />
                        <i className="material-icons md-18" style={styles.icons}>view_list</i>
                    </div>

                    <div style={graphicNovelMainDiv}>
                      <div style={[styles.graphicNovelChildDivTop, { backgroundImage: `url('assets/images/walkingdead_TOP.png')` }]}>
                        <div style={{ display: 'flex' }}>
                        </div>
                        <div style={{ display: 'flex' }}></div>
                        <div style={styles.helpIconContainer}>
                          <div style={{ display: 'flex' }}>
                            <i className="material-icons md-18" style={styles.bookmark} onClick={toggleDropMenu.bind(this)}>bookmark_border</i>
                          </div>
                          <div style={{ display: 'flex' }}></div>
                          <div style={{ display: 'flex' }}></div>
                          <div style={{ display: 'flex' }}></div>
                          <div style={{ display: 'flex' }}></div>
                          <div style={{ display: 'flex' }}></div>
                          <img style={styles.helpIcon} src={'assets/images/help.png'} alt="help" onClick={toggleExpansion.bind(this)} />
                          <div style={{ display: 'flex' }}></div>

                        </div>
                      </div>
                      {expandedMiddle}
                      <div style={[styles.graphicNovelChildDivBottom, { backgroundImage: `url('assets/images/walkingdead_BOTTOM.png')`, }]}>
                      </div>
                    </div>
                </div>
                </div>
            );
        });
        } else {
            content = contentData.map((c) => {
            return (
                <div>

                    <div style={graphicNovelMainDiv}>
                      <div style={[styles.graphicNovelChildDivTop, { backgroundImage: `url('assets/images/walkingdead_TOP.png')` }]}>
                        <div style={{ display: 'flex' }}>
                        </div>
                        <div style={{ display: 'flex' }}></div>
                        <div style={styles.helpIconContainer}>
                          <div style={{ display: 'flex' }}>
                            <i className="material-icons md-18" style={styles.bookmark} onClick={toggleDropMenu.bind(this)}>bookmark_border</i>
                          </div>
                          <div style={{ display: 'flex' }}></div>
                          <div style={{ display: 'flex' }}></div>
                          <div style={{ display: 'flex' }}></div>
                          <div style={{ display: 'flex' }}></div>
                          <div style={{ display: 'flex' }}></div>
                          <img style={styles.helpIcon} src={'assets/images/help.png'} alt="help" onClick={toggleExpansion.bind(this)} />
                          <div style={{ display: 'flex' }}></div>

                        </div>
                      </div>
                      {expandedMiddle}
                      <div style={[styles.graphicNovelChildDivBottom, { backgroundImage: `url('assets/images/walkingdead_BOTTOM.png')`, }]}>
                      </div>
                    </div>

                </div>
            );
        });
        }


        return (
            <div style={styles.mainContainer}>
                    <div>
                        <div style={[ styles.row, styles.topRow ]}>
                        <i className="material-icons md-18" style={styles.icons} onClick={toggleDropMenu.bind(this)}>chevron_left</i>
                        <img style={styles.menuLogo} src={'assets/images/menubar_LOGO.png'} alt="menuLogo" />
                        <i className="material-icons md-18" style={styles.icons} onClick={this.nextPage.bind(this)}>view_list</i>
                        </div>
                    </div>
                {content}
            </div>

        );
    }
}

//required to allow the inline styling using radium
GraphicNovel = Radium(GraphicNovel);

//define your incoming props
GraphicNovel.propTypes = {

}

export default GraphicNovel;
