import {useState} from 'react'
import { BooksArray } from './BooksArray'
import Book from './Book'
import HandBurger from '../../temp/HandBurger';

const Books = () => {
  const [books]=useState(BooksArray);
  const [val,setVal]=useState("");
  


  return (
    <>
    <HandBurger/>
      <div className="bookSearch">
        <input onChange={(e)=>{setVal(e.target.value)}} placeholder='Search with language' type="search" />
        <h2 className='searchRightText' style={{color:"gray"}}>A collection of some books to facilitate my work</h2>
      </div>
      <div className='booksWrapper'>
      
      {books.filter((one)=>{
        return val.toLowerCase()===""?one:one.language.toLowerCase().includes(val)
      }).map((one)=>{
        return(
          <Book key={one.id} data={one}/>
        )
      })}
    </div>
    </>
  )
}

export default Books