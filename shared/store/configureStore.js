import { createStore, applyMiddleware  } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import rootReducer from '../reducers';
import promiseMiddleware from '../lib/promiseMiddleware';


export default function configureStore(history, initialState){
    const reduxRouterMiddleware = routerMiddleware(history);

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxRouterMiddleware, promiseMiddleware)
    );

    const syncHistory = syncHistoryWithStore(history, store)

    if(module.hot){
        module.hot.accept('../reducers', () =>{
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return {
        store,
        syncHistory
    }
}
