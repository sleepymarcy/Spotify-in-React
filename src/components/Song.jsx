import React from "react";
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai'

import {connect} from "react-redux"

import { GET_PLAYER_SONG , ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions/actions";


const mapStateToProps = (state) => {
  return state.song
}

const mapDispatchToProps = (dispatch) => ({
  changePlayerSong : (track) => {
    dispatch({
      type: GET_PLAYER_SONG,
      payload: track
    })
  },
  addSongToLiked : (track) => {
    dispatch({
      type: ADD_TO_FAVOURITES,
      payload: track
    })
  },
  removesSongFromLiked : (id) => {
    dispatch({
      type: REMOVE_FROM_FAVOURITES,
      payload: id
    })
  }
})

const Song = ({ track , song , changePlayerSong, addSongToLiked, removesSongFromLiked , liked }) => (
  <div className="py-3 trackHover">
    <BsFillPlayFill  onClick={() => {
      return changePlayerSong(track)
    }}/>
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
    
    {
      liked.find(item => item.id === track.id) ? (
        <AiFillHeart onClick={() => {removesSongFromLiked(track.id)}}/>
    
      ) : (
        <AiOutlineHeart onClick={() => {addSongToLiked(track)}}/>
        
      )
    }
    
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
    
  </div>
);


export default connect(mapStateToProps , mapDispatchToProps)(Song);