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
                  <ul>
                    <li>Title: {props.title}</li>
                    <li>Content type: {}</li>
                    <li>Artist: Britney Spears</li>
                    <li>Copyright: Sony BMG</li>
                    <li>Purchase price: $3</li>
                    <li>Prolongation price: $2.5</li>
                    <li>Charge period (days): 10</li>
                    <li>Link: https://t-rbt.telesens.ua/t-rbt/?id=499105566</li>
                    <li>ID: 499105566</li>
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