import React from 'react'
import Link from 'next/link'
import { Footer } from '../../components'

const page = () => {
  return (
    <div className="products-container">
      <Link href="/quad">
      <div className="product-card">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/o/r/order-heisenberg-twin-tower-quad-perc-beaker-ice-bong-online-usa.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Quad Perc Beaker</p>
          <p className="product-price">$180.25</p>
      </div>
      </Link>
      <div className="product-card">
      <Link href="/bub">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/4/2/42650-messias-illusion-double-perc-29-2-1200x1800.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Bubble Double Tree Beaker</p>
          <p className="product-price">$140.99</p>
          </Link>
        </div>
      <div className="product-card">
        <Link href="/flam">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/o/b/obke5557f-_03_.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Flame Polished Beaker </p>
          <p className="product-price">$330.75</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/gspot">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/o/w/owae5557f-_03_.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          G-Spot ice Bong</p>
          <p className="product-price">$300.05</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/tur">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/w/p/wp91extra_1800x1800.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Pulsar Turbine Percolator </p>
          <p className="product-price">$150.99</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/jin">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/p/u/pulsar-recycler-waterpipe-9-14mm-f_media-1_1_.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Pulsar Jinni Bong</p>
          <p className="product-price">$90.20</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/dru">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/g/c/gc-4702g_2.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Drum Perc 15.7inch</p>
          <p className="product-price">$100.99</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/grollz">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/b/g/bg20111a.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          G-Rollz Banksy beaker</p>
          <p className="product-price">$108.99</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/sky">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/ef6b3a06fce259ce4d247905a97b8a06/b/l/bl-icebong-4x-baumperkolator-2618138-29-2_1.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Skyscraper 4 Tree Perc Bong</p>
          <p className="product-price">$169.99</p>
          </Link>
      </div>
      <div className="product-card">
        <Link href="/jero">
      <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/p/u/purchase-jerome-baker-designs-and-ehle-dichro-beaker-ice-bong-online-usa.jpg"}  data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">	
          Jerome EHLE Dichro Beaker </p>
          <p className="product-price">$800.99</p>
          </Link>
      </div>
      <div>
        <Link href='/'>
            <h6>Return</h6>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default page
