import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
