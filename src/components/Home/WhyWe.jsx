import React from 'react'
import { TfiReload } from "react-icons/tfi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";
import { HiOutlineWallet } from "react-icons/hi2";
import { IoMdOpen } from 'react-icons/io';
import { Button } from 'antd';

function WhyWe({ showmodal }) {
    return (
        <>
            <div className='why-choose'>
                <h1>Why Choose n-bikes?</h1>
                <h3>Experience the Best in Cycling with Us!</h3>
                <div className="why-boxes">
                    <div className='why-box'>
                        <CiDeliveryTruck className='why-icon' />
                        <p>Free and secure delivery</p>
                    </div>
                    <div className='why-box'>
                        <TfiReload className='why-icon' />
                        <p>Return OF GOODS IN CASE OF PROBLEMS</p>
                    </div>
                    <div className='why-box'>
                        <VscWorkspaceTrusted className='why-icon' />
                        <p>Guarantee for qulaity of goods Satisfaction</p>
                    </div>
                    <div className='why-box'>
                        <HiOutlineWallet className='why-icon' />
                        <p>Multiple Payment Options</p>
                    </div>
                    <div className='why-box'>
                        <IoPricetagsOutline className='why-icon' />
                        <p>BEst Global Brands</p>
                    </div>
                </div>

            </div>
            <hr />
            <div className="logo-slide">
                <div className="logo-slide-inner">
                    <div>
                        <img src="./src/assets/images/logos/BMC.png" alt="BMC logo" />
                    </div>
                    <div>
                        <img src="./src/assets/images/logos/cannondale.png" alt="cannondale logo" />
                    </div>
                    <div>
                        <img src="./src/assets/images/logos/haro.png" alt="haro logo" />
                    </div>
                    <div>
                        <img src="./src/assets/images/logos/cinelli.png" alt="cinelli logo" />
                    </div>
                    <div>
                        <img src="./src/assets/images/logos/bombtrack.png" alt="bombtrack logo" />
                    </div>
                    <div>
                        <img src="./src/assets/images/logos/cube.png" alt="cube logo" />
                    </div>
                    <div>
                        <img src="./src/assets/images/logos/gocycle.png" alt="gocycle logo" />
                    </div>

                    <div>
                        <img src="./src/assets/images/logos/kellys.png" alt="kellys logo" />
                    </div>
                    <div>
                        <img src="./src/assets/images/logos/S-works.png" alt="S-works logo" />
                    </div>

                </div>
            </div>
            <div className='subs-info'>
                <div className='subs-info-div'>
                    <h1>Sign Up for Special Offers</h1>
                    <h4>Be the first to know about exclusive discounts and new arrivals.</h4>
                    <Button onClick={() => showmodal(true)} variant='filled' className='subs-info-btn' icon={<IoMdOpen className='open-icon' />} iconPosition='end'>Get Started</Button>
                </div>
            </div>
        </>
    )
}

export default WhyWe