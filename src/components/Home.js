import React, {useState, useRef}from 'react';
import '../styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faPlus,} from '@fortawesome/free-solid-svg-icons';
import preData from '../data/premium.json';
import newData from '../data/newproduct.json';
import paginationItem from '../data/paginationitems.json';
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useCart } from './CartContext';


const ITEMS_PER_PAGE = 3;
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(paginationItem.length / ITEMS_PER_PAGE);
  const premiumItemsRef = useRef(null);
  const { addToCart } = useCart();

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = paginationItem.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const getPaginationButtons = () => {
    const pageNumbers = [];
    const maxButtons = 5;

    let startPage = 1;
    let endPage = maxButtons;

    if (currentPage > Math.floor(maxButtons / 2)) {
      startPage = currentPage - Math.floor(maxButtons / 2);
      endPage = currentPage + Math.floor(maxButtons / 2);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const scrollToPremiumItems = (scrollOffset) => {
    if (premiumItemsRef.current) {
      premiumItemsRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='Home'>
      <header className='Home_header'>
        <div className="nav_container">

        </div>
        <div className="Home_content_con">
          <div className="Home_content">
            <h1>Sneakers</h1>
            <h2>Magic & Comfort</h2>
            <p>Step into luxury with our stunning collection of sneakers. 
              Elevate your style effortlessly with comfort and magic sneakers 
              crafted with precision and elegance
            </p>
            <a href="/">Read More <span><FontAwesomeIcon icon={faArrowRight}/></span></a>
          </div>
          <div className="HomeImg_con">
            <img src="/images/fig1-min.png" alt="HomeImage" className='HomeImg'/>
            <img src="/images/Ellipse3.png" alt="HomeShadow" className='HomeShadow'/>
          </div>
        </div>
      </header>
      <section className='New_product_sec'>
        <h2 className='Pre_heading'>Premium Collections </h2>
        <div className="premium_item" ref={premiumItemsRef}>
          {preData.map(item =>(
            <div key={item.id} className='Pre_products'>
              <div className='pre_pro_imgCon'>
                <button className='add_to_btn' onClick={() => addToCart(item)}>
                  <span><img src="/images/Vector3.png" alt="" /></span>
                  <span>add to cart</span>
                </button>
                <img src={item.img} alt="item" />
              </div>
              <div className='pro_details'>
                <p>{item.productName}</p>
                <h3>${item.price}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="control_btn">
          <button onClick={() => scrollToPremiumItems(-100)}><img src="/images/Vector5.png" alt="" /></button>
          <button onClick={() => scrollToPremiumItems(100)}><img src="/images/Vector4.png" alt="" /></button>
        </div>
      </section>
      <section className='All_product'>
        <h2 className='All_pro_heading'>Popular Collections</h2>
        <div className="category_nav">
          <a href="/"><img src="/images/filter.png" alt="" /></a>
          <div className="category_btn_con">
            <button className='categ_btn active'>All</button>
            <button className='categ_btn'>Nike</button>
            <button className='categ_btn'>Kyrie</button>
            <button className='categ_btn'>Air Jordans</button>
            <button className='categ_btn'>Air Force 1</button>
            <button className='categ_btn'>Addidas</button>
            <button className='categ_btn'>Converse</button>
            <button className='categ_btn'>Converse</button>
          </div>
        </div>
        <div className="pre_item">
          {newData.map(items =>(
            <div className="items_con" key={items.id}>
              <div className="items_header">
                <div className="items_ty_con">
                  <p>{items.type}</p>
                  <button><FontAwesomeIcon icon={faHeart} className='items_icon'/></button>
                </div>
                <img src={items.img} alt="" className='New_item_img'/>
              </div>
              <div className="items_body">
                <h2>{items.productName}</h2>
                <div className="pC">
                  <h3>${items.price}</h3>
                  <div className="items_color_con">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                  </div>
                </div>
                <div className="BC">
                  <button>
                    <FontAwesomeIcon icon={faBookmark} className='bookmark'/>
                  </button>
                  <button onClick={() => addToCart(items)}>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hero_page">
          <div className="hero_content">
            <h1>Is this the perfect <br></br>
            Sneakers?</h1>
            <a href="/">read more <span><FontAwesomeIcon icon={faArrowRight} /></span></a>
          </div>
        </div>

        <div className="pagination_item_con">
          <div className="pagination_item_wrap">
            {currentItems.map(paginItem => (
              <div className="paginationItem" key={paginItem.id}>
                <div className="pagin_item_head">
                  <div className="pagin_fav_con">
                     <button><FontAwesomeIcon icon={faHeart} className='pagin_fav_btn' /></button>
                  </div>
                  <img src={paginItem.img} alt="" className='paginItemImage'/>
                </div>
                <h2>{paginItem.productName}</h2>
                <div className="pagC">
                  <h3>${paginItem.price}</h3>
                  <div className="pag_item_con">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                  </div>
                </div>
                <div className="BodC">
                  <button>
                    <FontAwesomeIcon icon={faBookmark} className='bookmark'/>
                  </button>
                  <button onClick={() => addToCart(paginItem)}>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                    add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination_btn_con">
        {getPaginationButtons().map(pageNumber => (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={currentPage === pageNumber ? 'active' : ''}
            >
              {pageNumber}
            </button>
          ))}
          {currentPage < totalPages && (
            <button onClick={handleClickNext}>&gt;</button>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
