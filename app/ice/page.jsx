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
            <img src={"https://www.grasscity.com/media/catalog/product/cache/fa138dddcddb37839abfa4620aa785ab/g/c/gc4703_3.jpg"} data-was-processed="true" width={250} height={250} className="product-image" />
          </div>
        </div>
        <div className="product-detail-desc">
          <h5> Ice Bong </h5>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h5>
          $74.00
          </h5>
        </div>
        <section className='buttons'>
        <form action="/api/checkout_sessionsB" method="POST">
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