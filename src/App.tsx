import React from "react";

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
