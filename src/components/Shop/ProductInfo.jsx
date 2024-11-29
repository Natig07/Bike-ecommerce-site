import React, { useEffect, useRef, useState } from 'react'
import { Breadcrumb, Flex, Image } from 'antd'
import { Link } from 'react-router-dom'
import { MdHome } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { FaHeartCirclePlus, FaCartPlus } from "react-icons/fa6";
import { BsListStars } from "react-icons/bs";
import { addtoCart, postcart } from '../../redux/slices/Cartslice';
import { getfromlocal } from '../../redux/slices/Productslice';



function ProductInfo() {
    const { selectedProduct } = useSelector((store) => store.product)
    const { loggedUser } = useSelector((store) => store.users)
    // console.log(loggedUser)
    // console.log(selectedProduct.id)
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch()
    const selected = !selectedProduct ? selectedProduct : JSON.parse(localStorage.getItem("selectedpr"));
    console.log(selected)
    const handleClick = () => {
        setClicked(true);
        dispatch(addtoCart(selected.id))
        if (loggedUser)
            dispatch(postcart())
        setTimeout(() => {
            setClicked(false)
        }, 2000);
    }


    // useEffect(() => {
    //     dispatch(getfromlocal())
    // }, []);


    return (
        <div className='single-product-continer'>
            <Breadcrumb className='bread' separator='>' items={[
                {
                    title: <Link className='link-br' to='/'><Flex align='center'><MdHome className='bread-link-icon' /> <span>Home</span></Flex></Link>
                },
                {
                    title: <Link className='link-br' to='/shop'><Flex align='center'><FaShop className='bread-link-icon' /> <span>Shop</span></Flex></Link>
                },
                {
                    title: selected.catalog + " bikes"
                }
            ]} />
            <div className="product-main">


                <div className='single-img-section'>
                    <Image

                        src={selected.imgl} alt={selected.model} />
                    <section className='price-section'>{
                        (selected.sale != 0 && !selected.date) ?
                            <small small > Discount: {selected.sale}%</small> : (selected.date &&
                                <small style={{ color: 'blue', fontSize: 22, width: '56%', fontWeight: 600 }}>{selected.date}</small>)
                    }
                        {
                            selected.o_price != 0 &&
                            <p>{selected.o_price} &#8364;</p>
                        }
                        <h5>{selected.price} &#8364;</h5>
                    </section>

                    <button className='fav-btn'>
                        Fav<FaHeartCirclePlus />
                    </button>
                    <div className='holder-space'>
                        {clicked ? <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="1 0 22 23"
                            fill="none"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-shopping-cart"
                        >
                            <circle cx="9" cy="21" r="1" className="draw cart"></circle>
                            <circle cx="20" cy="21" r="1" className="draw cart"></circle>
                            <path
                                d="M1 1h4l2.68 13.39a1 1 0 0 0 1 .81h9.72a1 1 0 0 0 .98-.8L23 6H6"
                                className="draw cart"
                            ></path>

                            <path
                                d="M10.4 9.2l3 3 4-4"
                                className="draw checkmark"
                                stroke="currentcolor"
                                strokeWidth="2"
                            ></path>
                        </svg>
                            :
                            <button onClick={() => handleClick()} className='cart-btn'>  <Flex align='center' justify='center' gap='10px'> Add<FaCartPlus /></Flex>
                            </button>
                        }
                    </div>
                </div>

                <div className="single-info">
                    <h1>{selected.model}</h1>

                    <h3>{selected.info}</h3>
                    <div className='features-section'>
                        <Flex align='center' gap={10}>
                            <BsListStars style={{ fontSize: 27 }} />
                            <h2>Features</h2>
                        </Flex>
                        <ul className='features'>
                            {
                                selected.features.map((feature, index) =>
                                    <li key={index}>
                                        {feature}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="rating-section">

                        <h2>Ratings <span>{selected.rating}/5</span> </h2>

                        <div className='comments'>
                            <p>"{selected.ratinginfo[0]}"</p>
                            <div className="comment1"></div>
                            <div className="comment2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductInfo