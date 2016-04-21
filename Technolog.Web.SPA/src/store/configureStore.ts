import { createStore } from 'redux';
import main from '../reducers/main';

export default function configureStore(initialStore) {
    const store = createStore(main, initialStore);

    return store;
}