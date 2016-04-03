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
  }
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

    toggleDropMenu() {
        this.setState({ down: !this.state.down });
        console.log('dropmenu dropped');
    }

    onClickChemistry () {
      browserHistory.push('/chemistry');
    }

    render() {
      let content = null;
      let contentPiece = null;
      let dropDownMenu = null;

           const
        toggleEnabled = this.toggleEnabled,
        toggleDropMenu = this.toggleDropMenu;

     if (this.state.down === true) {
        dropDownMenu = (
            <div style={styles.dropmenu}>
              <div style={styles.dropmenuTopDiv}>
                <i className="material-icons md-18" style={[styles.closeIcon]} onClick={this.toggleDropMenu.bind(this)}>close</i>
                <div style={styles.nameForeign}>
                  خليفة
                </div>
                <div style={styles.robotoText}>
                  012-345-67890
                </div>
              </div>
              <div style={styles.dropDownMainTextDiv}>
                <div style={[styles.RobotoMedium]}>
                  MY ACCOUNT | حسابي:
                </div>
              </div>
              <div style={styles.dropDownMainTextDiv}>
                <div style={styles.robotoLight14}>
                  Change phone number & name
                </div>
                <div style={styles.descriptionForeign}>
                  تغيير رقم الهاتف واسم
                </div>
                  <i className="material-icons md-18" style={styles.menuIcons}>phone</i>
              </div>

               <div style={styles.dropDownMainTextDiv}>
                <div style={styles.robotoLight14}>
                  Change password
                </div>
                <div style={styles.descriptionForeign}>
                  تغيير كلمة السر
                </div>
                  <i className="material-icons md-18" style={styles.menuIcons}>lock</i>
              </div>

             <div style={styles.dropDownMainTextDiv}>
              <div style={styles.robotoLight14}>
                Change language and country
              </div>
              <div style={styles.descriptionForeign}>
                تغيير اللغة والبلد
              </div>
                <i className="material-icons md-18" style={styles.menuIcons}>language</i>
            </div>

            <div style={[styles.dropDownMainTextDiv, styles.bottomLine]}>
              <div style={styles.robotoLight14}>
                Change home country
              </div>
              <div style={styles.descriptionForeign}>
               تغيير البلد المستهدف
              </div>
                <i className="material-icons md-18" style={[styles.menuIcons]}>pin_drop</i>
            </div>


              <div style={styles.dropDownMainTextDiv}>
                <div style={[styles.RobotoMedium]}>
                  CONNECT | ربط
                </div>
              </div>
              <div style={styles.dropDownMainTextDiv}>
                <div style={styles.robotoLight14}>
                  Tutors
                </div>
                <div style={styles.descriptionForeign}>
                  الاولياء
                </div>
                  <i className="material-icons md-18" style={styles.menuIcons}>school</i>
              </div>

               <div style={styles.dropDownMainTextDiv}>
                <div style={styles.robotoLight14}>
                  Community
                </div>
                <div style={styles.descriptionForeign}>
                  مجتمع
                </div>
                  <i className="material-icons md-18" style={styles.menuIcons}>person_pin</i>
              </div>

             <div style={[styles.dropDownMainTextDiv, styles.bottomLine]}>
              <div style={styles.robotoLight14}>
                Parental Controls
              </div>
              <div style={styles.descriptionForeign}>
                الرقابة الأبوية
              </div>
                <i className="material-icons md-18" style={styles.menuIcons}>settings</i>
            </div>


            <div style={styles.dropDownMainTextDiv}>
              <div style={[styles.RobotoMedium]}>
                LOG OUT | خروج
              </div>
            </div>
            <div style={styles.dropDownMainTextDiv}>
              <div style={styles.robotoLight14}>
                Log out of my account
              </div>
              <div style={styles.descriptionForeign}>
                تسجيل الخروج من حسابي
              </div>
                <i className="material-icons md-18" style={styles.menuIcons}>exit_to_app</i>
            </div>
          </div>
        )
     }



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
                  {dropDownMenu}
              <div style={[ styles.row, styles.topRow ]}>
                    <i className="material-icons md-18" style={styles.icons}  onClick={toggleDropMenu.bind(this)}>menu</i>
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
