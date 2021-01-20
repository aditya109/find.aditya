import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import "./App.css";
import DataProvider from "./components/DataWebStore/DataProvider";

class App extends React.Component {
	render() {
		return (
			<DataProvider>
				<div className="App">
					<Navbar />
				</div>
			</DataProvider>
		);
	}
}

export default App;
