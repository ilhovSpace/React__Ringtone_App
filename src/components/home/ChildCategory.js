import React from 'react'

function ChildComponent(props){
    let childCategory = "Component"

    if(props.parentCategory.length === 0){
        childCategory = "Loading"
    }
    
    if(!(props.parentCategory.length === 0)){
        childCategory = props.parentCategory.filter(item => props.selectedParentCategoryId === item.parentCatId)
        .map((item, index)=>{
                    if(props.selectedChildCategoryId === 0 && index===0){
                        props.setChildCategorySelected(item.contentCatId)
                        return(<button key={index} className="btn btn-secondary my-2 px-md-6" 
                        onClick={() => props.setChildCategorySelected(item.contentCatId)}>{item.catName}
                        </button>)
                    } else if(item.contentCatId === props.selectedChildCategoryId){
                        return(<button key={index} className="btn btn-secondary my-2 px-md-6" 
                        onClick={() => props.setChildCategorySelected(item.contentCatId)}>{item.catName}
                        </button>)
                    } else {
                        return(<button key={index} className="btn btn-light my-2 px-md-6" 
                        onClick={() => props.setChildCategorySelected(item.contentCatId)}>{item.catName}
                        </button>)

                    }
                })
    } 
    return <div>
            {!props.searchResponse ? <div>Categories: <div>{childCategory}</div></div> : <div>Content from : Search</div>}
         </div>
}


export default ChildComponent