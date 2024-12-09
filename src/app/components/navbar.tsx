import Image from 'next/image';

export default function NavBar() {
  return (
    <div>
      <nav className="bg-gray-100">
        <ul className="flex justify-end items-center space-x-4 pr-4 text-sm">
          <li><a href="#">Find a shop</a></li>
          <li>|</li>
          <li><a href="#">Join us</a></li>
          <li>|</li>
          <li><a href="#">Help</a></li>
          <li>|</li>
          <li><a href="#">Sign In</a></li>
        </ul>
      </nav>

      <div className="flex justify-between items-center w-full px-4 pt-4">
        <nav className="flex flex-1 justify-between items-center">
          <Image src="/nike.png" alt="Nike logo" className="h-12 w-12 mr-10 ml-4" width={48} height={48} />
          
          <ul className="flex flex-grow justify-center space-x-6 text-lg">
            <li><a href="#">New & Featured</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">Sneakers</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Sportswear</a></li>
          </ul>
        </nav>

        <div className="flex justify-end relative max-w-md w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 z-10 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M16.5 10a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
