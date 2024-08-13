import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './ sagas';
import workReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    workReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
