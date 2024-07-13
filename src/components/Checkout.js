import React from 'react';
import '../styles/Checkout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { cartItems, totalQuantity, subtotal, tax, total } = location.state || {};


  return (
    <div className='checkout'>
      <Link to="/cart" className='check_back_link'>
       <span><FontAwesomeIcon icon={faAngleLeft} className='back_tocart_icon'/></span>
       Back
      </Link>
      <h2 className="checkout_heading">checkout</h2>
      <div className="checkout_bars">
        <p><span><img src="/images/ck1.png" alt="icon" /></span>Cart</p>
        <p><span><img src="/images/ck1.png" alt="icon" /></span>Delivery address</p>
        <p><span><img src="/images/ck2.png" alt="icon" /></span>Payment</p>
        <p><span><img src="/images/ck3.png" alt="icon" /></span>Confirmation</p>
      </div>
      <div className="check_out_con">
        <div className="checkout_item_one checkout_items_wraper">
          <h2 className='form_heading'>Shipping Information</h2>
          <form action="" className='Address_form'>
            <div className="form_input_con">
              <div className="form_input_wrapper">
                <div className="form_input">
                  <span>Country:</span>
                  <select name="location" id="location">
                    <option value="Lagos">Lagos</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ibadan">Ibadan</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Kwara">Kwara</option>
                  </select>
                </div>
              </div>
              <div className="form_input_wrapper">
                <div className="form_input">
                  <span>Address:</span>
                  <input type="text" 
                    name="address" 
                    id="address" 
                    className='Address'
                    placeholder='Enter your address'
                  />
                </div>
              </div>
              <div className="form_input_wrapper">
                <div className="form_input">
                  <span>Email:</span>
                  <input type="email" 
                    name="customer_email" 
                    id="customer_email" 
                    placeholder='Enter your email'
                  />
                </div>
              </div>
            </div>
          </form>
          <form action="" className='payment_method_form'>
            <div className="payment_met_con">
              <h2 className='payment_met_heading'>Payment Method</h2>
              <div className="payment_type_con">
                <div className="google_payment_con">
                  <Link to="/checkout">google pay 
                    <span><FontAwesomeIcon icon={faAngleRight} /></span>
                  </Link>
                </div>
                <select name="paymet_type_select" id="paymet_type_select" className='card_select'>
                  <option value="card">debit or credit card</option>
                  <option value="bank">bank transfer</option>
                  <option value="Delivery">Pay on Delivery</option>
                </select>
              </div>
            </div>
          </form>
          <div className="card_details_con">
                <p className="card_heading">card</p>
                <form action="" className='card_form'>
                  <div className="debit_card_div">
                    <span className='debit_card_span'><img src="/images/VISA_PICT.PNG" alt="img" /></span>
                    <div className="debit_card_wrap">
                      <span>access bank</span>
                      <input type="text" name="dc_numb" id="dc_numb" placeholder='**** **** **** 1234'/>
                    </div>
                  </div>

                  <div className="credit_card_div">
                    <span className='credit_card_span'><img src="/images/master.png" alt="img" /></span>
                    <div className="credit_card_wrap">
                      <span>GT bank</span>
                      <input type="text" name="cc_numb" id="cc_numb" placeholder='**** **** **** 1234'/>
                    </div>
                  </div>
                </form>
              </div>
        </div>
        <div className="checkout_item_two checkout_items_wraper">
          <div className="checkout_item_two_wrap">
            <h2 className='checkout_sum_heading'>Your Order Summary</h2>
            <ul className='checkout_item_img_con'>
              {cartItems.map(item => (
                <li key={item.id}>
                  <img src={item.img} alt="img" />
                </li>
              ))}
            </ul>
            <div className="checkout_item_price_con">
              <h2 className="total_item_heading">Estimate Shipping and tax 
                <span><FontAwesomeIcon icon={faAngleDown} className='estimate_icon'/></span>
              </h2>
              <ul className='final_price_ul'>
                 <li className='final_price_ul_li'>Items <span>{cartItems.length}</span></li>
                 <li className='final_price_ul_li'>Total quantities <span>{totalQuantity}</span></li>
                 <li className='final_price_ul_li'>Sub Total <span>${subtotal.toFixed(2)}</span></li>
                 <li className='final_price_ul_li'>Tax <span>${tax.toFixed(2)}</span></li>
                 <li className='final_price_ul_li_total'>Total <span>${total.toFixed(2)}</span></li>
              </ul>
              <button className='pay_now'>pay now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
