import React from 'react';
import Verkkokauppa from './app/views/Verkkokauppa';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartItems from './app/reducers/cartItems';

const App = () => {

  const store = createStore(cartItems)

  return(
    <Provider store={store}>
      <Verkkokauppa />
    </Provider>
  )
}

export default App;