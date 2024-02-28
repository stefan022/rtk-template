import React from "react";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Router from "./router/Router";

const App: React.FC = (): JSX.Element => {
	return (
		<ErrorBoundary>
			<Router />
		</ErrorBoundary>
	);
}

export default App;
