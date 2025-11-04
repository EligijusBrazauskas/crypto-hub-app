import { configureStore } from "@reduxjs/toolkit";
import { currenciesApi, newsApi } from "api";

export default configureStore({
	reducer: {
		[currenciesApi.reducerPath]: currenciesApi.reducer,
		[newsApi.reducerPath]: newsApi.reducer,
	},
});
