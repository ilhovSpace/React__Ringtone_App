import React,{useState} from "react";

function MyPlayer(props){
    const [playStatus, setPlayStatus] = useState(false);
    const [AUDIO] = useState(new Audio([props.audioSrc]));


    if(props.playerPlayWithId !== props.musicTrackId && props.playerPlayWithId !== 0 && playStatus === true){
        setPlayStatus(false)
        AUDIO.pause()
        AUDIO.currentTime = 0
    }

    if(props.playerPlayWithId === props.musicTrackId){
        playing()
    }

    function playing(){
        if(playStatus){
            let playPromise = AUDIO.play();

            if (playPromise !== undefined) {
              playPromise
                .then(_ => {})
                .catch(error => {
                });
            }

        } else {
            AUDIO.pause()
            AUDIO.currentTime = 0
        }
        
    }

    function playTrack(){
        props.setPlayTrackId(props.musicTrackId)
        setPlayStatus(!playStatus)
        playing()
    }

    return(
        <div>
            <audio id="props.musicTrackId"><source src={ props.audioSrc }></source></audio>
            <div className={(!playStatus) ? 
                'song__image_wrap song__image_wrap_isPlayingNo' : 
                "song__image_wrap song__image_wrap_isPlayingYes"} 
                onClick={ ()=>playTrack() }>
            <img src={props.imageSrc} alt={'music'} style={{width: '170px', height: '170px', display: 'block', margin: 'auto'}} className='playBlock'></img>
            </div>
        </div>
    )
}

export default MyPlayer