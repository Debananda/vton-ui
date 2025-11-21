import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductRecommendations from "../components/product/ProductRecommendations";
import CustomerReviews from "../components/product/CustomerReviews";
import { ChevronRight } from "lucide-react";

function ProductDetails() {
  const images = [
    "https://www.altardstate.com/dw/image/v2/BDDX_PRD/on/demandware.static/-/Sites-as_catalog/default/dwdd66a795/image/001163_IKT300394-02_CREAM_00.JPG?sw=1498&sh=2000&q=98",
    "https://www.altardstate.com/dw/image/v2/BDDX_PRD/on/demandware.static/-/Sites-as_catalog/default/dw7d456539/image/001163_IKT300394-02_CREAM_01.JPG?sw=1498&sh=2000&q=98",
    "https://www.altardstate.com/dw/image/v2/BDDX_PRD/on/demandware.static/-/Sites-as_catalog/default/dw7d456539/image/001163_IKT300394-02_CREAM_02.JPG?sw=1498&sh=2000&q=98",
    "https://www.altardstate.com/dw/image/v2/BDDX_PRD/on/demandware.static/-/Sites-as_catalog/default/dw7d456539/image/001163_IKT300394-02_CREAM_03.JPG?sw=1498&sh=2000&q=98",
    "https://www.altardstate.com/dw/image/v2/BDDX_PRD/on/demandware.static/-/Sites-as_catalog/default/dw7d456539/image/001163_IKT300394-02_CREAM_04.JPG?sw=1498&sh=2000&q=98",
  ];
  return (
    <main className="bg-white text-gray-900 py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center text-sm text-gray-500 space-x-2 mb-4"
          aria-label="breadcrumb"
        >
          <a href="#" className="text-indigo-600 hover:underline">
            Home
          </a>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <a href="#" className="text-indigo-600 hover:underline">
            Bottoms
          </a>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-700 font-medium">
            Adylam Corduroy Crop Pant
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <ProductGallery images={images} />
          <ProductInfo images={images} />
        </div>

        <div className="mt-12">
          <ProductRecommendations />
        </div>
        <div className="mt-8">
          <CustomerReviews />
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
