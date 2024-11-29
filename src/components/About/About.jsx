import { Carousel, Collapse, Flex, Spin } from 'antd'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { MdEco, MdOutlineSentimentSatisfiedAlt } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";

import { Canvas } from '@react-three/fiber';

import { OrbitControls, useGLTF } from '@react-three/drei';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import ToTop from '../ToTop';
import { Light } from 'three';

//for prevent rendering issues
useGLTF.preload('./src/assets/3dmodel/bicycle.glb');

function About({ isdark }) {

    //for Our Values accordion 
    const items = [
        {
            key: 1,
            label: <h3>Sustainability</h3>,
            children: <p> We are dedicated to promoting eco-friendly transportation by offering bikes that help reduce carbon emissions and contribute to a greener planet.</p>,
            extra: <MdEco className='value-icon' />
        },
        {
            key: 2,
            label: <h3>Customer Satisfaction</h3>,
            children: <p>Your happiness is our priority. We aim to provide an enjoyable and seamless shopping experience, from browsing our website to riding your new bike.</p>,
            extra: <MdOutlineSentimentSatisfiedAlt className='value-icon' />

        },
        {
            key: 3,
            label: <h3>Passion for Cycling</h3>,
            children: <p>We live and breathe cycling, and we want to share that passion with you. Every product in our store is selected with love and a deep understanding of what makes a great ride.</p>,
            extra: <FaHandHoldingHeart className='value-icon' />

        },
    ]

    // 3d Model import
    const bicycle = useGLTF('./src/assets/3dmodel/bicycle.glb', true);

    //positon change handling for scroll animation
    const [canvasPosition, setCanvasPosition] = useState(0);

    //position change on x axis for scroll animaton
    const [xchange, setXchange] = useState(0);

    //to handle changing height of model while scrolling 
    const [height, setHeigth] = useState(window.innerWidth < 890 ? 330 : (window.innerWidth > 893 && window.innerWidth < 1040) ? 438 : 260);

    //for up arrow appear , disappear handling 
    const [scrollpos, setscrollPos] = useState(window.scrollY)

    const serviceRefs = useRef([]);
    useEffect(() => {

        const handleScroll = () => {
            const newYPosition = window.scrollY;
            // console.log(newYPosition)
            setscrollPos(newYPosition);
            if (window.innerWidth > 885 && window.innerWidth <= 1040) {
                if (newYPosition > 940) {
                    setHeigth(210);
                }
                if (newYPosition > 990 && newYPosition < 1150) {
                    setXchange(57);
                    setCanvasPosition(670);
                }
                if (newYPosition < 800) {
                    setXchange(0);
                    setCanvasPosition(0);
                    setHeigth(438);
                }
                if (newYPosition > 1450) {
                    setXchange(130);
                    setCanvasPosition(1300);
                    setHeigth(242);
                }
            }

            if (window.innerWidth > 1040 && window.innerWidth <= 1280) {
                if (newYPosition > 1080) {
                    serviceRefs.current.forEach((div) => {
                        div.style.animation = 'service-move-1 1.5s forwards ease';
                    })
                }
                if (newYPosition > 800) {
                    setHeigth(210);
                }
                if (newYPosition > 1120 && newYPosition < 1350) {
                    setXchange(57);
                    setCanvasPosition(750);
                }
                if (newYPosition < 730) {
                    setXchange(0);
                    setCanvasPosition(0);
                    setHeigth(438);
                }
                if (newYPosition > 1450) {
                    setXchange(130);
                    setCanvasPosition(1380);
                    setHeigth(242);
                }
            }
            if (window.innerWidth > 440 && window.innerWidth <= 884) {

                if (newYPosition > 800) {
                    setHeigth(210);
                }
                if (newYPosition > 780) {
                    serviceRefs.current.forEach((div) => {
                        div.style.animation = 'service-move-1 1.5s forwards ease';
                    })
                }
                if (newYPosition > 830 && newYPosition < 990) {
                    setXchange(57);
                    setCanvasPosition(700);
                }
                else if (newYPosition < 700) {
                    setXchange(0);
                    setCanvasPosition(0);
                    setHeigth(370);
                }
                if (newYPosition > 1160) {
                    setXchange(122);
                    setCanvasPosition(1270);
                    setHeigth(242);
                }
            }
            if (window.innerWidth <= 460) {
                if (newYPosition > 1100) {
                    setHeigth(210);
                }
                if (newYPosition > 1000) {
                    serviceRefs.current.forEach((div) => {
                        div.style.animation = 'service-move-1 1.5s forwards ease';
                    })
                }
                if (newYPosition > 1110 && newYPosition < 1600) {
                    setXchange(0);
                    setCanvasPosition(680);
                }
                else if (newYPosition < 1100) {
                    setXchange(0);
                    setCanvasPosition(0);
                    setHeigth(370);
                }

            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            ;
        }
    }, []);

    //for button change the next slide  and previous slide of carusel
    const carouselRef = useRef(null);
    const nextSlide = () => {
        carouselRef.current.next();
    };

    const prevSlide = () => {
        carouselRef.current.prev();
    };


    return (
        <div className='about-container'>
            <div className="about-head">

                <div className='about-head-text'>

                    <h1>About N-bikes</h1>
                    <p>
                        Welcome to N-bikes, your trusted partner in the world of cycling! At N bikes, we believe that bicycles are more than just a mode of transportation – they are a lifestyle, a path to freedom, and a way to explore the world around you. Founded with a passion for cycling and a commitment to quality, N-bikes offers a diverse range of bicycles and accessories tailored to meet the needs of every rider.

                        Whether you're an adventurous mountain biker, a city commuter, or looking for a fun ride for your kids, we've got something for everyone. Our products are carefully selected for durability, performance, and style, ensuring that you get the best biking experience every time you ride. Plus, with our easy-to-navigate online shop and customer-first service, buying your next bike is as enjoyable as riding it.

                        At N-bikes, we're driven by a mission to promote cycling as a healthy, eco-friendly, and exciting way to travel. Join us in embracing the cycling revolution and discover your perfect ride with N-bikes!
                    </p>
                </div>
            </div>
            <div className="main">
                <div className="value-us">
                    <section className='value-info'>
                        <h2>Our Values</h2>
                        <h4>At N-bikes, we stand by core values that drive every decision we make:</h4>

                        {/*accordion */}
                        <Collapse className='accord' items={items} accordion defaultActiveKey={1} />
                    </section>

                    <section className='value-img'>
                        {/*3D bicycle model*/}
                        <Canvas
                            style={{
                                height: `${height}px`,
                                zIndex: 20,
                                right: `${xchange}%`,
                                top: `${canvasPosition}px`,
                                transition: 'top 0s ease-in-out'
                            }}
                            className="cursor-pointer"
                            frameloop="demand"
                            camera={{ position: [-2, 2, -1], fov: 30, near: 0.1, far: 100 }}
                        >
                            {/* Ambient light for soft overall illumination */}
                            <ambientLight intensity={1} />

                            {/* Directional light positioned above the model */}
                            {isdark &&
                                <directionalLight
                                    position={[0, 5, 0]}  // Position above the model
                                    intensity={4}  // Adjust intensity as needed
                                    castShadow={true} // Enable shadow casting
                                />
                            }


                            {/* Orbit controls */}
                            <OrbitControls
                                autoRotate={true}
                                enableZoom={false}
                                maxPolarAngle={Math.PI / 2} // Limit rotation to the top half of the model
                                minPolarAngle={0}
                                enablePan={false}
                            />

                            {/* Model and Suspense for fallback loading */}
                            <Suspense fallback={<Spin spinning={true} percent='auto' fullscreen />}>
                                <primitive
                                    className='model'
                                    position={[0, -0.4, 0]}
                                    object={bicycle.scene}
                                    scale={1}
                                    castShadow={true} // Enable shadows for the model
                                />
                            </Suspense>
                        </Canvas>

                    </section>
                </div>
                <div className="prd-service">
                    <h1>Products and Services</h1>
                    <h3>Our range includes:</h3>

                    <div className="prd-service-info">
                        <div ref={(el) => (serviceRefs.current[0] = el)} className='info-div'>
                            <span>01.</span>
                            <p><strong>Mountain Bikes</strong> – Perfect for rugged trails and adventurous rides.</p>
                        </div>
                        <div ref={(el) => (serviceRefs.current[1] = el)} className="info-div">
                            <span>02.</span>
                            <p><strong>E-Bikes</strong> – The perfect ba-lance between effort and ease with electric support.</p>
                        </div>
                        <div ref={(el) => (serviceRefs.current[2] = el)} className="info-div">
                            <span>03.</span>
                            <p><strong>City Bikes</strong> – Stylish and practical for commuting or casual rides.</p>
                        </div>
                        <div ref={(el) => (serviceRefs.current[3] = el)} className="info-div">
                            <span>04.</span>
                            <p><strong>Kids' Bikes</strong> – Designed for safety and fun, introducing kids to the joy of cycling.</p>
                        </div>

                    </div>
                    {/*3D model place for next scroll*/}
                    <div className='forcanvas'>

                    </div>

                    <p>Additionally, we offer expert repair services and customization options to ensure your bike fits your style and needs perfectly.</p>
                </div>
                <div className="testimonal">
                    <h1>What People say?</h1>

                    <Carousel dots={false} ref={carouselRef} infinite={true} >
                        <div className="testimonal-div">
                            <p>"Bought my first bike from N-bikes, and I couldn't be happier. The team was incredibly helpful, and the bike is top-notch!"</p>
                            <small>–Emma L.</small>
                        </div>
                        <div className="testimonal-div">
                            <p>"N-bikes made my e-bike shopping experience effortless. I love the quality and their dedication to customer care!"</p>
                            <small>–James K.</small>
                        </div>
                        <div className="testimonal-div">
                            <p>"Exceptional service and a fantastic selection of bikes! N-bikes helped me find the perfect mountain bike, and the whole process was a breeze." </p>
                            <small>–Sarah M.</small>
                        </div>
                        <div className="testimonal-div">
                            <p>"I've never had a better shopping experience! The team at N-bikes was knowledgeable and friendly, and my city bike rides like a dream."</p>
                            <small>–David P.</small>
                        </div>
                    </Carousel>

                    {/* Slide change buttons*/}

                    <Flex align='center' gap={20} justify='center'>
                        <button onClick={prevSlide} className='arrow-btn' ><SlArrowLeft /></button>
                        <button onClick={nextSlide} className='arrow-btn'><SlArrowRight /></button>
                    </Flex>
                </div>
                <div className="comitment">
                    {/* for 3D model positon change for next scroll*/}

                    <div className="left-com">

                    </div>
                    <div className="right-com">
                        <h1>Our Commitment to Quality</h1>
                        <p>At N bikes, we believe that quality is non-negotiable. From selecting premium materials to providing top-tier customer service, we ensure that every product we offer meets the highest standards of durability, performance, and design.
                        </p>
                    </div>

                </div>
            </div>

            {/*Up arrow appear , disappear logic*/}

            {
                scrollpos > (window.screen.height * 180 / 100) &&
                <ToTop />
            }

        </div>
    )
}

export default About