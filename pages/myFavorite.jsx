import React from 'react';

const MyFavorite = ({ favorites }) => {
  console.log("Favorites:", favorites); // Add this line to check the prop
  return (
      <div>
          <h1>My Favorite Recipes</h1>
          <ul>
              {favorites.map((favorite, index) => (
                  <li className='favorite-list' key={index}>
                  <div className='sample-recipe'>
                  <div className='recipe'>
                      <div className='recipe-name'>{favorite.name}</div>
                      <div className='recipe-ingredient'>Ingredients: {favorite.ingredients}</div>
                      <div className='recipe-cuisine'>cuisine: {favorite.cuisine}</div>
                      </div>
                      </div>
                  </li>
              ))}
          </ul>
      </div>
  );
}


export default MyFavorite;
