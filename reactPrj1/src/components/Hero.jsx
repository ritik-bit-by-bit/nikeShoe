const shopping = (e) => {
  console.log(e);
};
const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row container mx-auto px-4 py-12 md:py-24 items-center justify-between">
      <div className="hero-content md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          YOUR FEET DESERVES THE BEST
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          YOUR FEET DESERVES THE BEST SO WE ARE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="hero-button flex space-x-4 mb-8">
          <button
            onClick={() => shopping("shopping")}
            className="bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800 transition-colors font-medium"
          >
            SHOP NOW
          </button>
          <button
            onClick={() => shopping("category")}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors font-medium"
          >
            CATEGORY
          </button>
        </div>
        <div className="shopping flex items-center space-x-4">
          <p className="text-gray-600">Also Available on </p>
          <div className="brand-icons flex space-x-4">
            <img
              src="./image/flipj.jpeg"
              alt="flipkart"
              className="h-10 w-auto"
            />
            <img
              src="./image/amazon.jpg"
              alt="amazon"
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
      <div className="hero-image md:w-1/2 w-full">
        <img
          src="./image/shoe_image.jpg"
          alt="shoe"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </main>
  );
};
export default Hero;
