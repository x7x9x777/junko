import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="nav" className="w-full bg-white flex justify-center items-center h-[100px]">
    
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[100px]">
            {/* Logo (left-aligned within centered content block) */}
            <a href="https://www.hypr.com/" rel="home" aria-label="HYPR" className="text-xl font-bold">
              icon
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-6">
              <ul className="flex space-x-6 text-sm font-medium text-gray-700">
                <li><a href="#">Platform</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#"></a><span>search</span></li>
                <li><a href="#" className="ml-[1.15rem] bg-[#3807d3] text-white px-4 py-2 rounded-md hover:bg-gray-900 transition text-left"><span className="text-white">GET A DEMO</span></a></li>
              </ul>
             
            </nav>

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile nav */}
          {isOpen && (
            <nav className="md:hidden mt-2">
              <ul className="flex flex-col space-y-2 text-sm font-medium text-gray-700">
                <li><a href="#">Platform</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Company</a></li>
                <li className="bg-[red] w-20 h-20">x</li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Pricing</a><span>search</span></li>
                <li><a href="#" className="ml-[1.15rem] bg-[#3807d3] text-white px-4 py-2 rounded-md hover:bg-gray-900 transition text-left">Pricing</a><span>GET A DEMO</span></li>
              </ul>
              {/* <div className="mt-4 flex flex-col space-y-2">
                <button className="text-gray-600 hover:text-black text-left">🔍 Search</button>
                <button className="ml-[1.15rem] bg-[#3807d3] text-white px-4 py-2 rounded-md hover:bg-gray-900 transition text-left">
                  GET A DEMO
                </button>
              </div> */}
            </nav>
          )}
        </div>
      
    </header>
  );
}