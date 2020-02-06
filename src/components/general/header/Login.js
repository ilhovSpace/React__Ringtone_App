import React,{useState} from "react"
import {Modal} from 'react-bootstrap';
import {authorizeRequest, authorizeLogout} from '../../../redux/actions/actions'
import { connect } from 'react-redux'

function Login(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submit(e){
    handleClose()
    e.preventDefault()
    let login = e.target.elements[0].value
    e.target.elements[0].value = ''
    let pass = e.target.elements[1].value
    e.target.elements[1].value = ''
    props.authorizeRequest(login, pass)
  }

  if(props.authorize.status){
  return <div><div style={{display: 'inline-block', position: 'relative', top: '4px', left: '-5px'}}>You entered as {props.authorize.userInfo.subscriber.subsIdent}</div> <button className="btn btn-outline-light" onClick={() => props.authorizeLogout()}>Logout</button></div>
  }
  else {
    return (
      <>
      <button className="btn btn-outline-light" onClick={handleShow}>Login</button>
        <Modal show={show} onHide={handleClose}>
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
              <button className="btn btn-secondary my-2 px-md-6 mr-2" onClick={handleClose}>Cansel</button>
              <button type="submit" className="btn btn-success">login</button>
            </form>
        </Modal.Body>
        </Modal>
      </>
    )
  }
}

  function mapStateToProps(state){
    return {
        authorize: state.authorizeReducer.authorize
      }
    }
  
  const mapDispatchToProps = {
      authorizeRequest,
      authorizeLogout
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
