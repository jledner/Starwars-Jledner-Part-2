const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			planets:[],
			favorites:[{
				name: "one"
			}],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getData: (url, param2) => {
				
				const store = getStore();
				  fetch(url)
					.then((response) => {
					  console.log(response);
					  if (!response.ok) {
						throw Error(response.statusText);
					  }
			  
					  return response.json();
					})
					.then((data) => {
					  console.log(data.results);
					  setStore({[param2] : data.results});
					})
					.catch((error) => {
					  console.log("Looks like there was a problem: \n", error);
					});
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorite: (fav) => {
				//get the store
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const newFavorites = getStore().favorites;
				newFavorites.push(fav);
				//reset the global store
				setStore({ favorites: newFavorites });
			}

		}
	};
};

export default getState;
