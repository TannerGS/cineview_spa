import React from 'react'
import placeholder from '../../img/placeholder.jpg'

const ShowItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item['show']['image'] == null ? {placeholder} : item['show']['image']['original']} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item['show']['name'] == null ? 'Not Found' : item['show']['name']}</h1>
          <ul>
            <li>
              <strong>Year:</strong> {item['show']['premiered'] == null ? 'Not Found' : item['show']['premiered']}
            </li>
            <li>
              <strong>Rated:</strong> {item['show']['average'] == null ? 'Not Found' : item['show']['rating']['average']}
            </li>
            <li>
              <strong>Average Runtime:</strong> {item['show']['averageRuntime'] == null ? 'Not Found' : item['show']['averageRuntime']}
            </li>
            <li>
              <strong>Show Status:</strong> {item['show']['status'] == null ? 'Not Found' : item['show']['status']}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default ShowItem;