import React from 'react'
import ShowItem from './ShowItem'
import Spinner from '../ui/Spinner'

const ShowGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <ShowItem key={Math.random()} item={item}></ShowItem>
      ))}
    </section>
  )
}

export default ShowGrid;