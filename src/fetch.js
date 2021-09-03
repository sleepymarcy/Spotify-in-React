// Here are stored all the fetches (Home page, Album page, Artist page)

export const fetchMusic = async(query) => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    let music = await response.json()
    return music.data
}

export const fetchAlbum = async(id) => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`)
    let album = await response.json()
    return album
}

export const fetchArtist = async(id) => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`)
    let artist = await response.json()
    let track = artist.tracklist 
    let trackResponse = await fetch(track)
    let tracks = await trackResponse.json()
    let albums = track.data.map((t) => t.album )
    artist = {
        ...artist,
        tracklist: tracks.data,
        albums: albums
    }
    return artist
}