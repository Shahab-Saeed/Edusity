import React from 'react'
import "./Testimonials.css"
import nexticon from "../../assets/next-icon.png"
import backicon from "../../assets/back-icon.png"
import user1 from "../../assets/user-1.png"
import user2 from "../../assets/user-2.png"
import user3 from "../../assets/user-3.png"
import user4 from "../../assets/user-4.png"
import { useRef } from 'react'


const Testimonials = () => {

    const slider = useRef();
    let tx=0;

    const slideForward=()=>{
        if(tx>-50){
            tx -=25
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx<0){
            tx +=25
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
      <img src={nexticon} alt="" className='nextbtn' onClick={slideForward}/>
      <img src={backicon} alt="" className='backbtn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to persue my degree at Edusity was one of the best decison I've ever made. The Supportive  community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user2} alt="" />
                        <div>
                            <h3>William Jackson </h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to persue my degree at Edusity was one of the best decison I've ever made. The Supportive  community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user3} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to persue my degree at Edusity was one of the best decison I've ever made. The Supportive  community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to persue my degree at Edusity was one of the best decison I've ever made. The Supportive  community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
