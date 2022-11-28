import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [ping, setPing] = useState("initializing");
	useEffect(() => {
		axios.get("api/ping").then((res) => {
			if (res.status === 200) {
				setPing(res.data.message);
			} else {
				console.log(res);
			}
		});
	});

	return (
		<div className="App">
			<header className="App-header">
				<img
					src={logo}
					className="App-logo"
					alt="logo"
				/>
				<p>
					Edit <code>src/App.js</code> and save to
					reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					{ping}
				</a>
			</header>
		</div>
	);
}

export default App;
