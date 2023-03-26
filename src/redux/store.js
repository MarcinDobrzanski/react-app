import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux'
import columnsReducer from './columnsRedux'
import cardsReducer from './cardsRedux'
import searchStringReducer from './searchStringRedux'


// action creators
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });


const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;