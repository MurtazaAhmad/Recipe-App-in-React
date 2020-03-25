import React from 'react'

function Inline(){
//you need to create style as an object
  const heading = {
    fontSize:'72px',
    color:'orange'
  }

  return (
  <div>
  <h3 style={heading}>
  Inline styling on this line!
  </h3>
  </div>
  )
}

export default Inline
