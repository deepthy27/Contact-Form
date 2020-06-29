import {createStore} from 'redux'
import formReducer from './components/Redux/formReducer';
const store = createStore(formReducer)
export default store;