import React, { useState } from "react";
import "./ProductGallery.css";
import { Upload, ZoomIn } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
}
const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  console.log(images);
  return (
    <div className="product-gallery">
      <div className="thumbnail-list">
        {images.map((image, index) => (
          <button
            key={index}
            className={`thumbnail ${selectedImage === index ? "active" : ""}`}
            onClick={() => setSelectedImage(index)}
          >
            <img src={image} alt={`Product view ${index + 1}`} />
          </button>
        ))}
      </div>

      <div className="aspect-4/5 rounded-xl overflow-hidden relative">
        <img
          src={images[selectedImage]}
          alt="Ribbon Joy Pullover"
          className="object-cover w-full h-full"
        />
        <div className="image-controls">
          <button className="zoom-btn">
            <ZoomIn size={22} />
          </button>
          <button className="share-btn">
            <Upload size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
