/**
 * index.
 * @authors: dawangf (dawangf@sina.com).
 * @createDate: 2019/11/6.
 * @version: 1.0.
 */
import {createStore} from 'redux';
import reducer from "./reducer";
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
