import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { FavoritesContext } from './FavoritesContext';

const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.people();
    actions.planets();
    actions.vehicles();
  }, []);

  const isFavorite = (id) => store.favorites.some((item) => item.uid === id);

  return (
    <Container>
      <h1 className="text-center mb-4">Star Wars Blog</h1>

      <h2>People</h2>
      <div className="d-flex sideScroll flex-nowrap overflow-auto">
        {store.people.map((person) => (
          <div className="mr-3" key={person.uid}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} />
              <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>{person.description}</Card.Text>
                <Button onClick={() => { actions.addFavorite(person.name) }}>
                  {isFavorite(person.uid) ? (
                    <i className="fas fa-heart-fill"></i>
                  ) : (
                    <i className="fas fa-heart"></i>
                  )}
                </Button>
                <Link to={`/character/${person.uid}`} className="btn btn-secondary ms-2">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <h2>Planets</h2>
      <div className="d-flex sideScroll flex-nowrap overflow-auto">
        {store.planets.map((planet) => (
          <div className="mr-3" key={planet.uid}>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} />
                    <Card.Body >
                      <Card.Title>{planet.name}</Card.Title>
                      <Card.Text>{planet.description}</Card.Text>
                    
                    
                      <Button
                        onClick={() => {actions.addFavorite(planet.name)}}
                      >
                        {isFavorite(planet.uid) ? (
                           <i className="fas fa-heart-fill"></i>
                           ) : (
                             <i className="fas fa-heart"></i>
                           )}
                      </Button>
                      <Link to={`/planet/${planet.uid}`} className="btn btn-secondary ms-2">
                        View Details
                      </Link>
                      </Card.Body>
            </Card>
          </div>
        ))}
      </div>

    

      <h2>Vehicles</h2>
      <div className="d-flex sideScroll flex-nowrap overflow-auto">
        {store.vehicles.map((vehicle) => (
          <div className="mr-3" key={vehicle.uid}>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} />
                    <Card.Body >
                      <Card.Title>{vehicle.name}</Card.Title>
                      <Card.Text>{vehicle.description}</Card.Text>
                    
                      <Button
                        onClick={() => {actions.addFavorite(vehicle.name)}}
                      >
                        {isFavorite(vehicle.uid) ? (
                            <i className="fas fa-heart-fill"></i>
                            ) : (
                              <i className="fas fa-heart"></i>
                            )}
                      </Button>
                      <Link to={`/vehicle/${vehicle.uid}`} className="btn btn-secondary ms-2">
                        View Details
                        </Link>
                      </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Home;
