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
            <img src={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQm1ZrBXEzmhPNLI-n2ub34QzSud2x110UmX3yF3_leL9vPHGy9E-IH06DwcP4OlrGO-A27ZB8VmQgWruqqgk_wtEAiU5XNIvn5J_dvmmazkFT2aAjfErYcfg&amp;usqp=CAE"} data-was-processed="true" width={250} height={250} className="product-image" />
          </div>
        </div>
        <div className="product-detail-desc">
          <h5> Halo Tie Double Stack Beaker </h5>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h5>
          $260.93
          </h5>
        </div>
        <section className='buttons'>
          <form action="/api/checkout_sessions" method="POST">
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
