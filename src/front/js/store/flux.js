const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		message: null,
		token: null,
	  },
	  actions: {
		signup: (formData, history) => {
		  fetch(
			"https://playground.4geeks.com/apis/fake/todos/user/francisco/signup",
			{
			  method: "POST",
			  body: formData,
			}
		  )
			.then((response) => response.json())
			.then((data) => {
			  console.log("Data From Flux", data);
			  history.push("/");
			  window.location.reload();
			})
			.catch((error) =>
			  console.log("Ha ocurrido un error en el registro", error)
			);
		},
		login: (formData, history) => {
		  fetch(
			"https://playground.4geeks.com/apis/fake/todos/user/francisco/token",
			{
			  method: "POST",
			  body: formData,
			}
		  )
			.then((response) => response.json())
			.then((data) => {
			  console.log(data);
			  setStore({ token: data });
			  sessionStorage.setItem("token", JSON.stringify(data));
			  history.push("/Private");
			  window.location.reload();
			})
			.catch((error) => console.log("Login Error", error));
		},
		logout: (history) => {
		  sessionStorage.clear();
		  console.log("Login out successfull");
		  setStore({ token: null });
		  history.push("/");
		},
	  },
	};
  };
  
  export default getState;