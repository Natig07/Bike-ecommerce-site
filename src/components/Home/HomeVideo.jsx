import { Button } from 'antd'
import React, { lazy, useRef, useState } from 'react'
import { FaRegPlayCircle } from 'react-icons/fa'

function HomeVideo() {
    const [loading, setloading] = useState();
    const videoref = useRef(null);
    const inforef = useRef(null);
    const handlePlay = () => {
        videoref.current.style.display = 'block';
        videoref.current.parentElement.style.animation = 'videoMove 2s forwards ease';
        setloading(true);
        if (window.innerWidth > 600) {
            inforef.current.style.width = '45%';
        }
        if (window.innerWidth <= 460) {
            // inforef.current.style.width = '100%';

        }
        setTimeout(() => {
            videoref.current.play();
            setloading(false);
        }, 2300);
    }
    return (
        <>
            <div className='decision-video'>
                <div ref={inforef} className="decision-video-info">
                    <h2>Which bike should buy?</h2>
                    <p>Watch the video and decide which type of bike suits for you</p>
                    <Button loading={loading}
                        onClick={handlePlay}
                        type='primary' className='video-btn' icon={<FaRegPlayCircle className='playcircle' />} iconPosition='start'>Play Video</Button>
                </div>
                <div className='video-div'>
                    <video loading='lazy' ref={videoref} controls playsInline src="./src/assets/videos/bike-video.mp4" typeof='video/mp4'></video>
                </div>
            </div>

        </>
    )
}

export default HomeVideo