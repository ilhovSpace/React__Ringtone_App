import React,{useState} from "react";
import { connect } from 'react-redux'
import ModalLogin from '../home/content/ModalLogin'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './personalCabinet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import MyPlayer from '../home/content/MyPlayer/MyPlayer'
import { setPlayTrackId, stopPlayer } from '../../redux/actions/actions'

function PersonalCabinet(props){
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);

    if(props.authorize.status && props.authorize.userInfo.publicContentItem){
        return(
            <div>
                <nav className="navbar navbar-light bg-light breadcrumb">
                <span className="navbar-brand">
                    <img src='https://t-rbt.telesens.ua/t-rbt/img/user-logo.png' alt={'logo'} style={{height:'40px'}}></img>
                    Subscriber {props.authorize.userInfo.subscriber.subsIdent}
                </span>
                </nav>

                <Container>
                  <Row>
                  {props.authorize.userInfo.publicContentItem.map(( item, index )=>{
                      return <Col xs={12} md={6} key={index}>
                          <Row className='item_area'>
                                <Col xs={4} md={4} className='player'>
                                    <MyPlayer audioSrc={'https://t-rbt.telesens.ua/t-rbt/sound?id='+item.contentNo} imageSrc={item.imageId ? 
                                    "https://t-rbt.telesens.ua/t-rbt/image?id="+item.imageId : 
                                    "https://www.tunefind.com/i/album-art-empty.png"}
                                    musicTrackId={item.contentNo} 
                                    setPlayTrackId={props.setPlayTrackId}
                                    stopPlayer={ props.stopPlayer}
                                    playerPlayWithId={props.playerPlayWithId}></MyPlayer>
                                </Col>
                                <Col xs={8} md={8}>
                                    <ul style={{listStyleType: 'none'}}> 
                                        {item.title ? <li><strong>{item.title}</strong></li> : null}
                                        {item.artist ? <li><strong>{item.artist}</strong></li> : null}
                                        {item.complexType ? <li>Content type: {item.complexType === 'S' ? 'Single' : 'Channel'}</li> : null}
                                        {item.createdDt ?  <li>Date of purchase: {item.createdDt.day} / {item.createdDt.month} / {item.createdDt.year}</li> : null}
                                        {item.endDt ?  <li>Paid period of validity:  {item.endDt.day} / {item.endDt.month} / {item.endDt.year}</li> : null}
                                        <li> <FontAwesomeIcon icon={faInfoCircle} ></FontAwesomeIcon><strong> More info</strong></li>
                                    </ul>
                                </Col>
                        </Row>
                            </Col>
                        })}      
                  </Row>
                </Container>

            </div>
        )
    } else if( props.authorize.status && !props.authorize.userInfo.publicContentItem){
         return <div>no melodies bought</div>
    } else {
        return(
            <ModalLogin 
                showLogin={showLogin}
                handleCloseLogin={handleCloseLogin}
            ></ModalLogin>
        )
    }
}

function mapStateToProps(state){
    return {
        authorize: state.authorizeReducer.authorize,
        playerPlayWithId: state.playerReducer.playerPlayWithId
    }
}

const mapDispatchToProps = {
    setPlayTrackId,
    stopPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalCabinet)