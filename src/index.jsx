import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './store/reducers';

import Teste from './components/teste.jsx';

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Teste />
    </Provider >, document.getElementById('app'));