import React from 'react'
import { BooksType } from '../../temp/MyTypesForPortfolio'
import { Link } from 'react-router-dom'
import HandBurger from '../../temp/HandBurger'

const Book = (props:BooksType) => {
    const bookData=props.data
  return (
        <Link state={bookData} to={bookData.BookName}>
            <div className='oneBook'>
                <img style={{maxWidth:"100%"}} src={bookData.image} alt="" />
                <h2>{bookData.BookName}</h2>
            </div>
        </Link>
    
  )
}

export default Book