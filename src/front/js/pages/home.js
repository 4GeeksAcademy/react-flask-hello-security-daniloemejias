import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	async function submitForm(e) {
		e.preventDefault()
		let data = new FormData(e.target)
		let resp = await actions.userLogin(data.get("email"), data.get("password"))
		if (resp >= 400){
			return
		}
		console.log("Login exitoso")
	}

	return (
		<div className="text-center mt-5">
			<h1>Inicie Sesion</h1>
			<form onSubmit={submitForm}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail" className="form-label">Email address</label>
					<input type="email" className="form-control"name="email" id="exampleInputEmail" aria-describedby="emailHelp"></input>
					<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" className="form-control"name="password" id="exampleInputPassword1"></input>
				</div>
				<button type="submit" className="btn btn-primary">Login</button>
			</form>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is runnig)..."}<br></br>
				<code>{store.accessToken}</code>
			</div>
		</div>
	);
};
