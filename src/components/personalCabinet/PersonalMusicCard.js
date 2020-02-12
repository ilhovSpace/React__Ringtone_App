import React,{useState} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './personalCabinet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import MyPlayer from '../home/content/MyPlayer/MyPlayer'
import ModalMoreInfo from '../home/content/ModalMoreInfo'

function PersonalMusicCard(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function clickOnIcon(){
        handleShow() 
        props.stopPlayer()
    }

    return <Col xs={12} md={6} key={props.index}>
    <Row className='item_area'>
          <Col xs={4} md={4} className='player'>
              <MyPlayer audioSrc={'https://t-rbt.telesens.ua/t-rbt/sound?id='+props.item.contentNo} imageSrc={props.item.imageId ? 
              "https://t-rbt.telesens.ua/t-rbt/image?id="+props.item.imageId : 
              "https://www.tunefind.com/i/album-art-empty.png"}
              musicTrackId={props.item.contentNo} 
              // setPlayTrackId={props.setPlayTrackId}
              // stopPlayer={ props.stopPlayer}
              // playerPlayWithId={props.playerPlayWithId}
              ></MyPlayer>
          </Col>
          <Col xs={8} md={8}>
              <ul style={{listStyleType: 'none'}}> 
                  {props.item.title ? <li><strong>{props.item.title}</strong></li> : null}
                  {props.item.artist ? <li><strong>{props.item.artist}</strong></li> : null}
                  {props.item.complexType ? <li>Content type: {props.item.complexType === 'S' ? 'Single' : 'Channel'}</li> : null}
                  {props.item.createdDt ?  <li>Date of purchase: {props.item.createdDt.day} / {props.item.createdDt.month} / {props.item.createdDt.year}</li> : null}
                  {props.item.endDt ?  <li>Paid period of validity:  {props.item.endDt.day} / {props.item.endDt.month} / {props.item.endDt.year}</li> : null}
                  <li onClick={() => {clickOnIcon()}} style={{cursor: 'pointer', paddingTop: '20px'}}> <FontAwesomeIcon icon={faInfoCircle} ></FontAwesomeIcon><strong> More info</strong></li>
              </ul>
          </Col>
  </Row>
  <ModalMoreInfo show={show}
 soundSrc={'https://t-rbt.telesens.ua/t-rbt/sound?id='+props.item.contentNo} imageSrc={props.item.imageId ? 
 "https://t-rbt.telesens.ua/t-rbt/image?id="+props.item.imageId : 
 "https://www.tunefind.com/i/album-art-empty.png"}
 musicTrackId={props.item.contentNo} 
                handleClose={handleClose}
                setPlayTrackId={props.setPlayTrackId} 
                info={props.item}
                ></ModalMoreInfo>
      </Col>
      
}

export default PersonalMusicCard

                       
    