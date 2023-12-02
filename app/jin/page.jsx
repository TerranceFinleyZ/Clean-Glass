import React from 'react'
import { Navbar } from '../../components'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai';

const page = () => {
  return (
    <div>
      <Link href="/more">
        <Navbar />
      </Link>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/p/u/pulsar-recycler-waterpipe-9-14mm-f_media-1_1_.jpg"} data-was-processed="true" width={250} height={250} className="product-image" />
          </div>
        </div>
        <div className="product-detail-desc">
          <h5> Pulsar Jinni Bong </h5>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h5>
          $90.20
          </h5>
        </div>
        <section className='buttons'>
        <form action="/api/checkout_sessionsP" method="POST">
            <button className="buy-now" type="submit" role="link">
              Buy Now
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default page