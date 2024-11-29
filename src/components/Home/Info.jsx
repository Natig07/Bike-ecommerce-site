import React from 'react'
import { LuFrame, LuPackageOpen } from "react-icons/lu";
import { GiSpring, GiCartwheel } from "react-icons/gi";
import { RxColorWheel } from "react-icons/rx";
import saddle from '../../assets/images/saddle.png'
import { IoIosSpeedometer } from "react-icons/io";
import { GrPerformance } from "react-icons/gr";




function Info() {
    return (
        <div className='home-info-holder'>
            <h2 className='info-pass'>Explore Bikes</h2>
            <div className='infos-section-1'>
                <div className='info-text'>
                    <h1>Mountain Bikes</h1>
                    <div className='info-icons'>
                        <div className="icon-div">
                            <LuFrame className='frame-icon' />
                            <p>Rugged Frames</p>
                        </div>
                        <div className="icon-div">
                            <GiSpring className='susp-icon' />
                            <p>High Suspension System</p>
                        </div>
                        <div className="icon-div">
                            <GiCartwheel className='wheel-icon' />
                            <p>Wide Tires</p>
                        </div>
                    </div>
                    <p>Built for off-road trails, mountain bikes have durable frames, wide tires, and suspension systems to handle rugged terrain with ease.</p>
                    <a className='read-btn' href='https://en.wikipedia.org/wiki/Mountain_bike' >Read More</a>
                </div>
                <div className="sec-1-right"></div>
            </div >
            <div className='infos-section-2'>
                <div className="div sec-2-left"></div>
                <div className='info-text'>
                    <h1>City Bikes</h1>
                    <div className='info-icons'>
                        <div className="icon-div">
                            <LuFrame className='frame-icon' />
                            <p>Lightweight Frames</p>
                        </div>
                        <div className="icon-div">
                            <img src={saddle} alt='saddle image' className='saddle-img' />
                            <p>Upright Seating</p>
                        </div>
                        <div className="icon-div">
                            <RxColorWheel className='wheel-icon' />
                            <p>Smooth Tires</p>
                        </div>
                    </div>
                    <p>Designed for urban commuting, city bikes feature lightweight frames, smooth tires, and an upright seating position for comfort on paved roads.</p>
                    <a className='read-btn' href='https://en.wikipedia.org/wiki/Utility_bicycle#City_bicycle'>Read More</a>
                </div>
            </div >
            <div className='infos-section-3'>
                <div className="left-bg"></div>
                <div className='info-text'>
                    <h1>Electric and Folding Bikes</h1>
                    <div className='info-icons'>
                        <div className="icon-div">
                            <IoIosSpeedometer className='frame-icon' />
                            <p>Faster Commutes</p>
                        </div>
                        <div className="icon-div">
                            <LuPackageOpen className='frame-icon' />
                            <p>Easy Storage</p>
                        </div>
                        <div className="icon-div">
                            <GrPerformance className='wheel-icon' />
                            <p>High Performance</p>
                        </div>
                    </div>
                    <p>Folding bikes are compact and easy to store, making them perfect for city dwellers with limited space or those who need portability. Electric bikes come with a motor to assist pedaling, offering a faster, energy-efficient option for commuting or long-distance rides.</p>
                    <a href='https://en.wikipedia.org/wiki/Electric_bicycle' className='read-btn'>Read More</a>
                </div>
                <div className="right-bg"></div>
            </div >
        </div>

    )
}

export default Info