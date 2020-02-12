import React, { useState } from 'react';
import Swal from 'sweetalert2'
import ModalMoreInfo from './ModalMoreInfo'
import ModalLogin from './ModalLogin'
import MyPlayer from './MyPlayer/MyPlayer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faInfoCircle } from '@fortawesome/free-solid-svg-icons'


 function Card (props){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  function showDialogWindow(){
    if(!props.authorize.status){
        Swal.fire({
            position: 'top',
            title: 'Do you want to log in?',
            text: "To buy a ringtone you need to log in",
            icon: 'question',
            cancelButtonColor: '#f7f7f7',
            showCloseButton: true,
            confirmButtonColor: '#5cb85c',
            confirmButtonText: 'Login'
          }).then((result) => {
            if (result.value) {
              return handleShowLogin()
            }
          })
    } else {
        Swal.fire({
              // title: props.title,
              position: 'top',
              text:  'Do you want to buy this ringtone?',
              html: `<h3>Do you want to buy this ringtone?</h3>
              <h4>${props.title}</h4>
              ${props.artist ? '<h4>'+props.artist+'</h4>' : ''}
              <h4>Price: ${props.priceModelNo}$</h4>`,
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#5cb85c',
              cancelButtonColor: '#6c757d',
              showCloseButton: true,
              confirmButtonText: 'Yes',
              reverseButtons: true
                  }).then((result) => {
                    if (result.value) {
                      return props.buyRingtoneRequest(
                        localStorage.getItem('login'), 
                        localStorage.getItem('pass'), 
                        props.infoItem.contentNo)
                    }
                })
            }  
          }

    return (
        <div className='card' key={props.id}>
          <MyPlayer imageSrc={props.imageSrc} 
          // setPlayTrackId={props.setPlayTrackId}
          // stopPlayer={ props.stopPlayer}
          // playerPlayWithId={props.playerPlayWithId}
          audioSrc={props.soundSrc}
          setPlyaingIdTreck={props.setPlyaingIdTreck}
          plyaingId={props.plyaingId}
          musicTrackId={props.musicTrackId}
          ></MyPlayer>
                <h3 style={{height: '33px'}}>{props.title}</h3>
                <h3>{props.artist}</h3>
            {props.infoItem.complexType ? <p>{props.infoItem.complexType === 'S' ? 'Single' : 'Channel'}</p> : null}
            <div className='flexBlock' style={{justifyContent: "space-around"}}>
                <div style={{fontSize: '28px'}}>${props.priceModelNo}</div>
                <div style={{fontSize: '28px'}}>
                <span style={{courser: 'pointer'}}>
                  <FontAwesomeIcon icon={faInfoCircle} style={{marginRight: '10px', cursor:'pointer'}}
                  onClick={() => {handleShow()}}></FontAwesomeIcon>
                </span>
                <span style={{courser: 'pointer'}}>
                  <FontAwesomeIcon icon={faShoppingCart} style={{cursor:'pointer'}}
                  onClick={showDialogWindow}></FontAwesomeIcon>
                </span>
                </div>
            <ModalLogin 
                showLogin={showLogin} 
                handleCloseLogin={handleCloseLogin} 
            ></ModalLogin>
            <ModalMoreInfo 
                // setPlyaingIdTreck={props.setPlyaingIdTreck}
                // plyaingId={props.plyaingId}
                // musicTrackId={props.musicTrackId}
                info={props.infoItem}
                show={show} 
                handleClose={handleClose} 
                title={props.title} 
                soundSrc={props.soundSrc}
                imageSrc={props.imageSrc}
            ></ModalMoreInfo>
            </div>
        </div>
    )
}

export default Card


