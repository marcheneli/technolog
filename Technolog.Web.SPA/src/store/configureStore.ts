import { createStore, applyMiddleware } from 'redux';
import main from '../reducers/main';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
}

export default function configureStore(initialStore) {
    const store = createStore(
        main,
        initialStore,
        applyMiddleware(thunk, logger)
    );

    return store;
}