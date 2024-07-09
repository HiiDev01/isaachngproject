import '../styles/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRight, faBookmark, faChevronLeft, faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {  faHeart } from '@fortawesome/free-regular-svg-icons';
import paginationItems from '../data/paginationitems.json';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cartItems, removeFromCart, updateItemQuantity, clearCart } = useCart();

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity >= 1) {
      updateItemQuantity(itemId, quantity);
    }
  };
  const itemsToShow = paginationItems.slice(0, 4);



  return (
    <div className='cart'>
      <header className='cart_header'>
      </header>
      <main className='Cart_body'>
        <div className="cart_intro">
          <Link to="/" className='back_home'>
            <span><FontAwesomeIcon icon={faChevronLeft} className='back_home_icon'/></span>
            Back
          </Link>
          <h2>Shopping Cart </h2>
        </div>
        <div className="carted_item">
          <div className="carted_item_one">
            <h3>({cartItems.length}) items in cart</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="carting_item_con">
                    <div className="carted_img_wrap">
                      <img src={item.img} alt="product_img" />
                    </div>
                    <div className="Carting_details">
                      <h2>{item.productName}</h2>
                      <p>Size</p>
                      <div className="carting_size_btn">
                        {/* Render size buttons dynamically if needed */}
                        <button>40</button>
                        <button>41</button>
                        <button>42</button>
                        <button>43</button>
                        <button>44</button>
                        <button>45</button>
                      </div>
                      <div className="carting_color">
                        {/* Render color buttons dynamically if needed */}
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                      </div>
                    </div>
                  </div>
                  <div className="cart_pricing_wrapper">
                    <h2>${item.price}</h2>
                    <div className="quantity_con">
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                        <FontAwesomeIcon icon={faMinus} className='quantity_icon'/>
                      </button>
                      <input type='number' value={item.quantity} className='quantity_number' readOnly />
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                        <FontAwesomeIcon icon={faPlus} className='quantity_icon'/>
                      </button>
                    </div>
                  </div>
                  <button className='delete_cart_btn' onClick={() => removeFromCart(item.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </li>
              ))}
              <div className="remove_all_cart_con">
                <button onClick={clearCart} className='remove_all_cart_btn'>Remove all</button>
              </div>
            </ul>
          </div>
          <div className="carted_item_two">
            <div className="carted_order_head">
              <h2>Order Summary</h2>
              <div className="coupon_con">
                <h3>Apply Coupon</h3>
                <p>Using A Promo Code?</p>
                  <form action="">
                    <div className="coupon_form">
                      <input type="text" 
                      name="coupon" 
                      id="coupon" 
                      placeholder='coupon code'
                      className='coupon_bar'
                      />
                      <input type="submit" value="apply" className='coupon_btn' />
                    </div>
                  </form>
              </div>
            </div>
            <div className="carted_order_body">
              <h2>Estimate Shipping and tax 
                <span><FontAwesomeIcon icon={faAngleDown} /></span>
              </h2>
              <div className="carted_order_body_det">
                <ul>
                  <li className='carted_ord_bod_li'>Items <span>3</span></li>
                  <li className='carted_ord_bod_li'>Total quantities <span>5</span></li>
                  <li className='carted_ord_bod_li'>Sub Total <span>$384.87</span></li>
                  <li className='carted_ord_bod_li'>Tax <span>$1.50</span></li>
                  <li className='carted_ord_bod_Total'>Total <span>$386.37</span></li>
                </ul>
                <button className='checkout_btn'>Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Recent_check_item_con">
          <div className="Recent_check_item">
            <h2>Recently Checked</h2>
            <a href="/">Sell All <span><FontAwesomeIcon icon={faArrowRight} /></span></a>
          </div>
          <div className="Recent_item_div">
            {itemsToShow.map((recentItem, index)=> (
              <div className="Recent_item" key={index}>
                <div className="recent_fav_btn_con">
                  <button className='recent_fav_btn'><FontAwesomeIcon icon={faHeart} /></button>
                </div>
                <div className="recent_img_con">
                  <img src={recentItem.img} alt="img" />
                </div>
                <h2>{recentItem.productName}</h2>
                <div className="recent_price_con">
                  <h3>${recentItem.price}</h3>
                  <div className="recent_color">
                    <p>color</p>
                    <div className="rec_color">
                      <button></button>
                      <button></button>
                      <button></button>
                      <button></button>
                    </div>
                  </div>
                </div>
                <div className="recent_add_con">
                  <button><FontAwesomeIcon icon={faBookmark} className='Bookmark'/></button>
                  <button>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                    add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cart_hero_page">
          <div className="cart_context">
            <h1>Wear the best Sneakers <br></br>
            on your foot!</h1>
            <a href="/">Read More <span><FontAwesomeIcon icon={faArrowRight} /></span></a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cart
