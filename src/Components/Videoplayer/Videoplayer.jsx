import React from 'react'
import "./Videoplayer.css"
import video from "../../assets/videoplayback.mp4"
import { useRef } from 'react'


const Videoplayer = (props) => {
    const player = useRef(null)
    const closeplayer=(e)=>{
        if(e.target=== player.current){
            props.setplaystate(false)
        }
    }

  return (
    <div className={`videoplayer ${props.playstate? " " : "hide"}`} ref={player} onClick={closeplayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
