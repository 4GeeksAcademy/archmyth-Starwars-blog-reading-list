import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const FavoritesContext = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Favorites</h2>
      {store.favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <ul className="list-group">
          {store.favorites.map((item) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={item.uid}>
              {item}
              <span className="ms-2" onClick={() => actions.removeFavorites(item)}><i className="fas fa-trash-alt"></i></span>
            </li>
          ))}
        </ul>
      )}
      <Link to="/" className="btn btn-secondary mt-3">
        Back to Home
      </Link>
    </div>
  );
};


export default FavoritesContext;

