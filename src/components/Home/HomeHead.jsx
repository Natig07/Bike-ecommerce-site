import React, { useState } from 'react'
import { Button, Carousel, Flex } from 'antd'
import velo1 from '../../assets/images/products/velo1.png'
import velo1g from '../../assets/images/products/velo2.png'
import velo1bl from '../../assets/images/products/velo3.png'
import kids_velo from '../../assets/images/products/kids-velo.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectproduct } from '../../redux/slices/Productslice'
import LazyLoad from 'react-lazyload';

function HomeHead() {
    //for chaging discounted bike infos
    const [number, setNumber] = useState(0);
    const dispatch = useDispatch()
    // recent discount apllied bikes
    const discBike = [
        {
            bike1: [

                {
                    img: velo1,
                    model: 'BMC TWOSTROKE 01 ONE - 29" Carbon Mountain Bike - 2023 - prisma red',
                    color: 'red',
                    old_price: '1800',
                    off: '-30%',
                    price: '1260',
                    info: 'In stock',
                    id: '765ae72a-de9a-4f7f-b15f-54b59e1de933'
                },
                {
                    img: velo1g,
                    model: 'BMC TWOSTROKE 01 TWO - 29" Carbon Mountain Bike - 2023 - anthracite prisma / gray',
                    color: 'gray',
                    old_price: '1966',
                    off: '-23%',
                    price: '1514',
                    info: 'Only 6 left!',
                    id: '878e1d31-3bba-49a5-a0d7-78dbf1f673fc'

                },
                {
                    img: velo1bl,
                    model: 'BMC TWOSTROKE 01 FIVE - 29" Carbon Mountain Bike - 2023 - carbon / black',
                    color: 'black',
                    old_price: '2300',
                    off: '-20%',
                    price: '1840',
                    info: 'Only 3 left!',
                    id: '878e1d31-3bba-49a5-a0d7-e8dbf1f673fc'

                }
            ]
        },
        {
            img: kids_velo,
            model: 'Cannondale KIDS TRAIL BALANCE - 12" Children\'s Running Bike - 2024 - Electric Blue',
            color: 'black',
            old_price: '150',
            off: '-12%',
            price: '132',
            info: '2 in Stock!',
            id: '4a909314-4a0b-4eda-9402-a0778850ae37',
        },
        {
            img: './src/assets/images/products/haro-e1.png',
            model: '2021-HARO-Johny-5-Black-Edition-20.5',
            color: 'black',
            old_price: '1277',
            off: '-10%',
            price: '1149',
            info: 'Ends in 2 days!',
            id: '1eede982-3118-47cf-93c8-11d499c3f3ca',
        }
    ];


    const selectHandler = async (id) => {
        await dispatch(selectproduct(id));
        // await dispatch(postSelectedPr())
    }
    return (
        <div>
            <LazyLoad height='auto' once>
                <div className='home-head'>
                    <div className='carousel-hold'>
                        <Carousel arrows
                            infinite={true}
                            swipeToSlide={true} draggable={true} >
                            <div className='slider-div'>
                                <div className="big-sale">
                                    Big Sale!
                                </div>
                                <img loading='lazy' src={discBike[0].bike1[number].img} alt="bike1 image" />
                                <div className='info'>
                                    <h2>{discBike[0].bike1[number].model}</h2>
                                    <div className="price-div">
                                        <small className='old-price'>{discBike[0].bike1[number].old_price} &#8364;</small>
                                        <small className='price-off'>{discBike[0].bike1[number].off} </small>
                                        <h2>{discBike[0].bike1[number].price} &#8364;</h2>
                                        <p>{discBike[0].bike1[number].info}!</p>
                                    </div>
                                    <Link onClick={() => selectHandler(discBike[0].bike1[number].id)} to='/productinfo' className='shop-btn'>Shop Now</Link>
                                    <div className='colors'>
                                        <span onClick={() => {
                                            setNumber(0)
                                        }} className="color-btn red-btn" style={{ borderColor: discBike[0].bike1[number].color == 'red' ? discBike[0].bike1[number].color : 'white' }}></span>
                                        <span onClick={() => {
                                            setNumber(1);
                                        }
                                        } className="color-btn gray-btn" style={{ borderColor: discBike[0].bike1[number].color == 'gray' ? discBike[0].bike1[number].color : 'white' }}></span>
                                        <span onClick={() => {
                                            setNumber(2)
                                        }} className="color-btn black-btn" style={{ borderColor: discBike[0].bike1[number].color == 'black' ? discBike[0].bike1[number].color : 'white' }}></span></div>

                                </div>
                            </div>
                            <div className='slider-div'>
                                <div className="big-sale">
                                    Big Sale!
                                </div>
                                <img loading='lazy' src={discBike[1].img} alt="bike2 image" />
                                <div className='info'>
                                    <h2>{discBike[1].model}</h2>
                                    <div className="price-div">
                                        <small className='old-price'>{discBike[1].old_price} &#8364;</small>
                                        <small className='price-off'>{discBike[1].off} </small>
                                        <h2>{discBike[1].price} &#8364;</h2>
                                        <p>{discBike[1].info}</p>
                                    </div>
                                    <Link to='/productinfo' onClick={() => selectHandler(discBike[1].id)} className='shop-btn'>Shop Now</Link>
                                    <div className='colors'>
                                        <span className="color-btn blue-btn" style={{ borderColor: 'white' }}></span>
                                    </div>

                                </div>
                            </div>
                            <div className='slider-div'>
                                <div className="big-sale">
                                    Limited!
                                </div>
                                <img loading='lazy' src={discBike[2].img} alt="bike2 image" />
                                <div className='info'>
                                    <h2>{discBike[2].model}</h2>
                                    <div className="price-div">
                                        <small className='old-price'>{discBike[2].old_price} &#8364;</small>
                                        <small className='price-off'>{discBike[2].off} </small>
                                        <h2>{discBike[2].price} &#8364;</h2>
                                        <p>{discBike[2].info}</p>
                                    </div>
                                    <Link to='/productinfo' onClick={() => selectHandler(discBike[2].id)} className='shop-btn'>Shop Now</Link>
                                    <div className='colors'>
                                        <span className="color-btn black-btn" style={{ borderColor: 'white' }}></span>
                                    </div>

                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div >

            </LazyLoad>
            <div className='new-arrivals'>
                <h1>New Added Bikes!</h1>
                <div className='new-arrival-list'>
                    <div className='arrival'>
                        <img src="./src/assets/images/products/e-bike-8.jpg" alt=" new e-bike image" />
                        <div className="arrival-info">
                            <small>Electric bikes</small>
                            <h3>Cannondale TESORO NEO Carbon 1 - Electric City Bike - 2024 - stealth grey</h3>
                            <Flex align='center' className='arrival-info-flex' style={{ marginTop: '30px' }}>
                                <p>1200 &#8364;</p>
                                <Link className='detail-btn' to='/productinfo' onClick={() => selectHandler('e8d2eb28-ef71-4c1a-a304-4c1d91c3376b')}>See Details</Link>
                            </Flex>

                        </div>
                    </div>
                    <div className='arrival'>
                        <img src="./src/assets/images/products/city-6.jpg" alt=" new city bike image" />
                        <div className="arrival-info">
                            <small>City bikes</small>
                            <h3>Bombtrack OUTLAW - 27.5" Urban Bike - 2024 - matt black</h3>
                            <Flex align='center'
                                className='arrival-info-flex' style={{ marginTop: '30px' }}>
                                <p>1500 &#8364;</p>
                                <Link className='detail-btn' to='/productinfo' onClick={() => selectHandler('e678e50b-79f2-4720-a3dd-aed15ec2f200')}>See Details</Link>
                            </Flex>

                        </div>
                    </div>
                    <div className='arrival'>
                        <img src="./src/assets/images/products/mountain-4.jpg" alt="new mountain bike image" />
                        <div className="arrival-info">
                            <small>Mountain bikes</small>
                            <h3>Specialized EPIC 8 EXPERT - 29" Carbon Mountainbike - 2024 - satin / redsky</h3>
                            <Flex align='center' className='arrival-info-flex' style={{ marginTop: '30px' }}>

                                <p>1800 &#8364;</p>
                                <Link className='detail-btn' to='/productinfo' onClick={() => selectHandler('4ca539ac-72d6-417f-b7ac-71549ca93ad3')}>See Details</Link>
                            </Flex>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HomeHead