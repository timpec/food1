import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import cartItems from "./cartItems";

let initialState = {
    user: {}
}

export const UpdateData = (key, value) => ({
    type: 'SET_VALUE_USER',
    payload: {key, value}
});

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_VALUE_USER':
            return{...state, user: action.payload};
        default:
            return state;
    }
}
/*
const reducer = combineReducers({
    userReducer
})
*/
const persistConfig = {
    key: "root",
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, userReducer);
const reducer2 = combineReducers({
    user: persistedReducer,
    cart: cartItems
})

export const store = createStore(
    reducer2
)

export const persistor = persistStore(store);