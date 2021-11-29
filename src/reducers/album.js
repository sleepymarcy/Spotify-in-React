import { GET_ALBUM_DATA, GET_SONG_DATA } from "../actions/actions";

const albumInitialState = {
    album: {},
    songs: [],
}

const album = (state = albumInitialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_ALBUM_DATA:
            return {
                ...state,
                album: payload,
            };
        case GET_SONG_DATA:
            return {
                ...state,
                songs: payload,
            }
        default:
            return state;
    }
};

export const getAlbumInfo = (albumId) => {
    return async (dispatch) => {
        let headers = new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
        });

        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
                {
                    method: "GET",
                    headers,
                }
            );

            if (response.ok) {
                let album = await response.json();
                dispatch ({
                    type: GET_ALBUM_DATA,
                    payload: album,
                })
                dispatch ({
                    type: GET_SONG_DATA,
                    payload: album.tracks.data,
                })
            }
        } catch (exception) {
            console.log(exception);
        }
    };
}  



export default album