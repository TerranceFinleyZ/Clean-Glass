import React from 'react'
import { Navbar } from '../../components'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai';

const page = () => {
  return (
    <div>
      <Link href="/">
        <Navbar />
      </Link>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={"https://www.grasscity.com/media/catalog/product/cache/991238b50a055d049ec701e2668bf240/b/u/buy-phoenix-rising-basic-beaker-bong-large-online-usa.jpg"} data-was-processed="true" width={250} height={250} className="product-image" />
          </div>
        </div>
        <div className="product-detail-desc">
          <h5> Phoenix Rising Basic Beaker </h5>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h5>
          $70.50
          </h5>
        </div>
        <section className='buttons'>
        <form action="/api/checkout_sessionsA" method="POST">
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