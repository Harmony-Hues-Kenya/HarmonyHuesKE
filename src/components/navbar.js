import { useState } from "react";
import "../App.css";

function Navbar() {
  // state to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white bg-opacity-20 text-black">
      <nav className="container p-5 flex items-center justify-between">
        {/* logo */}
        <div className="flex-shrink-0">
          <a href="#" className="text-xl font-bold">HH</a>
        </div>

        {/* elements */}
        <div class="hidden lg:flex space-x-4">
          <a href="/" class="hover:text-gray-300">Home</a>
          <a href="/products" class="hover:text-gray-300">Products</a>
          <a href="/about" class="hover:text-gray-300">About Us</a>
          <a href="/contact" class="hover:text-gray-300">Get in Touch</a>
        </div>

        {/* cart and profile */}
        <div class="flex space-x-4">
          <a href="" class="hover:text-gray-300">Cart</a>
          <a href="" class="hover:text-gray-300">Profile</a>
        </div>

        {/* Mobile Menu Button */}
        <div class="lg:hidden">
          <button id="menu-toggle" class="text-black focus:outline-none" onClick={toggleMenu}>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden mt-4 space-y-2`}>
        <a href="/" class="block px-4 py-2 text-black hover:bg-gray-700">Home</a>
        <a href="/products" class="block px-4 py-2 text-black hover:bg-gray-700">Products</a>
        <a href="/about" class="block px-4 py-2 text-black hover:bg-gray-700">About Us</a>
        <a href="/contact" class="block px-4 py-2 text-black hover:bg-gray-700">Get in Touch</a>
      </div>
    </div>
  );
}

export default Navbar;
