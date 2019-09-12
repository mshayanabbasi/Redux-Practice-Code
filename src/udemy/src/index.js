import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counter_reducer from './store/reducers/counter'
import results_reducer from './store/reducers/results'


const rootReducer = combineReducers({
	ctr: counter_reducer,
	res: results_reducer
})

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const logger = store => {
	return next => {
		return action => {
			console.group(action.type)
			console.log('[Middleware] Dispatching', action)
			const result = next(action)
			console.log('[Middleware] next state', store.getState())
			console.groupEnd()
			return result
		}
	}
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
