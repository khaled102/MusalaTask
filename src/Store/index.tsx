import {applyMiddleware} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import rootReducer from '../Reducers';
// Imports: Redux Root Saga
import rootSaga from '../Sagas';

const Middlewares: Array<any> = [];
const sagaMiddleware = createSagaMiddleware();

Middlewares.push(sagaMiddleware);

export default function configureStore() {
  let store = createStore(rootReducer, applyMiddleware(...Middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
}
