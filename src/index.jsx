import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './store/reducers';

import Teste from './components/teste.jsx';

ReactDom.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Teste />
    </Provider >, document.getElementById('app'));