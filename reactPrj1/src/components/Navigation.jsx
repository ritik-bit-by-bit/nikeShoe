import '../App.css'
const Navigation = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="./image/Nike-Logo.jpg" alt="logo" className="h-10" />
        </div>
        <ul className="flex space-x-8">
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Menu</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Location</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">About</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact</a></li>
        </ul>
        <div>
          <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;