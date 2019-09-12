import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counter_reducer from './store/reducers/counter'
import results_reducer from './store/reducers/results'


const rootReducer = combineReducers({
	ctr: counter_reducer,
	res: results_reducer
})
const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
