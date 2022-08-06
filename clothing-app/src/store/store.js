import { compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'], // avoid persisting the user due to existence of auth listener from Firebase
}
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);


// whenever action is dispatched before the action hits the reducers, it hits the middlewares
const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);

const composedEnhancer = 
    (process.env.NODE_ENV !== 'production' && 
    window && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

export const store = createStore(
    persistedReducer, 
    undefined, 
    composedEnhancers
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);


