import React from "react"
import { connect } from 'react-redux'
import { searchRequest } from '../../redux/actions/actions'

function Search(props){

    function submit(e){
        e.preventDefault()
        let search = e.target.elements[0].value
        props.searchRequest(search)
        e.target.elements[0].value = ''
      }

    return(
        <div>
            <nav className="navbar navbar-light bg-light breadcrumb">
                
            <div className="navbar-brand">
                <img src='https://t-rbt.telesens.ua/t-rbt/img/rbt-logo.png' alt={'rtb-logo'} style={{height:'40px'}}></img>
                <p>Your favorite melodies as a ringtone!</p>
            </div>
            <form className="form-inline" onSubmit={submit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </nav>
        </div>
    )
}

function mapStateToProps(state){
    return {
        authorize: state.authorizeReducer.searchResponse
    }
}

const mapDispatchToProps = {
    searchRequest
}


export default connect(mapStateToProps,mapDispatchToProps)(Search)