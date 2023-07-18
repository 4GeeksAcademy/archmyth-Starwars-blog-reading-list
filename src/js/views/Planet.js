import React, {useContext,useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Planet =() => {
    const params = useParams()
    const {actions, store} = useContext(Context)

    // console.log("planetas"+store.planet)

    useEffect(() =>{
        actions.getPlanet(params.planetId)
    }, []);

    return(
        <div className="col-12">
            {store.planet ? (
                <div className="row">
                    <div className="col-md-4 col-sm-2">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${params.planetId}.jpg`} className="img-fluid rounded-start w-100" alt="..."/>
                    </div>
                           
                    <div className="card-body col-md-8 col-sm-10">
                        <h5 className="card-title">{store.planet.name}</h5>
                             <ul>
                                <li>Climate: {store.planet.climate}</li>
                                <li>Diameter: {store.planet.diameter}</li>
                                <li>Created: {store.planet.created}</li>
                                <li>Gravity: {store.planet.gravity}</li>
                                <li>Orbital period: {store.planet.orbital_period}</li>
                                <li>Population: {store.planet.population}</li>
                                <li>Rotation period: {store.planet.rotation_period}</li>
                                <li>Surface water: {store.planet.surface_water}</li>
                                <li>Terrain: {store.planet.terrain}</li>
                                </ul> 
                            </div>
                      </div>
            ): (
                <h3>Cargando...</h3>)}
        </div>
    )
}