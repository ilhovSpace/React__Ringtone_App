import React from 'react'

function BreadCrumbs(props){
let parentCategoryName = ''
let childCategoryName = ''
let contentFromCategory = ''

props.parentCategory.forEach(element => {
    if(element.contentCatId === props.selectedParentCategoryId){
        parentCategoryName = <li className="breadcrumb-item active">{element.catName}</li>
        contentFromCategory = 'Content from : '
    }
    if(element.contentCatId === props.selectedChildCategoryId){
        childCategoryName = <li className="breadcrumb-item active" aria-current="page">{element.catName}</li>
        contentFromCategory = 'Content from : '
    }
    if(props.searchResponse){
        childCategoryName = ''
        contentFromCategory = 'Content from : Search'
    }
});

    return(
        <div>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <span style={{color: '#6c757d', marginRight: '10px'}}>{contentFromCategory}</span> 
               {parentCategoryName}
                {childCategoryName}
            </ol>
            </nav>
        </div>
    )
}

export default BreadCrumbs