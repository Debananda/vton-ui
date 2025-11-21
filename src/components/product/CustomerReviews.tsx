import React from 'react'
import './CustomerReviews.css'

const CustomerReviews = () => {
  const ratings = [
    { stars: 5, count: 0 },
    { stars: 4, count: 0 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 }
  ]

  return (
    <section className="customer-reviews">
      <div className="reviews-header">
        <h2 className="section-title">Customer Reviews</h2>
        <button className="write-review-btn">Write a Review</button>
      </div>
      
      <div className="rating-snapshot">
        <h3 className="snapshot-title">Rating Snapshot</h3>
        <div className="rating-bars">
          {ratings.map((rating) => (
            <div key={rating.stars} className="rating-row">
              <span className="star-count">{rating.stars}</span>
              <div className="star-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="rating-bar">
                <div className="rating-fill" style={{ width: '0%' }}></div>
              </div>
              <span className="rating-count">{rating.count}</span>
            </div>
          ))}
        </div>
        
        <div className="no-reviews">
          <p>No reviews yet, be the first to review this product</p>
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
