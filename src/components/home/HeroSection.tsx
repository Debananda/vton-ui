import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[500px] bg-cover bg-center hero-overlay" 
             style={{backgroundImage: `url('https://images.pexels.com/photos/34704489/pexels-photo-34704489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')`}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-2xl px-4">
          <h2 className="text-5xl font-light mb-4" style={{fontFamily: 'serif'}}>
            for every
          </h2>
          <h1 className="text-6xl font-bold mb-6 text-sage-300" style={{fontFamily: 'serif'}}>
            OCCASION
          </h1>
          <p className="text-lg mb-2">wherever you're going this season—</p>
          <p className="text-lg mb-8">we have a dress for that</p>
          <button className="bg-sage text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-opacity-90 transition-colors">
            BOGO 50% OFF // DRESSES
          </button>
          <div className="mt-8">
            <button className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-100 transition-colors">
              Shop Dresses
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
