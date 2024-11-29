import React, { useEffect, useRef, useState } from 'react'
import Info from './Info'
import HomeHead from './HomeHead'
import HomeVideo from './HomeVideo';
import WhyWe from './WhyWe';
import ToTop from '../ToTop';



function Home({ setVisible }) {
    //for up arrow appear or disappear base on scrolling
    const [scrollpos, setscrollPos] = useState(window.scrollY)
    useEffect(() => {
        const handleScroll2 = () => {
            const scrollPosition = window.scrollY;
            setscrollPos(scrollPosition)
        };

        window.addEventListener('scroll', handleScroll2);

        return () => {
            window.removeEventListener('scroll', handleScroll2);
        };
    }, []);
    return (
        <>
            <div >
                <HomeHead />
                <Info />
                <HomeVideo />
                <WhyWe showmodal={setVisible} />
            </div >
            {
                scrollpos > (window.screen.height * 300 / 100) &&
                <ToTop />
            }
        </>
    )
}

export default Home