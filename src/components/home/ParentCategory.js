import React from 'react'

function ParentCaterory(props){
    if(props.searchResponse){
        props.setParentCategorySelected(null)
    }
    let parentCategory = "Component"

    if(props.parentCategory.length === 0){
        parentCategory = "Loading"
    }

    if(!(props.parentCategory.length === 0)){
        parentCategory = props.parentCategory.filter(item => !(item.hasOwnProperty('parentCatId')))
                .map((item, index)=>{
                    if(props.selectedParentCategoryId === 0 && index === 0){
                        props.setParentCategorySelected(item.contentCatId)
                        return(<button key={index} className="btn btn-success my-2 px-md-6" 
                        onClick={() => {
                            props.stopPlayer()
                            props.cleanSearchResult()
                            props.setParentCategorySelected(item.contentCatId)}}>{item.catName}
                        </button>)
                    }
                    else if(item.contentCatId === props.selectedParentCategoryId){
                        return(<button key={index} className="btn btn-success my-2 px-md-6" 
                        onClick={() => {
                            props.cleanSearchResult()
                            props.setChildCategorySelected(0)
                            props.setParentCategorySelected(item.contentCatId)
                            props.stopPlayer()
                        } }>{item.catName}
                        </button>)

                    } else {
                        return(<button key={index} className="btn btn-light my-2 px-md-6" 
                        onClick={() => {
                            props.stopPlayer()
                            props.cleanSearchResult()
                            props.setChildCategorySelected(0)
                            props.setParentCategorySelected(item.contentCatId)}}>{item.catName}
                        </button>)

                    }
                })
    } 

    return <div>
            Genres: <div>{parentCategory}</div>
        </div>
}

export default ParentCaterory
