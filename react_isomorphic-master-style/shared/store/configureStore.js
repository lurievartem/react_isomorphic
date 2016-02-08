import { createStore, applyMiddleware  } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from '../lib/promiseMiddleware';

export default function configureStore(initialState){
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, promiseMiddleware)
    );

    if(module.hot){
        module.hot.accept('../reducers', () =>{
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
