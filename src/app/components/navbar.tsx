
export default function NavBar(){
    return(
      <div>
        <div>
         <nav className="bg-gray-100">
        <ul className="flex justify-end items-center space-x-4 pr-4">
          <li>Find a shop</li>
          <li>|</li>
          <li>Join us</li>
          <li>|</li>
          <li>help</li>
          <li>|</li>
          <li>sign in</li>
        </ul>
        </nav>
        </div>
        <div className="flex justify-between items-center w-full px-4 pt-4">
          <nav className="flex flex-1 justify-between items-center">
            <img src="/nike.png" alt="logo" className="h-12 w-12 mr-10 ml-4" />
     <ul className="flex flex-grow justify-center space-x-6 text-lg">
       <li>New & Featured</li>
       <li>Women</li>
       <li>Men</li>
       <li>kids</li>
       <li>Sale</li>
       <li>Sneakers</li>
       <li>Accessories</li>
       <li>Sports wear</li>
     </ul>
     </nav>
     <div className="flex justify-end relative max-w-md">
  
    <input type="text" placeholder="Search..."
      className="mr-[70px] w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
    /> 
    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 z-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.5 10a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0z" />
   </svg>
   </div>

   </div>
      </div> 
    )
   }