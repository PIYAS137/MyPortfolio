import React from 'react'
import { useLocation } from 'react-router'
import HandBurger from '../../../temp/HandBurger';

const BookSubPage = () => {
    const dataSet = useLocation()
    const data = dataSet.state;
    console.log(data)
  return (
    <div>
      <HandBurger/>
      <div className='BookSubPageWrapper'>
        <div className="Bsubleft">
          <img src={data.image} alt="" />
        </div>
        <div className="Bsubright">
          <table>
            <tr>Book Name : {data.BookName}</tr>
            <tr>Publication : {data.publication}</tr>
            <tr>
              <ul>
              <p>Writers : </p>
                {data.writer.map((one:string)=>{
                  return(
                    <li>{one}</li>
                  )
                })}
              </ul>
            </tr>
            <tr>Pub.Date : {data.publishDate}</tr>
            <tr>Language Base : {data.language}</tr>
            <tr>Total Pages : {data.pages}</tr>
            <tr>Collected Source : {data.source}</tr>
            <tr>Collected Source : {data.source}</tr>
            <a target='blank' href={data.link}>Download Book</a>
          </table>
        </div>
    </div>
    <div className="BsubBottom">
      <h2>{data.title}</h2>
      <p>{data.about}</p>
    </div>
    </div>
  )
}

export default BookSubPage