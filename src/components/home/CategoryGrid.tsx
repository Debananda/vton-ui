import React from "react";

const categories = [
  {
    title: "Clothing",
    image:
      "https://i8.amplience.net/i/altardstate/TopCategories1_10.30.25?fmt=auto&upscale=true&w=690",
  },
  {
    title: "Bottoms",
    image:
      "https://images.pexels.com/photos/34752459/pexels-photo-34752459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    title: "Jackets",
    image:
      "https://images.pexels.com/photos/34755042/pexels-photo-34755042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    title: "Tops",
    image:
      "https://images.pexels.com/photos/34697564/pexels-photo-34697564.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    title: "Accessories",
    image:
      "https://images.pexels.com/photos/34752368/pexels-photo-34752368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 px-4 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-lg mb-4">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-center text-sm font-medium text-gray-900">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
