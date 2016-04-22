import { createStore, applyMiddleware } from 'redux';
import main from '../reducers/main';
import thunk from 'redux-thunk';

export default function configureStore(initialStore) {
    const store = createStore(
        main,
        initialStore,
        applyMiddleware(thunk)
    );

    return store;
}