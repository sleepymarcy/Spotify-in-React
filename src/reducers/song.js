import { GET_PLAYER_SONG, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions/actions";

const songInitialState = {
  playerSong: {},
  liked: []
};

const song = (state = songInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_PLAYER_SONG:
      return {
        ...state,
        playerSong: payload,
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        liked: [...state.liked, payload],
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        liked: state.liked.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export default song;