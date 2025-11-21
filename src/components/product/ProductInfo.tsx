import React, { useState } from "react";
import { BookOpen, Truck } from "lucide-react";
import VirtualTryOn from "../vton/VirtualTryOn";
import "./ProductInfo.css";
interface ProductInfoProps {
  images: string[];
}
const ProductInfo: React.FC<ProductInfoProps> = ({ images }) => {
  const [selectedColor, setSelectedColor] = useState("beige");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");

  const colors = [
    { name: "beige", color: "#F5E6D3" },
    { name: "black", color: "#000000" },
    { name: "brown", color: "#8B4513" },
  ];

  const sizes = ["XS", "S", "M", "L"];

  return (
    <div className="product-info">
      <h1 className="product-title">Ribbon Joy Pullover</h1>
      <div className="product-price">$88.00</div>

      <div className="product-options">
        <div className="color-selection">
          <label className="option-label">Color</label>
          <div className="color-options">
            {colors.map((color) => (
              <button
                key={color.name}
                className={`color-option ${
                  selectedColor === color.name ? "active" : ""
                }`}
                style={{ backgroundColor: color.color }}
                onClick={() => setSelectedColor(color.name)}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
        </div>

        <div className="size-selection">
          <label className="option-label">Size</label>
          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-option ${
                  selectedSize === size ? "active" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-selection">
          <label className="option-label">Quantity</label>
          <div className="quantity-controls">
            <button
              className="quantity-btn"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="quantity-value">{quantity}</span>
            <button
              className="quantity-btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 text-gray-500 text-sm mb-4">
        <p className="flex gap-2 ">
          Ship it from <Truck size={20} />
        </p>
        <p>FREE SHIPPING on Orders $125</p>
      </div>

      <div className="mb-4">
        <button className="bg-slate-900 text-white py-2 px-4 w-full">
          ADD TO CART
        </button>
      </div>
      <VirtualTryOn images={images} />
      <div className="compare-section">
        <button className="compare-btn">
          <BookOpen size={16} className="mr-2" />
          Compare
        </button>
      </div>

      <div className="product-tabs">
        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Details
            <span className="tab-icon">+</span>
          </button>
          <button
            className={`tab-btn ${activeTab === "sizing" ? "active" : ""}`}
            onClick={() => setActiveTab("sizing")}
          >
            Sizing
            <span className="tab-icon">+</span>
          </button>
          <button
            className={`tab-btn ${activeTab === "care" ? "active" : ""}`}
            onClick={() => setActiveTab("care")}
          >
            Care
            <span className="tab-icon">+</span>
          </button>
        </div>
      </div>

      <div className="social-share">
        <span>Share</span>
        <div className="social-buttons">
          <button className="social-btn facebook">f</button>
          <button className="social-btn twitter">t</button>
          <button className="social-btn pinterest">p</button>
          <button className="social-btn instagram">@</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
