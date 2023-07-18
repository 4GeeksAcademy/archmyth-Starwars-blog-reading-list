import React,  {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/sw.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const removeFromFavorites = (item) => {
		actions.toggleFavorite(item);
	  };
	return (
		<nav className="navbar navbar-light bg-light mb-3" style={{backgroundColor:"white"}}>
			<Link to="/">
				<img className="navbar_img ms-5" src={logo} width={100}></img>
			</Link>

			<div className="ml-auto">
				<button className="nav-link dropdown-toggle btn btn-primary text-light rounded me-4" href="/favorite" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites.map((item) => {
						return <li><a className="dropdown-item d-flex justify-content-between align-items-center" href="#">{item} <span className="ms-2" onClick={() => actions.removeFavorites(item) } class="fa fa-trash-alt"></span></a></li>
									
					})}
          <Link to="/favorite" className="dropdown-item btn btn-primary ms-3 rounded">
        Go to Favorite
      </Link>

				</ul>
        
				
			</div>
				
		</nav>
	);
};
