import React from 'react'

function Character({character}) {
    const {id,name,image} = character
  return (
    
        <div className='text-center p-5 '>
              <h3>{name}</h3>
              <img className='img-fluid rounded-pill' src={image} alt={name} />
              <p>{character.origin.name}</p>
        </div>
    
  )
}

export default Character