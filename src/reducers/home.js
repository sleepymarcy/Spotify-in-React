import { GET_ARTIST_DATA } from "../actions/actions";

const homeInitialState = {
  rockSongs: [],
  popSongs: [],
  hipHopSongs: [],
};


const home = (state = homeInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ARTIST_DATA:
      return {
        ...state,
        [payload.key]: payload.value, 
      };
    default:
      return state;
  }
};


export const handleArtist = (artistName, category) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers: new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          }),
        }
      );

      let result = await response.json();
      let songInfo = result.data;

      dispatch({
        type: GET_ARTIST_DATA,
        payload: { key: category, value: songInfo },
      });
    } catch (err) {
      console.log(err);
    }
  };
};


export default home;