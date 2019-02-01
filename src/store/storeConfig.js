import { createStore, applyMiddleware  } from 'redux';
import logger from 'redux-logger'; 
import { rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import usersSaga from '../sagas/postsSaga'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
)

sagaMiddleware.run(usersSaga);