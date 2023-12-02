import React from 'react'
import './globals.css'
import Link from 'next/link'
import { Footer, FooterBanner, HeroBanner } from '../components'

const Home = () => {
  return (
    
    <>
    <HeroBanner />
     <div className="products-heading">
      <p><span>18+</span> only</p>
      <h2>Bongs</h2>
     </div> 

     <div className="products-container">
      <Link href="/halo">
      <div className="product-card">
      <img src={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQm1ZrBXEzmhPNLI-n2ub34QzSud2x110UmX3yF3_leL9vPHGy9E-IH06DwcP4OlrGO-A27ZB8VmQgWruqqgk_wtEAiU5XNIvn5J_dvmmazkFT2aAjfErYcfg&amp;usqp=CAE"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Halo Tie Double Stack Beaker</p>
          <p className="product-price">$260.93</p>
      </div>
      </Link>
      <div className="product-card">
      <Link href="/phoenix">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/b/u/buy-phoenix-rising-basic-beaker-bong-large-online-usa.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Phoenix Rising Basic Beaker</p>
          <p className="product-price">$70.50</p>
          </Link>
        </div>
      <div className="product-card">
        <Link href="/ice">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/fa138dddcddb37839abfa4620aa785ab/g/c/gc4703_3.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Ice Bong </p>
          <p className="product-price">$74.00</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/double">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/p/u/pulsar-borosilicate-water-pipe-16.5-19mm-female_media-1_1_.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Double Matrix Stereo Bong</p>
          <p className="product-price">$170.70</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/heis">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/4/2/42659-hnbg-gold-double-perc-18-8-1200x1800.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Heisenberg HNBG Beaker </p>
          <p className="product-price">$130.99</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/clear">
      <img src={"//www.headshop.com/cdn/shop/products/0abc02c3-7da4-4101-8726-a2820138a1c4_1800x1800.jpg?v=1669073266"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Clear Menorah</p>
          <p className="product-price">$299.99</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/roor">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/ef6b3a06fce259ce4d247905a97b8a06/r/o/roor-745-l18-_04_.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          ROOR Little Sista Beaker</p>
          <p className="product-price">$520.46</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/inv">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/p/u/pulsar_quad_perc_beaker_bong_white_1024x.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Inverted Showerhead Perc Beaker</p>
          <p className="product-price">$195.55</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/la">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/o/i/oie_zisprpa4gvlc.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          LA double Percolator Bong</p>
          <p className="product-price">$90.46</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/black">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/g/p/gper-28-no-_03_.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Black Leaf ELITE Cylinder Ice Bong </p>
          <p className="product-price">$83.93</p>
          </Link>
      </div>
      <div>
        <Link href="/more">
        <h6>
          See More...
        </h6>
        </Link>
      </div>
     </div>
     <FooterBanner />
     <Footer/>
    </>
  )
}

export default Home
