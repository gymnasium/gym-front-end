import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';

import { ReactQueryDevtools } from 'react-query-devtools';

import rootReducer from './src/store/reducers';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
  });

  const persistor = persistStore(store);

  return (
    <>
      <ReactQueryDevtools />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {element}
        </PersistGate>
      </Provider>
    </>
  );
};
