import React from "react";
import logo from "./logo.svg";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { AppRoute } from "./router/AppRoute";

function App() {
	return (
		<ErrorBoundary>
			<AppRoute />
		</ErrorBoundary>
	);
}

export default App;
