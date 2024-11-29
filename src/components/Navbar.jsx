import React, { useEffect, useState } from 'react'

import { BsCart4 } from "react-icons/bs";
import { FaLock, FaMoon, FaRegUser, FaSun, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";




import { Alert, Avatar, Badge, Button, Checkbox, Divider, Drawer, Dropdown, Flex, Form, Input, Menu, message, Modal, notification, Spin, Tooltip } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from './Home/Footer';
import { MdDirectionsBike, MdOutlineMail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { BiDetail, BiSolidUserDetail, BiTrash } from 'react-icons/bi';
import { decCount, getcart, incCount, postcart, removeFromCart, setUser } from '../redux/slices/Cartslice';
import { TbMoodEmptyFilled } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import { selectproduct } from '../redux/slices/Productslice';
import axios from 'axios';
import { GiCartwheel } from "react-icons/gi";
import { deletelogged, getAllUsers, getLogged, logged, register, regNew } from '../redux/slices/usersSlice';
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { CiLogin, CiUser } from 'react-icons/ci';
import { toggleDarkMode } from '../redux/slices/Themeslice';







function Navbar({ visible, setVisible, logo, dark }) {
    //for side cart drawer
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    //to see cart array
    const { cartBikes, total, user } = useSelector(store => store.cart);
    //when chenged page for going to top pf page 
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    const [modaltype, setModaltype] = useState('log');

    const respMenuitems = [
        {
            key: '1',
            label: <Link onClick={() => setCollapsed(!menucollapse)} className='li' to="/">Home</Link>
        },
        {
            key: '2',
            label: <Link onClick={() => setCollapsed(!menucollapse)} className='li' to="/shop">Shop</Link>

        },
        {
            key: '3',
            label: <Link onClick={() => setCollapsed(!menucollapse)} className='li' to="/about">About</Link>

        },
        {
            key: '4',
            label: <Link onClick={() => setCollapsed(!menucollapse)} className='li' to="/contact">Contact</Link>

        }
    ]

    const [menucollapse, setCollapsed] = useState(false)

    const [loading, setLoading] = useState(false);


    // const [messageApi, contextHolder] = message.useMessage();
    // const success = () => {
    //     messageApi.success({
    //         content: 'Successfully Registered!',
    //         duration: 2,
    //         onClose: () => formm.resetFields()
    //     });
    // };
    const [isSuccess, setIsSuccess] = useState(false);
    // console.log(user)
    // console.log(loggedUser)
    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getLogged())

    }, [regNew, logged])

    const { Users, infotext, loggedUser, reginfo } = useSelector((store) => store.users)

    useEffect(() => {
        if (loggedUser) {
            dispatch(setUser(loggedUser))
            dispatch(getcart())// Post updated cart to backend
        }
    }, [loggedUser])

    useEffect(() => {
        if (reginfo) {
            if (reginfo == 'Successfully registered!') {
                message.success({
                    content: reginfo,
                    duration: 2,
                    onClose: () => { document.getElementById('register').reset() }
                });

            } else {
                message.warning({
                    content: reginfo,
                    duration: 2,
                    icon: <BsFillExclamationCircleFill style={{ color: 'orange', margin: 4, fontSize: '1rem' }} />,
                    onClose: () => { }
                });
            }
        }

    }, [reginfo]);


    useEffect(() => {
        if (isSuccess) {
            if (infotext.includes('Welcome')) {
                dispatch(setUser(loggedUser))
                message.success({
                    content: infotext,
                    duration: 2,
                    onClose: () => { document.getElementById('login').reset() }
                });
                setTimeout(() => {
                    setVisible(false)
                }, 700);
                setTimeout(() => {
                    location.reload()
                }, 1300);
            } else {

                message.warning({
                    content: infotext,
                    duration: 2,
                    icon: <BsFillExclamationCircleFill style={{ color: 'orange', margin: 4, fontSize: '1rem' }} />,
                    onClose: () => { }
                });
            }
        }
        setIsSuccess(false);

    }, [infotext]);


    // Handle input changes
    const onRegFinish = (values) => {
        setLoading(true);
        dispatch(regNew(values));
        console.log(Users)
        // setIsSuccess(true);


    };
    const onLogFinish = (values) => {
        setLoading(true);
        dispatch(logged(values));
        // console.log('log values ' + values)
        // console.log(Users
        setIsSuccess(true);


    };
    // Render content based on modal type
    const renderContent = () => (
        modaltype === 'log' ? (
            <Form
                onFinish={onLogFinish}
                className='login-form' name="login">
                <Form.Item
                    name="logusername"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input className='user-input' prefix={<FaRegUser />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="logpassword"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password className='password-input' prefix={<FaLock />} type="password" placeholder="Password"
                        iconRender={(visible) => (visible ? <IoMdEye /> : <IoMdEyeOff />)} />
                </Form.Item>
                <Form.Item>
                    <Flex justify="space-between" align="center">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox className='check-input'>Remember me</Checkbox>
                        </Form.Item>
                        <a href="#">Forgot password</a>
                    </Flex>
                </Form.Item>
                <Form.Item>
                    <Button className='submit-btn' block htmlType="submit">Log in</Button>
                    <Flex align='center' justify='center'>
                        <span onClick={() => { setModaltype('reg') }
                        } >or <a >Register!</a></span>
                    </Flex>
                </Form.Item>
            </Form>
        ) : (
            <Form
                onFinish={onRegFinish}
                className='login-form'
                initialValues={{ remember: true }}
                name="register"

            // initialValues={{ remember: true }}
            >
                <Form.Item
                    name="regusername"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input className='user-input' prefix={<FaRegUser />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Email address is empty!' },
                    {
                        type: 'email',
                        message: 'Please, enter valid email adress!'
                    }
                    ]}
                >
                    <Input className='email-input' prefix={<MdOutlineMail />} placeholder="Email address" />
                </Form.Item>
                <Form.Item
                    name="regpassword"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password className='password-input' prefix={<FaLock />} type="password" placeholder="Password"
                        iconRender={(visible) => (visible ? <IoMdEye /> : <IoMdEyeOff />)} />
                </Form.Item>
                <Form.Item
                    name="re_password"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('regpassword') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Passwords do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password className='password-input' prefix={<FaLock />} type="password" placeholder="Re-Password"
                        iconRender={(visible) => (visible ? <IoMdEye /> : <IoMdEyeOff />)} />
                </Form.Item>
                <Form.Item>
                    <Flex justify="space-between" align="center">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox className='check-input'>Remember me</Checkbox>
                        </Form.Item>
                        <a href="#">Forgot password</a>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Button className='submit-btn' block htmlType="submit">
                        Register
                    </Button>
                    <Flex align='center' justify='center'>
                        <span onClick={() => { setModaltype('log') }
                        } >or <a >Log in!</a></span>
                    </Flex>
                </Form.Item>
            </Form >
        )
    );
    //dropdown info items
    const userInfoItems = [
        {
            key: '0',
            label: <div className='userinfo'>
                <Avatar size={44} icon={
                    <CiUser className='user-image' />} />
                <h4 style={{ textAlign: 'center', color: dark ? 'white' : 'black' }}> {loggedUser && loggedUser.regusername}</h4>
            </div>
        },
        {
            key: '1',
            label: <Flex align='center' gap={'0.5rem'} style={{ color: 'green' }} className='li' > <BiSolidUserDetail className='userinfo-icon' /> User Info</Flex >
        },
        {
            key: '2',
            label: <Flex align='center' gap={'0.5rem'} style={{ color: 'green' }} className='li' > <BiDetail className='userinfo-icon' /> Dashboard</Flex >
        },
        {
            key: '3',
            label: <Flex align='center' gap={'0.5rem'} style={{ color: 'green' }} className='li' > <FaHeartCircleCheck className='userinfo-icon' /> Favorities</Flex >
        },
        {
            key: '4',
            label: <h3 onClick={() =>
                dispatch(deletelogged(loggedUser.id)) &&
                message.info({
                    content: 'Logged Out',
                    duration: 1,
                    onClose: () => location.reload()
                })

            } style={{ color: 'red' }}>Log out <CiLogin /></h3>
        }
    ]


    const [infovisible, setInfovisible] = useState(false)

    const handleDecCount = async (id) => {
        await dispatch(decCount(id))
        dispatch(postcart())
    }
    const handleIncCount = async (id) => {
        await dispatch(incCount(id))
        dispatch(postcart())
    }

    const handleDeletebike = async (id) => {
        await dispatch(removeFromCart(id))
        dispatch(postcart())
    }


    return (
        <>
            <div className='header'>
                <div className='logo-div'>
                    <img src={logo} className='Logo' alt="Bikes-logo" />
                    <p>N-BIKES</p>
                </div>
                <div className='navbar'>
                    <Link className='li' to="/">Home</Link>
                    <Link className='li' to="/shop">Shop</Link>
                    <Link className='li' to="/about">About</Link>
                    <Link className='li' to="/contact">Contact</Link>
                </div>
                <div className='right-div'>
                    <div className="container">
                        <input type="search" name="text" className="input" required placeholder="Find your bike..." />
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path>
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path>
                            </svg>
                        </div>
                    </div>
                    <Dropdown
                        autoAdjustOverflow={true}
                        overlayClassName='user-info-section'

                        overlayStyle={{
                            width: 150,
                        }}

                        placement='bottomRight'
                        menu={{

                            style: {
                                backgroundColor: dark ? '#111111' : 'white'


                            },
                            items: userInfoItems,
                            selectable: false,


                        }}
                        trigger={['click']}
                        open={infovisible}
                        onOpenChange={() => setInfovisible(false)}

                    >
                        <FaUser
                            onClick={() => {
                                if (loggedUser) {
                                    setInfovisible(true);
                                    setVisible(false);
                                } else {
                                    setVisible(true);
                                    setInfovisible(false);
                                }
                            }}
                            className='user-icon'
                        />
                    </Dropdown>


                    <HiMenuAlt3 className='hamburger' onClick={() => setCollapsed(!menucollapse)} />

                    <div className="switch-container">
                        <Tooltip title='Change Theme'>

                            <label className="theme-container">
                                <input onClick={() => dispatch(toggleDarkMode())} type="checkbox" />
                                <FaMoon className='moon' />
                                <FaSun className='sun' />

                            </label>
                        </Tooltip>

                    </div>
                    {location.pathname != '/checkout' && <Badge count={cartBikes.length} showZero offset={[5, -2]} color='orange' size='default'>
                        <BsCart4 className='basket-icon' onClick={() => setOpen(true)} />
                    </Badge>
                    }

                </div>
            </div >
            <Drawer
                open={menucollapse}
                title={<div className='sider-head'><h2>Menu</h2>
                    <IoMdCloseCircle onClick={() => setCollapsed(!menucollapse)} className='sider-close-btn' />
                    <img className='side-logo' src={logo} alt="logo-image" />
                </div>}
                closeIcon={null}
                size='default'
                className='sider-menu'
                styles={{
                    wrapper: { width: window.innerWidth <= 460 ? '50% ' : window.innerWidth < 800 ? '34%' : '300px' },
                }}
            >

                <Menu mode='vertical' defaultSelectedKeys={['1']} items={respMenuitems} >

                </Menu>
            </Drawer>
            <Modal
                width={window.innerWidth < 460 ? '73%' : window.innerWidth < 884 ? '40%' : '34%'}
                open={visible}
                closeIcon={null}
                footer={(_, { }) => (
                    <>
                        <button className='close-btn' onClick={() => setVisible(false)}>Close</button>
                    </>
                )
                }
                title={
                    <div className='form-title'>
                        <img src={logo} alt="Logo" />
                        <h2>{modaltype === 'log' ? 'Login' : 'Register'}</h2>
                    </div>
                }
                style={{ top: 20 }}
            >

                {renderContent()}

            </Modal>
            <Drawer
                className='drawer-cart'
                footer={
                    <div div className='cart-footer' >
                        <h3>Total: {total > 0 ? total.toFixed(2) : 0}&#8364;</h3>
                        <Link onClick={() => setOpen(false)} className='checkout-btn' style={{ disabled: cartBikes.length > 0 ? false : true }} to={cartBikes.length > 0 && '/checkout'}
                        >CheckOut</Link>
                    </div >
                }
                title={
                    <div div className='cart-title' >
                        <div className="left-title">
                            <MdDirectionsBike className='velo-icon' />
                            <p>Your cart</p>
                        </div>
                        <Button color='danger' variant='solid' className='btn-close' onClick={() => setOpen(false)}>&times;</Button>
                    </div >
                }
                closable={false}
                open={open}
                size='default'
                styles={{
                    wrapper: { width: window.innerWidth <= 460 ? '70% ' : window.innerWidth < 800 ? '40%' : '400px' },

                }}
                onClose={() => setOpen(false)}>

                {/*Conditional rendering if cart not empty rendering the cart objects is is empty showing 'empty' text */}
                {
                    total > 0 ?
                        cartBikes.map((bike, index) =>
                            <div key={index} className='cart-bike'>
                                <img src={bike.imgl} alt={bike.model} />
                                <div className='cart-bike-info'>
                                    <Link onClick={() => {
                                        setOpen(false)
                                        dispatch(selectproduct(bike.id))
                                        // await dispatch(postSelectedPr())
                                    }
                                    } to='/productinfo' >{bike.model}</Link>
                                    <div className='bike-count'>
                                        <button className={bike.count == 1 ? 'btn disabled' : 'btn'} onClick={() => handleDecCount(bike.id)}>-</button>
                                        <span>{bike.count}</span>
                                        <button className='btn' onClick={() => handleIncCount(bike.id)}>+</button>
                                    </div>
                                    <p><span>Price: </span> {bike.price}&#8364;</p>
                                </div>
                                <Tooltip color='red' placement='left' title={<div><p style={{ fontSize: '14px' }}>Delete bike</p></div>}>

                                    <BiTrash onClick={() => handleDeletebike(bike.id)} className='trash-icon' />
                                </Tooltip>
                            </div>
                        ) : <Flex align='center' justify='center' style={{ color: 'GrayText', userSelect: 'none' }} >
                            <h3 style={{ textAlign: 'center' }}>Your Cart is Empty!</h3>
                            <TbMoodEmptyFilled style={{ fontSize: '20px' }} />
                        </Flex>

                }

            </Drawer >
            <Outlet />
            <Footer logo={logo} />

        </>
    )
}

export default Navbar