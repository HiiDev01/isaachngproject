import React, {useState} from 'react';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import paginationItem from '../data/paginationitems.json';
import { useCart } from './CartContext';


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { cartItems } = useCart();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const toggleHamburger = ()=>{
    setIsActive(!isActive);
  }

  const toggleSearch = ()=>{
    setIsSearchActive(!isSearchActive);
    setSearchQuery('');
    setFilteredData([]);
  }

  const handleSearch = (event) =>{
    const query = event.target.value;
    setSearchQuery(query);

    if(query.length > 0){
      const filteredItems = paginationItem.filter(item =>
        item.productName && item.productName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filteredItems);
    }else{
      setFilteredData([]);
    }
  };

  const closeSearch = () => {
    setIsSearchActive(false);
    setSearchQuery('');
    setFilteredData([]);
  };
  return (
    <div className='Navbar'>
      <div className="logo"><h1>LUXESTRIDE</h1></div>
      <div className="Nav_link_con">
        <div className={`navlist ${isActive ? 'active' : ''}`}>
          <ul className='Nav_ul'>
            <li className='nav_ul_li'><a href="/" className='nav_link'>Home</a></li>
            <li className='nav_ul_li'><a href="#" className='nav_link'>Features</a></li>
            <li className='nav_ul_li'><a href="#" className='nav_link'>Our Story</a></li>
            <li className='nav_ul_li'><a href="#" className='nav_link'>Reviews</a></li>
          </ul>
          <div className="pro_con">
            <a href="#" className='profile_link'>
              <img src="/images/person.png" alt=""  className='profile_icon'/>
            </a>
          </div>
        </div>
        <div className="cart_home_con">
          <div className="search_con">
            <a href="#" className='search_link' onClick={toggleSearch}>
              <img src="/images/Vec2.png" alt="" className='search_icon'/>
            </a>
            {isSearchActive && (
              <div className="hidden_search">
              <input type='text' 
               value={searchQuery}  
               onChange={handleSearch}
               placeholder='search items...'/>
               <ul className='search_results'>
                 {filteredData.map(item =>(
                  <li key={item.id}>
                    <Link to={`/${item.id}`} className="search_result_link" onClick={closeSearch}>
                      {item.productName}
                    </Link>
                  </li>
                 ))}
               </ul>
               </div>
            )}
          </div>
          <Link to="/cart" className='cart_link'>
            <span className='cart_icon_sp'>
              <img src="/images/Vector1.png" alt="" className='cart_icon'/>
            </span>
            cart (<span className='cart_number'>{cartItems.length}</span>)
          </Link>
        </div>
      </div>
      <div  className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleHamburger}>
        <div className="ham_bars"></div>
        <div className="ham_bars"></div>
        <div className="ham_bars"></div>
      </div>
    </div>
  )
}

export default Navbar
