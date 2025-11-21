import React from "react";

const features = [
  {
    title: "Advent Calendar",
    image:
      "https://images.pexels.com/photos/34757603/pexels-photo-34757603.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    buttonText: "Advent Calendar",
  },
  {
    title: "Shop Activewear",
    image:
      "https://images.pexels.com/photos/34757571/pexels-photo-34757571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    buttonText: "Shop Activewear",
  },
  {
    title: "at HOME",
    image:
      "https://images.pexels.com/photos/34750106/pexels-photo-34750106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    buttonText: "Discover Home",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 px-4  mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="relative group cursor-pointer">
            <div className="aspect-4/5 overflow-hidden rounded-lg">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute bottom-6 left-6 right-6">
                {index === 2 && (
                  <h3 className="text-white text-2xl font-light mb-4">
                    at HOME
                  </h3>
                )}
                <button className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-100 transition-colors">
                  {feature.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
