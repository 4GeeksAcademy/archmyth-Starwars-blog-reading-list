import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Vehicle = () => {
    const params = useParams()
    const {actions, store} = useContext(Context)

    useEffect(() =>{
        actions.getVehicle(params.vehicleId)
    }, []);

    return(
        <div className="col-12">
            {store.vehicle ? (
                <div className="row">
                    <div className="col-md-4 col-sm-2">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.vehicleId}.jpg`} className="img-fluid rounded-start w-100" alt="..."/>
                    </div>
                           
                    <div className="card-body col-md-8 col-sm-10">
                        <h5 className="card-title">{store.vehicle.name}</h5>
                             <ul>
                                <li>MGLT: {store.vehicle.MGLT}</li>
                                <li>Cargo capacity: {store.vehicle.cargo_capacity}</li>
                                <li>Consumables: {store.vehicle.consumables}</li>
                                <li>Cost in credits: {store.vehicle.cost_in_credits}</li>
                                <li>Created: {store.vehicle.created}</li>
                                <li>Crew: {store.vehicle.crew}</li>
                                <li>Edited: {store.vehicle.edited}</li>
                                <li>Hyperdrive rating: {store.vehicle. hyperdrive_rating}</li>
                                <li>length: {store.vehicle.length}</li>
                                <li>Manufacturer: {store.vehicle.manufacturer}</li>
                                <li>Max atmosphering speed: {store.vehicle.max_atmosphering_speed}</li>
                                <li>Model: {store.vehicle.model}</li>
                                <li>Passengers: {store.vehicle.passengers}</li>
                                <li>Vehicle class: {store.vehicle.vehicle_class}</li>

                                </ul> 
                            </div>
                      </div>
            ): (
                <h3>Cargando...</h3>)}
        </div>
    )
}