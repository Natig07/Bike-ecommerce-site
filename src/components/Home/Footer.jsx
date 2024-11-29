import React, { useEffect } from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from 'antd';


function Footer({ logo }) {
    //for when changed page going to top 
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    return (
        <>
            <div className='footer'>
                <div className='footer-logo'>
                    <img src={logo} alt=" shop logo image " />
                    <h2>N-bikes <span>Shop</span></h2>
                </div>
                <hr />
                <div className="footer-divs">
                    <div className='footer-reach'>
                        <h2>Reach Us</h2>
                        <span>Phone: <a href="tel:+9993333344">  +9993333344</a></span>
                        <span>Email: <a href="mailto:Nbikes.contact@gmail.com">N-bikes.contact@gmail.com</a></span>
                        <span>Adress: <a href="http://">Usa/NewYork/Wantagh Avenue</a>
                        </span>
                    </div>
                    <div className="footer-menu">
                        <h2>Menu</h2>
                        <Link className='footer-menu-link' to='/'>Home</Link>
                        <Link className='footer-menu-link' to='/shop'>Shop</Link>
                        <Link className='footer-menu-link' to='/about'>About</Link>
                        <Link className='footer-menu-link' to='/contact'>Contact</Link>
                    </div>
                    <div className="footer-terms">
                        <h2>Terms and Services</h2>
                        <p>Terms</p>
                        <p>Conditions</p>
                        <p>Services</p>
                    </div>

                    {/*embeded map showing  */}
                    <div style={{ border: '1.4px solid green', maxWidth: '100%', listStyleType: 'none', transition: 'none', overflow: 'hidden', width: 'current', height: 'current' }}><div id="embedded-map-display" style={{ height: '100%', width: '100%', maxWidth: '100%' }}><iframe style={{ height: '100%', width: '100%', border: 0 }} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=New+york+Levittown+Wantagh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a className="embed-ded-maphtml" href="https://www.bootstrapskins.com/themes" id="grab-map-data"></a> </div>
                </div>
                <hr />
                <div className='footer-end'>
                    <p>CopyRight &copy; 2024 | N-Bikes Shop</p>
                    <h2>Follow Us</h2>
                    <div className="social">
                        <div className="social-face">
                            <Tooltip title='Facebook' color='geekblue'>
                                <a href="https://www.facebook.com/">
                                    <FaFacebook className='icon' />
                                </a>
                            </Tooltip>

                        </div>
                        <div className="social-insta">
                            <Tooltip title='Instagram' color='volcano'>
                                <a href="https://www.instagram.com/">
                                    <FaInstagram className='icon' />
                                </a>
                            </Tooltip>
                        </div>
                        <div className="social-tiktok">
                            <Tooltip title='TikTok' >
                                <a href="https://www.tiktok.com/">
                                    <FaTiktok className='icon' />
                                </a>
                            </Tooltip>
                        </div>
                        <div className="social-telegram">
                            <Tooltip title='Telegram' color='#39acef'>
                                <a href="https://web.telegram.org/">
                                    <FaTelegram className='icon' />
                                </a>
                            </Tooltip>
                        </div>

                    </div>
                </div>

            </div >
        </>

    )
}

export default Footer