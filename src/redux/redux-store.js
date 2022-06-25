import { combineReducers, createStore } from 'redux';
import contentReducer from './content-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  contentPage: contentReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
