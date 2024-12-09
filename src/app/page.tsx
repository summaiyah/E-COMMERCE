import Footer from "./components/footer";
import NavBar from "./components/navbar";

export default function Home() {
  return(
    <div>
      <NavBar/>
      <div className="pt-4">
        <h1 className="justify-center flex bg-gray-100 text-lg">Welcome to Nike App</h1>
        <h2 className="flex justify-center bg-gray-100 text-sm pt-2">
         <p>Download the app to access everything from Nike.</p>
         <a href="" className="underline"><b>Download app</b></a>
        </h2>
      </div>
      <div>
        <img src="/shoe.png" alt="shoe" className="pl-10 pr-10 h-85 w-81"/>
        <h1 className="flex justify-center pt-4">First Look</h1>
        <h2 className="flex justify-center text-7xl p-2"><b>Nike Air Max Pulse</b></h2>
        <p className="flex justify-center text-sm">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
        <p className="flex justify-center text-sm"> —designed to push you past your limits and help you go to the max.</p>
        <div className="flex justify-center p-4">
        <button className="justify-center rounded-full bg-black text-white p-2 mr-4 border-none  hover:bg-gray-700  dark:bg-white dark:text-black"> Notify me </button>
        <button className="justify-center rounded-full bg-black text-white  p-2 border-none  hover:bg-gray-700  dark:bg-white dark:text-black"> Shop Now! </button>
        </div>
      </div>
      <div>
        <h1 className="text-xl p-10"><b>Best of Air Max</b></h1>
        <div className="flex flex-wrap justify-between">
          <img src="/image1.png" alt="shoe1"  className="w-full sm:w-[30%] mb-4 p-10" />
          <img src="/image3.png" alt="shoe3" className="w-full sm:w-[30%] mb-4 p-10" />
          <img src="/image2.png" alt="shoe2" className="w-full sm:w-[30%] mb-4 p-10" />
        </div>
        <div className="justify-center">
          <h1 className="text-xl p-10"><b>Featured</b></h1>
          <img src="/featured.png" alt="running man" className="pl-10 pr-10 h-85 w-81"/>
          <h1 className="text-5xl flex justify-center p-4"><b>STEP INTO WHAT FEELS GOOD</b></h1>
          <h1 className="text-sm flex justify-center p-2">Cause everyone should know the feeling of running in that perfect pair.</h1>
          <div className="flex justify-center p-2">
          <button className="flex justify-center rounded-full bg-black text-white p-2 mr-4 border-none  hover:bg-gray-700  dark:bg-white dark:text-black">Find your shoe</button>
          </div>
        </div>
        <div>
          <h1 className="text-xl p-10"><b>DON'T MISS</b></h1>
          <img src="/miss.png" alt="sporty man"  className="pl-10 pr-10 h-85 w-81"/>
          <h1 className="text-6xl flex justify-center p-4"><b>FLIGHT ESSENTIALS</b></h1>
          <h1 className="text-sm flex justify-center p-2">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</h1>
          <div className="flex justify-center p-2">
          <button className="flex justify-center rounded-full bg-black text-white pr-3 pl-3 pt-1 pb-1 mr-4 border-none  hover:bg-gray-700  dark:bg-white dark:text-black">Shop</button>
          </div>
        </div>
        <h1 className="text-xl p-10"><b>THE ESSENTIALS</b></h1>
        <div className="flex justify-center space-x-5">
          <img src="/pastel.png" alt="hoodie and shoes" className="w-[30%] mb-4" />
          <img src="/brown.png" alt="brown" className="w-[30%] mb-4" />
          <img src="/yellow.png" alt="yellow" className="w-[30%] mb-4"/>
        </div>
        </div>
        <Footer/>
    </div>
  )
 }