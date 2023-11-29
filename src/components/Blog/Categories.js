import React from 'react'
import Category from './Category'
import { slug } from 'github-slugger'

const Categories = ({categories, currentSlug}) => {
  return (
    <div className='px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark border-b-2 border-solid border-dark py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10'>
        {categories?.map((category, index) => {
            return(
                <Category key={index} 
                    link={`/categories/${category}`} 
                    name={category} 
                    active={decodeURIComponent(currentSlug)===slug(category)} 
                />
            )
        })}
    </div>
  )
}

export default Categories