import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dumb from '../components/dumb';
import Radium from 'radium';
import Feed from './feed';
import Login from './login';
import Longform from './longform';
import GraphicNovel from './graphicNovel';
import MenuAndSettings from './menuAndSettings';
import { Link, browserHistory } from 'react-router';

const contentData = [{
  localPicWord: 'SPORTS ',
  foreignPicWord: 'رياضات',
  localContent: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  localHeader: 'Opening Day',
  foreignContent: 'قد بلا دخول كانت كنقطة. ثم قادة ساعة للحكومة يبق. من سبتمبر وحرمان ذلك, يبق الضروري الثالث٬ الواقعة عل, هذه أي الأوروبيّون.',
  foreignHeader: 'يوم الإفتتاح',
  backgroundPhoto: 'assets/images/photo_OPENINGDAY.png',
},
{
  localPicWord: 'IDIOMS',
  foreignPicWord: 'رياضات',
  localContent: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  localHeader: 'Raining cats and dogs',
  foreignContent: 'قد بلا دخول كانت كنقطة. ثم قادة ساعة للحكومة يبق. من سبتمبر وحرمان ذلك, يبق الضروري الثالث٬ الواقعة عل, هذه أي الأوروبيّون.',
  foreignHeader: 'السماء تمطر القطط والكلاب',
  backgroundPhoto: 'assets/images/photo_RAINING.png',
},
{
  localPicWord: 'behavior',
  foreignPicWord: ' سلوك',
  localContent: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  localHeader: 'Hugging',
  foreignContent: 'قد بلا دخول كانت كنقطة. ثم قادة ساعة للحكومة يبق. من سبتمبر وحرمان ذلك, يبق الضروري الثالث٬ الواقعة عل, هذه أي الأوروبيّون.',
  foreignHeader: 'عناق',
  backgroundPhoto: 'assets/images/photo_HUGGING.png',
},
{
  localPicWord: 'movies',
  foreignPicWord: 'أفلام',
  localContent: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  localHeader: 'Hugging',
  foreignContent: 'قد بلا دخول كانت كنقطة. ثم قادة ساعة للحكومة يبق. من سبتمبر وحرمان ذلك, يبق الضروري الثالث، الواقعة عل, هذه أي الأوروبيّون.',
  foreignHeader: 'دارث فيدر',
  backgroundPhoto: 'assets/images/photo_DARTHVADER.png',
}],
styles = {
  mainContainer: {
    width: '100vw',
    fontFamily: 'Roboto',
  },
  scrollingContainer: {
    height: '86vh',
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
    backgroundSize: '100%, 100%',
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
    color: 'grey',
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
  bottomRow: {
    display: 'flex',
    padding: '0px 20px',
    height: '5vh',
    justifyContent: 'center',
    alignContent: 'center',
  },
  bottomDiv: {
    marginTop: '3px',
    padding: '5px',
    borderTop: '1px solid #d3d3d3',
    display: 'flex',
    height: '5vh',
    width:  '90vw',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
  },
  socialIcons: {
     color: '#4A90E2',
     padding: '5px',
  },
  chat: {
    width: '5vw',
    paddingTop: '5px',
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
        this.setState({ enabled: !this.state.enabled });
    }

    componentDidMount() {
      console.log('hola')
    }

    nextPage () {
      browserHistory.push('/library');
    }

    render() {
      let content = null,
          expansion = null;

      if (this.state.expanded) {
        expansion = (
            <div>
              <img style={styles.middleContent} src={'assets/images/comments.png'} alt="menuLogo" />
            </div>
        )
      }

      content = contentData.map((c, idx) => {
        let chat = (<div><i className="material-icons .md-5" style={styles.socialIcons}>chat_bubble</i></div>);
        if (idx === 2) {
          chat = (<div><img style={styles.chat} src={'assets/images/chat.png'} alt="menuLogo" /></div>);
        }
        return (
                <div style={styles.scrollingContainer}>
                  <div style={[ styles.row ]}>
                      <div style={[styles.feedImage, { backgroundImage: `url(${c.backgroundPhoto})` }]}>
                          <div style={ { display: 'flex', flex: '5 1 auto' } }></div>
                          <div style={styles.behaviorRow}>
                              <span style={[styles.culturalnorm, { margin: '0px 5px', padding: '8px 4px', }]}>{c.localPicWord} | <span style={{fontWeight: 'normal'}}>{c.foreignPicWord}</span></span>
                              <div style={[styles.culturalnorm, { padding: '3.5px 4px' }]}><i className="material-icons .md-5" style={styles.icons}>favorite</i></div>
                          </div>
                      </div>
                  </div>
                  <div style={[ styles.row, { padding: '0px 16px' } ]}>
                      <div style={styles.descriptions}>
                          <div style={styles.languageLocal}>
                              <div style={styles.header}>
                                  <div style={styles.learningWord}>{c.localHeader}<span style={{ marginTop: '5px' }}><i className="material-icons" style={styles.volume}>volume_up</i></span></div>
                              </div>
                              <div style={[styles.content, { fontSize: '13px' } ]}>
                                {c.localContent}
                              </div>
                          </div>
                      </div>
                      <div style={styles.descriptions}>
                          <div style={styles.languageForeign}>
                              <div style={[styles.header, { fontSize: '25px' } ]}>
                                {c.foreignHeader}
                              </div>
                              <div style={[{ fontFamily: 'Myriad Arabic', fontSize: '16px' }, styles.content]}>
                                {c.foreignContent}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div style={[ styles.bottomRow ]}>
                    <div style={[styles.bottomDiv]}>
                      <i className="material-icons .md-5" style={styles.socialIcons}>share</i>
                        {chat}
                      <i className="material-icons .md-5" style={styles.socialIcons}>favorite</i>
                    </div>
                  </div>
                  {expansion}
                </div>
        );
      });


      const
        toggleEnabled = this.toggleEnabled;
        return (
            <div style={styles.mainContainer}>
              <div style={[ styles.row, styles.topRow ]}>
                    <i className="material-icons md-18" style={styles.icons}>menu</i>
                    <img style={styles.menuLogo} src={'assets/images/menubar_LOGO.png'} alt="menuLogo" />
                    <i className="material-icons md-18" style={styles.icons} onClick={this.nextPage.bind(this)}>book</i>
                </div>
                {content}
            </div>
        );
    }
}
Main = Radium(Main);



Main.propTypes = {
}

export default Main;
