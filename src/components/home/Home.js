import React,{useEffect} from 'react'
import ParentCategory from './ParentCategory'
import ChildCategory from './ChildCategory'
import BreadCrumbs from './BreadСrumbs' 
import Content from './content/Content'
import Search from './Search'
import { connect } from 'react-redux'
import {getAllCategory, 
        setParentCategorySelected, 
        setChildCategorySelected, 
        authorizeRequest,
        buyRingtoneRequest,
        getAllSounds,
        cleanSearchResult,
        setPlayTrackId,
        stopPlayer
        } from '../../redux/actions/actions'


function Home(props){

    useEffect(()=>{
        props.getAllCategory()
        props.getAllSounds()
    },[])

    return(
        <div>
            <Search></Search>
            <BreadCrumbs
                parentCategory={ props.parentCategory }
                selectedParentCategoryId={ props.selectedParentCategoryId }
                selectedChildCategoryId={ props.selectedChildCategoryId }
                searchResponse={ props.searchResponse }
            ></BreadCrumbs>
            <ParentCategory
                parentCategory={ props.parentCategory }
                selectedParentCategoryId={ props.selectedParentCategoryId } 
                setParentCategorySelected={ props.setParentCategorySelected }
                setChildCategorySelected={ props.setChildCategorySelected }
                searchResponse={ props.searchResponse }
                cleanSearchResult={props.cleanSearchResult}
                stopPlayer={ props.stopPlayer }
                >
            </ParentCategory>
            <ChildCategory 
                parentCategory={ props.parentCategory } 
                selectedParentCategoryId={ props.selectedParentCategoryId }
                selectedChildCategoryId={ props.selectedChildCategoryId }
                setChildCategorySelected={ props.setChildCategorySelected }
                searchResponse={ props.searchResponse }
                 >
            </ChildCategory>
            <Content 
                setPlayTrackId={ props.setPlayTrackId }
                stopPlayer={ props.stopPlayer }
                playerPlayWithId={ props.playerPlayWithId }
                allSounds={ props.allSounds }
                selectedParentCategoryId={ props.selectedParentCategoryId }
                selectedChildCategoryId={ props.selectedChildCategoryId }
                soundPlay={ props.soundPlay }
                authorize={ props.authorize }
                buyRingtone={ props.buyRingtoneRequest }
                searchResponse={ props.searchResponse }
            ></Content>
        </div>
    )
}

function mapStateToProps(state){
    return {
        parentCategory: state.categoryReducer.parentCategory,
        allSounds: state.categoryReducer.allSounds,
        selectedParentCategoryId: state.categoryReducer.selectedParentCategoryId,
        selectedChildCategoryId: state.categoryReducer.selectedChildCategoryId,
        soundPlay: state.categoryReducer.soundPlay,
        authorize: state.authorizeReducer.authorize,
        searchResponse: state.authorizeReducer.searchResponse,
        playerPlayWithId: state.playerReducer.playerPlayWithId
    }
}

const mapDispatchToProps = {
    getAllCategory,
    getAllSounds,
    setParentCategorySelected,
    setChildCategorySelected,
    authorizeRequest,
    buyRingtoneRequest,
    cleanSearchResult,
    setPlayTrackId,
    stopPlayer
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)