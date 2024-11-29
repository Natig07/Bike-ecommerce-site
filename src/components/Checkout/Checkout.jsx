import React, { useEffect, useRef, useState } from 'react'
import {
    Button,
    Cascader,
    Checkbox,
    ColorPicker,
    DatePicker,
    Flex,
    Form,
    Input,
    Radio,
    Select,
    Tooltip,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { BsCreditCardFill } from "react-icons/bs";
import { MdOutlineSupport } from "react-icons/md";
import { RiSecurePaymentLine, RiRefund2Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { selectproduct } from '../../redux/slices/Productslice';
import { Link } from 'react-router-dom';




function Checkout() {
    const [orderfor, setorderfor] = useState("")

    const validateNumericInput = (_, value) => {
        if (!value) {
            return Promise.reject(new Error('This field is required!'));
        }


        const isNumeric = /^\d+$/.test(value);

        if (!isNumeric) {
            return Promise.reject(new Error('Please enter numbers only!'));
        }

        return Promise.resolve();
    };

    const { cartBikes, total } = useSelector(store => store.cart)

    const orderRef = useRef(null)
    const dispatch = useDispatch();
    useEffect(() => {
        const handleScroll = () => {
            const newYPosition = window.scrollY;
            // console.log(newYPosition)
            if (newYPosition > 250 && newYPosition < 1200) {
                orderRef.current.style.position = 'sticky';
                orderRef.current.style.top = '12%'

            }

        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            ;
        }
    }, []);
    return (
        <div className='checkout-section'>
            <hr />

            <div className='check-form'>
                <h1>Complete your Order</h1>
                <p>Almost there! Confirm your order and enjoy fast delivery.</p>
                <Form

                    layout='vertical'
                    className='form-div'
                    onFinish={(values) => {
                        console.log('Success:', values);
                    }}
                    onFinishFailed={(errorInfo) => {
                        console.log('Failed:', errorInfo);
                    }}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Email address needed!',
                            },
                            {
                                type: 'email',
                                message: 'Please enter a valid email address!',
                            },
                        ]}
                        className='customer-info'
                        label="Customer info"
                    >
                        <Input type='text' placeholder='Email Address*' />
                    </Form.Item>

                    <Form.Item label="Billing details">
                        <Flex className='billing-divs' gap={'0.6rem'}>
                            <Form.Item
                                name="firstName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'First name is required!',
                                    },
                                ]}
                            >
                                <Input type='text' placeholder='First name*' />
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Last name is required!',
                                    },
                                ]}

                            >
                                <Input type='text' placeholder='Last name*' />
                            </Form.Item>
                        </Flex>
                    </Form.Item>

                    <Form.Item
                        name="orderFor"
                        label="Order for"
                        rules={[
                            {
                                required: true,
                                message: 'Please select an option!',
                            },
                        ]}
                    >
                        <Radio.Group>
                            <Radio style={{
                            }} onChange={(e) => setorderfor(e.target.value)} value="company">Company</Radio>
                            <Radio onChange={(e) => setorderfor(e.target.value)} value="personal">Personal</Radio>
                        </Radio.Group>
                    </Form.Item>
                    {
                        orderfor == 'company' && <Form.Item name='Company Name' rules={[{
                            required: true,
                            message: 'Enter your company name!'
                        }]}>
                            <Input placeholder='Company Name' required />
                        </Form.Item>
                    }

                    <Form.Item
                        name="country"
                        label="Country / Region"
                        rules={[
                            {
                                required: true,
                                message: 'Please select a country or region!',
                            },
                        ]}
                    >
                        <Select className='country-select' placeholder="Select Country">
                            <Select.Option value="afghanistan">Afghanistan</Select.Option>
                            <Select.Option value="albania">Albania</Select.Option>
                            <Select.Option value="algeria">Algeria</Select.Option>
                            <Select.Option value="andorra">Andorra</Select.Option>
                            <Select.Option value="angola">Angola</Select.Option>
                            <Select.Option value="antigua-barbuda">Antigua and Barbuda</Select.Option>
                            <Select.Option value="argentina">Argentina</Select.Option>
                            <Select.Option value="armenia">Armenia</Select.Option>
                            <Select.Option value="australia">Australia</Select.Option>
                            <Select.Option value="austria">Austria</Select.Option>
                            <Select.Option value="azerbaijan">Azerbaijan</Select.Option>
                            <Select.Option value="bahamas">Bahamas</Select.Option>
                            <Select.Option value="bahrain">Bahrain</Select.Option>
                            <Select.Option value="bangladesh">Bangladesh</Select.Option>
                            <Select.Option value="barbados">Barbados</Select.Option>
                            <Select.Option value="belarus">Belarus</Select.Option>
                            <Select.Option value="belgium">Belgium</Select.Option>
                            <Select.Option value="belize">Belize</Select.Option>
                            <Select.Option value="benin">Benin</Select.Option>
                            <Select.Option value="bhutan">Bhutan</Select.Option>
                            <Select.Option value="bolivia">Bolivia</Select.Option>
                            <Select.Option value="bosnia-herzegovina">Bosnia and Herzegovina</Select.Option>
                            <Select.Option value="botswana">Botswana</Select.Option>
                            <Select.Option value="brazil">Brazil</Select.Option>
                            <Select.Option value="brunei">Brunei</Select.Option>
                            <Select.Option value="bulgaria">Bulgaria</Select.Option>
                            <Select.Option value="burkina-faso">Burkina Faso</Select.Option>
                            <Select.Option value="burundi">Burundi</Select.Option>
                            <Select.Option value="cabo-verde">Cabo Verde</Select.Option>
                            <Select.Option value="cambodia">Cambodia</Select.Option>
                            <Select.Option value="cameroon">Cameroon</Select.Option>
                            <Select.Option value="canada">Canada</Select.Option>
                            <Select.Option value="central-african-republic">Central African Republic</Select.Option>
                            <Select.Option value="chad">Chad</Select.Option>
                            <Select.Option value="chile">Chile</Select.Option>
                            <Select.Option value="china">China</Select.Option>
                            <Select.Option value="colombia">Colombia</Select.Option>
                            <Select.Option value="comoros">Comoros</Select.Option>
                            <Select.Option value="congo-democratic-republic">Congo (Democratic Republic)</Select.Option>
                            <Select.Option value="congo-republic">Congo (Republic)</Select.Option>
                            <Select.Option value="costa-rica">Costa Rica</Select.Option>
                            <Select.Option value="croatia">Croatia</Select.Option>
                            <Select.Option value="cuba">Cuba</Select.Option>
                            <Select.Option value="cyprus">Cyprus</Select.Option>
                            <Select.Option value="czech-republic">Czech Republic</Select.Option>
                            <Select.Option value="denmark">Denmark</Select.Option>
                            <Select.Option value="djibouti">Djibouti</Select.Option>
                            <Select.Option value="dominica">Dominica</Select.Option>
                            <Select.Option value="dominican-republic">Dominican Republic</Select.Option>
                            <Select.Option value="ecuador">Ecuador</Select.Option>
                            <Select.Option value="egypt">Egypt</Select.Option>
                            <Select.Option value="el-salvador">El Salvador</Select.Option>
                            <Select.Option value="equatorial-guinea">Equatorial Guinea</Select.Option>
                            <Select.Option value="eritrea">Eritrea</Select.Option>
                            <Select.Option value="estonia">Estonia</Select.Option>
                            <Select.Option value="eswatini">Eswatini</Select.Option>
                            <Select.Option value="ethiopia">Ethiopia</Select.Option>
                            <Select.Option value="fiji">Fiji</Select.Option>
                            <Select.Option value="finland">Finland</Select.Option>
                            <Select.Option value="france">France</Select.Option>
                            <Select.Option value="gabon">Gabon</Select.Option>
                            <Select.Option value="gambia">Gambia</Select.Option>
                            <Select.Option value="georgia">Georgia</Select.Option>
                            <Select.Option value="germany">Germany</Select.Option>
                            <Select.Option value="ghana">Ghana</Select.Option>
                            <Select.Option value="greece">Greece</Select.Option>
                            <Select.Option value="grenada">Grenada</Select.Option>
                            <Select.Option value="guatemala">Guatemala</Select.Option>
                            <Select.Option value="guinea">Guinea</Select.Option>
                            <Select.Option value="guinea-bissau">Guinea-Bissau</Select.Option>
                            <Select.Option value="guyana">Guyana</Select.Option>
                            <Select.Option value="haiti">Haiti</Select.Option>
                            <Select.Option value="honduras">Honduras</Select.Option>
                            <Select.Option value="hungary">Hungary</Select.Option>
                            <Select.Option value="iceland">Iceland</Select.Option>
                            <Select.Option value="india">India</Select.Option>
                            <Select.Option value="indonesia">Indonesia</Select.Option>
                            <Select.Option value="iran">Iran</Select.Option>
                            <Select.Option value="iraq">Iraq</Select.Option>
                            <Select.Option value="ireland">Ireland</Select.Option>
                            <Select.Option value="israel">Israel</Select.Option>
                            <Select.Option value="italy">Italy</Select.Option>
                            <Select.Option value="jamaica">Jamaica</Select.Option>
                            <Select.Option value="japan">Japan</Select.Option>
                            <Select.Option value="jordan">Jordan</Select.Option>
                            <Select.Option value="kazakhstan">Kazakhstan</Select.Option>
                            <Select.Option value="kenya">Kenya</Select.Option>
                            <Select.Option value="kiribati">Kiribati</Select.Option>
                            <Select.Option value="korea-north">Korea (North)</Select.Option>
                            <Select.Option value="korea-south">Korea (South)</Select.Option>
                            <Select.Option value="kuwait">Kuwait</Select.Option>
                            <Select.Option value="kyrgyzstan">Kyrgyzstan</Select.Option>
                            <Select.Option value="laos">Laos</Select.Option>
                            <Select.Option value="latvia">Latvia</Select.Option>
                            <Select.Option value="lebanon">Lebanon</Select.Option>
                            <Select.Option value="lesotho">Lesotho</Select.Option>
                            <Select.Option value="liberia">Liberia</Select.Option>
                            <Select.Option value="libya">Libya</Select.Option>
                            <Select.Option value="liechtenstein">Liechtenstein</Select.Option>
                            <Select.Option value="lithuania">Lithuania</Select.Option>
                            <Select.Option value="luxembourg">Luxembourg</Select.Option>
                            <Select.Option value="madagascar">Madagascar</Select.Option>
                            <Select.Option value="malawi">Malawi</Select.Option>
                            <Select.Option value="malaysia">Malaysia</Select.Option>
                            <Select.Option value="maldives">Maldives</Select.Option>
                            <Select.Option value="mali">Mali</Select.Option>
                            <Select.Option value="malta">Malta</Select.Option>
                            <Select.Option value="marshall-islands">Marshall Islands</Select.Option>
                            <Select.Option value="mauritania">Mauritania</Select.Option>
                            <Select.Option value="mauritius">Mauritius</Select.Option>
                            <Select.Option value="mexico">Mexico</Select.Option>
                            <Select.Option value="micronesia">Micronesia</Select.Option>
                            <Select.Option value="moldova">Moldova</Select.Option>
                            <Select.Option value="monaco">Monaco</Select.Option>
                            <Select.Option value="mongolia">Mongolia</Select.Option>
                            <Select.Option value="montenegro">Montenegro</Select.Option>
                            <Select.Option value="morocco">Morocco</Select.Option>
                            <Select.Option value="mozambique">Mozambique</Select.Option>
                            <Select.Option value="myanmar">Myanmar</Select.Option>
                            <Select.Option value="namibia">Namibia</Select.Option>
                            <Select.Option value="nauru">Nauru</Select.Option>
                            <Select.Option value="nepal">Nepal</Select.Option>
                            <Select.Option value="netherlands">Netherlands</Select.Option>
                            <Select.Option value="new-zealand">New Zealand</Select.Option>
                            <Select.Option value="nicaragua">Nicaragua</Select.Option>
                            <Select.Option value="niger">Niger</Select.Option>
                            <Select.Option value="nigeria">Nigeria</Select.Option>
                            <Select.Option value="north-macedonia">North Macedonia</Select.Option>
                            <Select.Option value="norway">Norway</Select.Option>
                            <Select.Option value="oman">Oman</Select.Option>
                            <Select.Option value="pakistan">Pakistan</Select.Option>
                            <Select.Option value="palau">Palau</Select.Option>
                            <Select.Option value="panama">Panama</Select.Option>
                            <Select.Option value="papua-new-guinea">Papua New Guinea</Select.Option>
                            <Select.Option value="paraguay">Paraguay</Select.Option>
                            <Select.Option value="peru">Peru</Select.Option>
                            <Select.Option value="philippines">Philippines</Select.Option>
                            <Select.Option value="poland">Poland</Select.Option>
                            <Select.Option value="portugal">Portugal</Select.Option>
                            <Select.Option value="qatar">Qatar</Select.Option>
                            <Select.Option value="romania">Romania</Select.Option>
                            <Select.Option value="russia">Russia</Select.Option>
                            <Select.Option value="rwanda">Rwanda</Select.Option>
                            <Select.Option value="saint-kitts-nevis">Saint Kitts and Nevis</Select.Option>
                            <Select.Option value="saint-lucia">Saint Lucia</Select.Option>
                            <Select.Option value="saint-vincent-grenadines">Saint Vincent and the Grenadines</Select.Option>
                            <Select.Option value="samoa">Samoa</Select.Option>
                            <Select.Option value="san-marino">San Marino</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Address">
                        <Flex gap={'0.3rem'}>

                            <Form.Item style={{ width: '50%' }}
                                name="houseNumber"
                                rules={[
                                    {
                                        required: true,
                                        message: 'House number and street name are required!',
                                    },
                                ]}
                            >
                                <Input placeholder='House number and street name *' />
                            </Form.Item>

                            <Form.Item style={{ width: '50%' }} name="apartment">
                                <Input placeholder='Apartment, suite, unit, etc. (optional)' />
                            </Form.Item>
                        </Flex>
                    </Form.Item>

                    <Form.Item label="City / State / ZIP">
                        <Flex gap={'0.3rem'} align='baseline' justify='space-between'>

                            <Form.Item style={{ width: '30%' }}
                                name="city"
                                rules={[
                                    {
                                        required: true,
                                        message: 'City is required!',
                                    },
                                ]}

                            >
                                <Input placeholder='Town/City *' />
                            </Form.Item>

                            <Form.Item
                                className='state-select'
                                style={{ width: '28%' }}
                                name="state"
                                rules={[
                                    {
                                        required: true,
                                        message: 'State is required!',
                                    },
                                ]}

                            >
                                <Select placeholder='State/Province *'>
                                    <Select.Option value="alabama">Alabama</Select.Option>
                                    <Select.Option value="alaska">Alaska</Select.Option>
                                    <Select.Option value="california">California</Select.Option>
                                    <Select.Option value="florida">Florida</Select.Option>

                                    <Select.Option value="ontario">Ontario</Select.Option>
                                    <Select.Option value="british-columbia">British Columbia</Select.Option>
                                    <Select.Option value="alberta">Alberta</Select.Option>

                                    <Select.Option value="andhra-pradesh">Andhra Pradesh</Select.Option>
                                    <Select.Option value="karnataka">Karnataka</Select.Option>
                                    <Select.Option value="kerala">Kerala</Select.Option>

                                    <Select.Option value="bavaria">Bavaria</Select.Option>
                                    <Select.Option value="berlin">Berlin</Select.Option>
                                    <Select.Option value="hamburg">Hamburg</Select.Option>

                                    <Select.Option value="new-south-wales">New South Wales</Select.Option>
                                    <Select.Option value="victoria">Victoria</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="postcode"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Postcode / ZIP is required!',
                                    },
                                ]}

                            >
                                <Input placeholder='Postcode / ZIP *' />
                            </Form.Item>
                        </Flex>
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Phone number is required!',
                            },
                        ]}
                    >
                        <Input placeholder='Enter your Phone number .. *' />
                    </Form.Item>

                    <Form.Item
                        name="additionalInfo"
                        label="Additional information"

                    >
                        <TextArea className='additional-textarea' placeholder="Notes about your order, e.g. special notes for delivery." rows={2} />
                    </Form.Item>
                    <Form.displayName>
                        <h2 className='subpay-h2'>Payment</h2>
                    </Form.displayName>
                    <Form.Item className='sub-payment'>
                        <Form.Item>
                            <Flex align='center' gap={'1rem'}>
                                <div className='info-pay' ></div>
                                <p>Credit Card</p>
                                <Flex className='kart-div' align='center' gap={'0.4rem'}>
                                    <Tooltip title='Visa' mouseEnterDelay={1}
                                        color='geekblue'>
                                        <img width='40px' src="./src/assets/images/logos/visa.svg" alt="" />
                                    </Tooltip>
                                    <Tooltip title='Mastercard' mouseEnterDelay={1}
                                        color='geekblue'>
                                        <img width='40px' src="./src/assets/images/logos/mastercard.svg" alt="" />
                                    </Tooltip>
                                </Flex>
                            </Flex>
                        </Form.Item>

                        <Form.Item label='Pay with your credit card easily!' className='cart-input'>
                            <p className='cart-info'></p>
                            <Form.Item name='cart_input' rules={[{
                                required: true,
                                message: 'Cart is Empty!'
                            },
                            {
                                validator: validateNumericInput,
                                message: 'Enter valid cart number!'
                            }]}>
                                <Input inputMode='text' prefix={<BsCreditCardFill className='cart-icon' />} placeholder='Your card number...' />
                            </Form.Item>


                        </Form.Item>

                    </Form.Item>
                    <Form.Item>
                        <button className='submit-btn' type="primary" typeof="submit">
                            <RiSecurePaymentLine fontSize={'1.7rem'} />
                            Pay
                        </button>
                    </Form.Item>
                </Form>
            </div>
            <div className="checkout-product-div">
                <div className="secure-info">
                    <div className='secure-feature'>
                        <RiRefund2Line className='secure-icon' />
                        <p>Easy Returns & Refunds</p>
                    </div>
                    <div className='secure-feature'>
                        <MdOutlineSupport className='secure-icon' />
                        <p>24/7 support available</p>
                    </div>
                    <div className='secure-feature'>
                        <BsCreditCardFill className='secure-icon' />
                        <p>Payment option</p>
                    </div>
                </div>
                <div ref={orderRef} className="product-order-holder">

                    <h2>Your Order</h2>
                    <div className="product-order-div">
                        <div className='order-info'>
                            <h3>Product</h3>
                            <h3>Subtotal</h3>
                        </div>
                        <div className="orders-div">
                            {cartBikes.length != 0 ?
                                cartBikes.map((bike) => <div className='orders'>
                                    <div className='orders-left-part'>
                                        <img src={bike.imgl} alt={bike.model} />
                                        <div className="text-info">
                                            <h3> <Link onClick={() => dispatch(selectproduct(bike.id))} to='/productinfo'>
                                                {bike.model}
                                            </Link></h3>
                                            <span>x{bike.count}</span>
                                        </div>
                                    </div>
                                    <p>{bike.price} &#8364;</p>
                                </div>


                                ) : <h2 className='empty-info'>Empty...</h2>
                            }
                        </div>
                        <div className='order-info'>
                            <h2>Total</h2>
                            <h1>{total} &#8364;</h1>
                        </div>
                    </div>
                    <Flex gap={7} className='coupon-div'>
                        <Input className='coupon-input' placeholder='Coupon Code' />
                        <button type='submit'>Apply</button>
                    </Flex>
                </div>
            </div>

            <div className='money-back-div'>
                <img src="./src/assets/images/money-back.png" alt="moneyback image" />
                <div className="money-back-info">
                    <h3>100% Money back guarantee!</h3>
                    <small>Your satisfaction is our priority. If you're not happy, we offer a hassle-free, 100% money-back guarantee. We value your feedback!</small>
                </div>
            </div>

        </div >
    )
}

export default Checkout