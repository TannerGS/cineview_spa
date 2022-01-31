import React from 'react'

const ShowItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item['show']['image']['original']} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item['show']['name']}</h1>
          <ul>
            <li>
              <strong>Year:</strong> {item['show']['premiered']}
            </li>
            <li>
              <strong>Rated:</strong> {item['show']['rating']['average']}
            </li>
            <li>
              <strong>Average Runtime:</strong> {item['show']['averageRuntime']}
            </li>
            <li>
              <strong>Show Status:</strong> {item['show']['status']}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ShowItem;