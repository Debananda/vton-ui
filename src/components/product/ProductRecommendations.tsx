import React from 'react'
import './ProductRecommendations.css'

const ProductRecommendations = () => {
  const products = [
    {
      id: 1,
      name: "Brown Boot Cut Jeans",
      price: "$88.00",
      image: "https://images.pexels.com/photos/34769120/pexels-photo-34769120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      colors: ['brown', 'black']
    },
    {
      id: 2,
      name: "Trackside Fleece Hoodie",
      price: "$128.00",
      image: "https://images.pexels.com/photos/34752459/pexels-photo-34752459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      colors: ['red', 'black']
    },
    {
      id: 3,
      name: "Free Spirit Cheetah Quarter Zip",
      price: "$98.00",
      image: "https://images.pexels.com/photos/34697564/pexels-photo-34697564.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      colors: ['brown']
    },
    {
      id: 4,
      name: "Needle Satin Christmas Sleep Shorts",
      price: "$44.00",
      image: "https://images.pexels.com/photos/34757571/pexels-photo-34757571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      colors: ['green']
    }
  ]

  return (
    <section className="product-recommendations">
      <h2 className="section-title">Picked for You</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">{product.price}</div>
              <div className="product-colors">
                {product.colors.map((color, index) => (
                  <span 
                    key={index}
                    className="color-dot"
                    style={{ 
                      backgroundColor: color === 'brown' ? '#8B4513' : 
                                     color === 'black' ? '#000000' : 
                                     color === 'red' ? '#DC143C' : 
                                     color === 'green' ? '#228B22' : color 
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductRecommendations
