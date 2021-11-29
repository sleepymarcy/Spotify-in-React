import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import home from "../reducers/home";
import album from "../reducers/album";
import artist from "../reducers/artist";
import song from "../reducers/song";

const mainReducer = combineReducers({
    home: home,
    album: album,
    artist: artist,
    song: song
  })
  
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  
  
  
  const configureStore = createStore(
    mainReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  
  
  export default configureStore;