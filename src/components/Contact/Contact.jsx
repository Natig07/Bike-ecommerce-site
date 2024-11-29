import React, { useEffect, useRef, useState } from 'react'
import { GrDeliver } from "react-icons/gr";
import { GiDutchBike } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { Flex } from 'antd'
import { useLocation } from 'react-router-dom';
import ToTop from '../ToTop';


function Contact() {
    //counting effect when scroll
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [hasCounted, setHasCounted] = useState(false);

    //scroll animation for stats
    const statRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            const element = statRef.current.getBoundingClientRect().top;

            if (element <= scrollPosition - window.innerHeight * 6 / 100 && !hasCounted) {
                setHasCounted(true);
                startCountAnimation1();
                startCountAnimation2()
            }
            if (element > scrollPosition + window.innerHeight * 14 / 100 && hasCounted) {
                setHasCounted(false)
                setCount(0);
                setCount2(0);
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasCounted]);

    const startCountAnimation1 = () => {
        const targetCount1 = 504;
        const duration = 1000;
        const incrementTime = 32;
        const increment1 = targetCount1 /
            (duration / incrementTime);

        let delcount = 0;

        const updateCounter = () => {
            delcount += increment1;
            if (delcount >= targetCount1) {
                setCount(targetCount1);
            } else {
                setCount(Math.floor(delcount));
                setTimeout(updateCounter, incrementTime);
            }

        };
        updateCounter();
    };
    const startCountAnimation2 = () => {
        const targetCount2 = 632;
        const duration = 1200;
        const incrementTime = 32;
        const increment2 = targetCount2 / (duration / incrementTime)

        let pcount = 0;
        const updateCounter2 = () => {
            pcount += increment2;
            if (pcount >= targetCount2) {
                setCount2(targetCount2);
            } else {
                setCount2(Math.floor(pcount));
                setTimeout(updateCounter2, incrementTime)
            }
        };
        updateCounter2();
    };


    //for app arrow setting scroll pos.
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
        <div className='contact-container'>
            <div className="contact-head">
                <h1>CONTact uS</h1>
                <p>Have questions, need assistance, or want to learn more about our products? We're here to help! Fill out the form below, and our team will get back to you as soon as possible. You can also reach us via email or phone.</p>
            </div>
            <div className="contact-main">
                <form className="get-touch">
                    <h1>Let's Get in Touch</h1>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input required placeholder='Enter your Name...' type="text" id="name" />
                    </div>
                    <div>
                        <label htmlFor="surname">Surname</label>
                        <input required placeholder='Enter your Surname...' type="text" id="surname" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input required placeholder='Enter your email address...' type="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea required placeholder='Enter your message...' id="message" maxLength={200} rows={3} />
                    </div>
                    <button>Send Message</button>
                </form>
                <div className='details'>
                    <h2>Contact Details</h2>
                    <div className='section'>
                        <Flex align='center' gap={10}>
                            <h4>Our Hours</h4>
                            <FaRegClock className='section-icon' />
                        </Flex>
                        <p> 10:00 AM – 22.00 PM</p>
                        <p><strong>Monday – Friday</strong></p>
                    </div>
                    <div className='section'>
                        <Flex align='center' gap={10}>
                            <h4>Location</h4>
                            <FaMapLocationDot className='section-icon' />
                        </Flex>
                        <p>Wantagh avenue, New York, DC 20003, USA</p>
                    </div>
                    <div className='section'>
                        <Flex align='center' gap={10}>
                            <h4>Contact Us</h4>
                            <FaRegComment className='section-icon' />
                        </Flex>
                        <p>Phone: +1 333 33 44</p>
                        <p>Email:
                            <a href="mailto:"> N-bikes.contact@gmail.com</a>
                        </p>
                    </div>
                </div>

            </div>
            <div ref={statRef} className="stat">
                <div className='delivery'>
                    <GrDeliver className='del-icon' />
                    <p>Delivery Related Enquries</p>
                    <h2>{count2}</h2>
                </div>
                <div className="prod">
                    <GiDutchBike className='com-icon' />
                    <p>Product Related Enquries</p>
                    <h2>{count}</h2>
                </div>
            </div>

            {/*for up arrow appear , disappear */}
            {
                scrollpos > (window.screen.height * 90 / 100) &&
                <ToTop />
            }

        </div>
    )
}

export default Contact