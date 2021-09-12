import { home } from "../Home/modules/reducer.js";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    home
});

export default rootReducer;