const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],

			character: null,
			planet: null,
			vehicle: null,

			favorites: [],
			description: {},
		},
		actions: {
			people: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people");
					const data = await response.json();
					console.log(data);
					setStore({ people: data.results });
				} catch (error) {
					console.error("Error loading characters:", error);
				}
			},

			planets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets");
					const data = await response.json();
					console.log(data);
					setStore({ planets: data.results });
				} catch (error) {
					console.error("Error loading planets:", error);
				}
			},

			vehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles");
					const data = await response.json();
					console.log(data);
					setStore({ vehicles: data.results });
				} catch (error) {
					console.error("Error loading vehicles:", error);
				}
			},

			getCharacter: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
					const data = await response.json();
					console.log(data);
					setStore({ character: data.result.properties });
				} catch (error) {
					console.error("Error retrieving character:", error);
				}
			},

			getPlanet: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
					const data = await response.json();
					console.log(data);
					setStore({ planet: data.result.properties });
				} catch (error) {
					console.error("Error retrieving planet:", error);
				}
			},

			getVehicle: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
					const data = await response.json();
					console.log(data);
					setStore({ vehicle: data.result.properties });
				} catch (error) {
					console.error("Error retrieving vehicle:", error);
				}
			},	
			setItem: (e) => {
				setStore({
					favorites:getStore().favorites,
					item: e,
					description: getStore().description
				})	
			},
			fetchDescription: (e) => {
				fetch(e)
				.then((result) => {
					result.json()
				})
				.then((data) => {
					setStore({
						favorites: getStore().favorites,
						item: getStore().item,
						description: data.result.properties
					})
				})
			},

			addFavorite: (e) => {
				setStore({
					favorites:[ ...new Set([...getStore().favorites, e])], //...new function removes duplicate within array
					item: getStore().item,
					description: getStore().description
				})	
			},

			removeFavorites: (e) => {
				setStore({
					favorites:getStore().favorites.filter((x) =>{
						return x != e
					}),
					item: getStore().item,
					description: getStore().description
				})
			},
		}
	};
};
			

export default getState;
