import { GET_ARTIST, GET_SONGS } from "../actions/actions";

const artistState = {
  artist: {},
  songs: [],
};

const artist = (state = artistState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ARTIST:
      return {
        ...state,
        artist: payload,
      };
    case GET_SONGS:
      return {
        ...state,
        songs: payload,
      };
    default:
      return state;
  }
};

export const handleArtistById = (artistId) => {
  return async (dispatch) => {
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
    });
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let artist = await response.json();
        dispatch({
          type: GET_ARTIST,
          payload: artist,
        });
        const getArtist = async () => {
          let tracksResponse = await fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
              artist.name,
            {
              method: "GET",
              headers,
            }
          );

          if (tracksResponse.ok) {
            let tracklist = await tracksResponse.json();
            dispatch({
              type: GET_SONGS,
              payload: tracklist.data,
            });
          }
        };
        await getArtist();
      }
    } catch (exception) {
      console.log(exception);
    }
  };
};

export default artist;