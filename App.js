import React from 'react';
import Verkkokauppa from './app/views/Verkkokauppa';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { store, persistor } from './app/reducers/user';
import { PersistGate } from 'redux-persist/integration/react';
import cartItems from './app/reducers/cartItems';

const App = () => {

  //const store = createStore(cartItems)
  //const store = createStore(persistedReducer)

  //const persistor = persistStore(store);
      //<PersistGate persistor={persistor}>

  return(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Verkkokauppa />
      </PersistGate>
    </Provider>
  )
}

export default App;