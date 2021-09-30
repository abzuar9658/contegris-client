import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools }          from 'redux-devtools-extension'
import { createLogger }                 from 'redux-logger';
import thunk                            from 'redux-thunk';
import reducers                         from '../reducers';

export function configureStore(defaultState = {}) {
  const logger = createLogger({ collapsed: true });
  const middlewares = [thunk, logger];
  const storeEnhancements = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducers, defaultState, storeEnhancements);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
      store.dispatch({ type: '@@_Reducer_Injected' })
    });
  }

  return store
}
