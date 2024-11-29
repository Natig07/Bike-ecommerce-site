import React, { useEffect, useState } from 'react'
import { FaCartPlus } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
import { Drawer, Image, Pagination, Tooltip } from 'antd';
import { FaStar } from "react-icons/fa";
import { BsBicycle } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, getcart, postcart, setUser } from '../../redux/slices/Cartslice';
import ToTop from '../ToTop';
import { selectproduct } from '../../redux/slices/Productslice';
import { Link } from 'react-router-dom';




function Shop({ catalog }) {

    //for View button prevent all bike view once clicked
    const [visibleIndex, setVisibleIndex] = useState(null)
    const handlePreview = (index) => {
        setVisibleIndex(index);
    };
    const closePreview = () => {
        setVisibleIndex(null);
    };

    const dispatch = useDispatch();

    //All product array from redux-Shopslice
    const { Allbikes, Mbikes, Cbikes, Ebikes, Fbikes, Kbikes } = useSelector((store) => store.bikes);

    //for catalog changing and viewing products
    const [Catalog, setCatalog] = useState(Allbikes);
    //for moving  small icon in catalog design 
    const [bikePosition, setBikePosition] = useState(innerWidth * 4 / 100);

    //for check mark animation  when clicked add cart button , it creates array consist of false s base on selected catalog length.
    const [cartToogle, setToggle] = useState(Array(Catalog.length).fill(false))

    //for changing catalog
    const handleClick = (index) => {
        //when catalog change make pagination to 1
        setCurrentPage(1)

        //for small bicycle icon move when catalog change
        const newPosition = ((window.innerWidth * 80 / 100) / 6) * index + ((window.innerWidth * 80 / 100) / 6) / 4;
        setBikePosition(newPosition);


        //switchin ctalog 
        switch (index) {
            case 0:
                setCatalog(Allbikes);
                break;
            case 1:
                setCatalog(Mbikes);
                break;
            case 2:
                setCatalog(Cbikes);
                break;
            case 3:
                setCatalog(Ebikes);
                break;
            case 4:
                setCatalog(Fbikes);
                break;
            case 5:
                setCatalog(Kbikes);
                break;
            default:
                setCatalog(Allbikes)
                break;

        }

    }
    const { loggedUser } = useSelector(store => store.users)
    useEffect(() => {
        if (loggedUser) {
            dispatch(getcart()); // Fetch existing user cart
            dispatch(setUser(loggedUser)); // Set user in Redux
            // dispatch(postcart())
        }
    }, []);

    // useEffect(() => {
    //     if (loggedUser) {
    //         dispatch(postcart())
    //         // dispatch(postcart())
    //     }
    // }, [dispatch]);

    // Add item to cart
    const handleAddcart = async (id, index) => {
        dispatch(addtoCart(id));  // Add to cart in Redux state

        // Show add-to-cart animation
        setToggle(prevToggle => prevToggle.map((item, i) => i === index ? !item : item));
        setTimeout(() => setToggle(prevToggle => prevToggle.map((item, i) => i === index ? !item : item)), 2000);

        // Sync cart with backend after state updates
        if (loggedUser) {
            // console.log(loggedUser)
            const response = await dispatch(postcart()); // Post updated cart to backend
        }
    };

    //for catalog design ui
    const catalogarr = catalog

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    //takes the length o selected catalog arr
    const totalItems = Catalog.length;

    //makes start index base on selected current pagination page 
    const startIndex = (currentPage - 1) * itemsPerPage;

    //defines end index base on start index
    const endIndex = startIndex + itemsPerPage;

    //slices the catalog array for pagination
    const paginatedData = Catalog.slice(startIndex, endIndex);

    //for going top every time catalog changed to start top 
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    //for handling appear and disappear of up arrow bottom rigth of page 
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

    //In mobile left catalog mode

    const [catalogopen, setCatalogOpen] = useState(false)


    const handleselectpr = (id) => {
        dispatch(selectproduct(id))
        // await dispatch(postSelectedPr())
    }

    return (
        <div className="shop-holder">

            <div className='shop-container'>
                <ul className='menu-top'>
                    {
                        catalogarr.map((catalog, index) =>

                            <li key={index} onClick={() => handleClick(index)}><img className='icon-img' src={catalog.imgsrc} alt="image" /> <p>{catalog.cap}</p></li>
                        )
                    }

                    <BsBicycle className="bike-icon" style={{ left: `${bikePosition}px` }} />

                </ul>
                <div className='catalog-wheel' onClick={() => setCatalogOpen(!catalogopen)}>
                    <p>Catalog</p>
                    <img loading='lazy' src="./src/assets/images/wheel-icon.png" alt="Wheel catalog" />
                </div>

                <div className={`left-catalog ${catalogopen ? 'open' : ''}`}>
                    {
                        catalogarr.map((catalog, index) =>

                            <div className={`option-${index} option`} key={index} onClick={() => handleClick(index)}><img className='icon-img' src={catalog.imgsrc} alt="image" /> <p>{catalog.cap}</p></div>
                        )
                    }
                </div>
                <div className="shop-products">
                    {
                        paginatedData.map((bike, index) =>
                            <div key={index} className='bike-div'>
                                <div className="bike-img-div">
                                    <Image className='img'
                                        loading='lazy'
                                        src={bike.imgl}
                                        alt={bike.model}
                                        preview={{

                                            visible: visibleIndex === index,
                                            onVisibleChange: (visible) => {
                                                if (!visible) closePreview();
                                            }
                                        }}
                                    />
                                    <div className="img-icon-div">
                                        <div onClick={() => handlePreview(index)} className='view-icon-div'>
                                            <Tooltip title='View bike' placement='top' color='rgb(15, 28, 66)'>
                                                <GrView className='img-icon-view' />
                                            </Tooltip>
                                        </div>
                                        <div className='cart-icon-div'>
                                            {/*canditional logic to check which check mark or cart icon shold appear base on the array defined fales default and change when add cart icon clicked */}
                                            {
                                                cartToogle[index] == true ?
                                                    <div className="checkmark-container">
                                                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                                            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                                                            <path className="checkmark-check" fill="none" d="M14 27 L22 35 L38 17" />
                                                        </svg>
                                                    </div>
                                                    :
                                                    <Tooltip onClick={() => handleAddcart(bike.id, index)} title='Add Cart!' color='green' placement='bottom'>
                                                        <FaCartPlus className='img-icon-cart' />
                                                    </Tooltip>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <Link className='h2' to='/productinfo' onClick={() =>
                                    handleselectpr(bike.id)

                                }>{bike.model}</Link>
                                <div className='prd-info'>
                                    <div className='bike-price-div'>
                                        {/*candition showing the old price of bike if it has discount or not */}
                                        {bike.o_price != 0 && <span>{bike.o_price}</span>}

                                        <p>{bike.price} &#8364;</p>
                                    </div>

                                    <div className='bike-rating'>

                                        <Tooltip title={bike.rating} color='volcano'>
                                            <div className='rating-div'>
                                                {[...Array(5)].map((star, index) => {
                                                    const ratingvalue = index + 1;
                                                    return (
                                                        <FaStar key={index} className='rating-star' color={ratingvalue > Math.round(bike.rating) ? 'grey' : 'gold'} />
                                                    )
                                                })}
                                            </div>
                                        </Tooltip>
                                        {/*cheking if it is inn stock or not*/}
                                        <small style={{ color: bike.stockInfo == 'Out of stock!' ? 'gray' : 'green' }}>{bike.stockInfo}</small>
                                    </div>

                                    {/*canditional cheking the sale div shows or not base on the if bike object discount is not 0 or is 0*/}
                                    {bike.sale != 0 ? <h4 className='sale-info'>-{bike.sale}%</h4>
                                        : bike.date && <h4 className='new-info'>{bike.date}</h4>}
                                </div>
                            </div>
                        )
                    }
                </div>
                {/*paginaton element from antdesign */}
                <Pagination className='pagination'
                    current={currentPage}
                    total={totalItems}
                    align='center'
                    style={{ color: 'green', marginTop: 20 }}
                    pageSize={itemsPerPage}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                />

                {/*Up arrow appear , disappear logic*/}

                {
                    scrollpos > (window.screen.height * 90 / 100) &&
                    <ToTop />
                }

            </div >


        </div>
    )
}


export default Shop