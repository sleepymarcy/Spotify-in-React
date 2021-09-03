import '../css/Album.css'

const Album = (props) => {
    return (<img className='album' src={props.src} alt='Album Cover' key={props.key} />)
}

export default Album