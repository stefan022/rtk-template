import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rootAPI = createApi({
	tagTypes: [],
	reducerPath: "api",
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl: "/",
		prepareHeaders: (headers) => {
			headers.append("Content-Type", "application/json");
			return headers;
		},
	}),
});

export default rootAPI;
