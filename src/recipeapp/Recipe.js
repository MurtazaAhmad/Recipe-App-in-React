import React from 'react'
function Recipe({title,calories,image,ingredients}) {
  return (
    <div className="col-md-4">
    <div className="card text-center">
    <div className="card-header">
    <h1>{title}</h1>
      <img src={image} />
      </div>
      <div className="card-body">
    <ol>
    {ingredients.map(ingredient => (
      <li>{ingredient.text}</li>
    ))
    }
    </ol>
    <p><b>Calories: </b>{calories}</p>
    </div>
    </div>
    </div>
  )
}
export default Recipe
