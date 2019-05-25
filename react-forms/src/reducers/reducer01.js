
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const reducer01 = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});


export default reducer01;
