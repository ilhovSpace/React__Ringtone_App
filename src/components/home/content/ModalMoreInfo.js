import React from "react";
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import MyPlayer from './MyPlayer/MyPlayer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MoreInfo(props) {
    return (
      <>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Content information</Modal.Title>
          </Modal.Header>
            <Modal.Body>
            <Container>
              <Row>
                <Col xs={5} md={5} style={{padding: '0'}}>
                  <MyPlayer imageSrc={props.imageSrc} audioSrc={props.soundSrc}    
                     setPlyaingIdTreck={props.setPlyaingIdTreck}
                      plyaingId={props.plyaingId}
                      musicTrackId={props.musicTrackId}
                  ></MyPlayer>
                </Col>
                <Col xs={7} md={7} style={{padding: '0'}}>
                  <ul style={{listStyleType:'none'}}>
                    {props.info.complexType ? <li>Content type: {props.info.complexType === 'S' ? 'Single' : 'Channel'}</li> : null}
                    {props.info.title ? <li>Title: {props.info.title}</li> : null}
                    {props.info.artist ? <li>Artist: {props.info.artist}</li> : null}
                    {props.info.copyright ? <li>Copyright: {props.info.copyright}</li> : null}
                    {props.info.priceModelNo ? <li>Purchase price: {props.info.priceModelNo}$</li> : null}
                    {props.info.amountPeriodic ? <li>Prolongation price: {props.info.amountPeriodic}$</li> : null}
                    {props.info.chargePeriod ? <li>Charge period (days): {props.info.chargePeriod}</li> : null}
                    {props.info.contentNo ? <li>Link: <a href={'https://t-rbt.telesens.ua/t-rbt/?id='+props.info.contentNo}>{'.../t-rbt/?id='+props.info.contentNo}</a></li> : null}
                    {props.info.contentNo ? <li>ID: {props.info.contentNo}</li> : null}
                  </ul>
                </Col>
            </Row>
            </Container>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={props.handleClose}> OK </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default MoreInfo