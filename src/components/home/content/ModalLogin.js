import React from "react";
import {Modal} from 'react-bootstrap';
import {authorizeRequest} from '../../../redux/actions/actions'
import { connect } from 'react-redux'

function ModalLogin(props) {

    function submit(e){
        props.handleCloseLogin()
        e.preventDefault()
        let login = e.target.elements[0].value
        e.target.elements[0].value = ''
        let pass = e.target.elements[1].value
        e.target.elements[1].value = ''
        props.authorizeRequest(login, pass)
      }
    

    return (
      <>
        <Modal show={props.showLogin} onHide={props.handleCloseLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Authorize</Modal.Title>
          </Modal.Header>
            <Modal.Body>
            <form onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Phone number</label>
                <input type="tel" name='login'className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder= "Phone number" minLength="9" maxLength="12" pattern="[0-9]{9,12}" required></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type='password' className="password form-control" name='password' id="exampleInputPassword1" placeholder="Password" minLength='4' maxLength="4" required></input>
              </div>
              <p>To get the password send SMS to number 444</p>
              <button className="btn btn-secondary my-2 px-md-6 mr-2" onClick={props.handleCloseLogin}>
              Cansel
            </button>
              <button type="submit" className="btn btn-success" >login</button>
              </form>
            </Modal.Body>
        </Modal>
      </>
    );
  }
  function mapStateToProps(state){
    return {
        authorize: state.authorizeReducer.authorize              
    }
}

  const mapDispatchToProps = {
      authorizeRequest
  }

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin) 