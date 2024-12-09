import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="pt-4">
        <h1 className="justify-center flex bg-gray-100 text-lg">Welcome to Nike App</h1>
        <h2 className="flex justify-center bg-gray-100 text-sm pt-2">
          <p>Download the app to access everything from Nike.</p>
          <a href="#" className="underline"><b>Download app</b></a>
        </h2>
      </div>
      <div>
        <Image src="/shoe.png" alt="shoe" className="pl-10 pr-10 h-[85px] w-[81px]" width={81} height={85} />
        <h1 className="flex justify-center pt-4">First Look</h1>
        <h2 className="flex justify-center text-7xl p-2"><b>Nike Air Max Pulse</b></h2>
        <p className="flex justify-center text-sm">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
        <p className="flex justify-center text-sm">designed to push you past your limits and help you go to the max.</p>
        <div className="flex justify-center p-4">
          <button className="rounded-full bg-black text-white p-2 mr-4 border-none hover:bg-gray-700 dark:bg-white dark:text-black"> Notify me </button>
          <button className="rounded-full bg-black text-white p-2 border-none hover:bg-gray-700 dark:bg-white dark:text-black"> Shop Now! </button>
        </div>
      </div>
      <div>
        <h1 className="text-xl p-10"><b>Best of Air Max</b></h1>
        <div className="flex flex-wrap justify-between">
          <Image src="/image1.png" alt="shoe1" className="w-full sm:w-[30%] mb-4 p-10" width={300} height={300} />
          <Image src="/image3.png" alt="shoe3" className="w-full sm:w-[30%] mb-4 p-10" width={300} height={300} />
          <Image src="/image2.png" alt="shoe2" className="w-full sm:w-[30%] mb-4 p-10" width={300} height={300} />
        </div>
        <div className="justify-center">
          <h1 className="text-xl p-10"><b>Featured</b></h1>
          <Image src="/featured.png" alt="running man" className="pl-10 pr-10 h-[85px] w-[81px]" width={81} height={85} />
          <h1 className="text-5xl flex justify-center p-4"><b>STEP INTO WHAT FEELS GOOD</b></h1>
          <h1 className="text-sm flex justify-center p-2">Cause everyone should know the feeling of running in that perfect pair.</h1>
          <div className="flex justify-center p-2">
            <button className="rounded-full bg-black text-white p-2 mr-4 border-none hover:bg-gray-700 dark:bg-white dark:text-black">Find your shoe</button>
          </div>
        </div>
        <div>
          <h1 className="text-xl p-10"><b>DON'T MISS</b></h1>
          <Image src="/miss.png" alt="sporty man" className="pl-10 pr-10 h-[85px] w-[81px]" width={81} height={85} />
          <h1 className="text-6xl flex justify-center p-4"><b>FLIGHT ESSENTIALS</b></h1>
          <h1 className="text-sm flex justify-center p-2">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</h1>
          <div className="flex justify-center p-2">
            <button className="rounded-full bg-black text-white p-2 mr-4 border-none hover:bg-gray-700 dark:bg-white dark:text-black">Shop</button>
          </div>
        </div>
        <h1 className="text-xl p-10"><b>THE ESSENTIALS</b></h1>
        <div className="flex justify-center space-x-5">
          <Image src="/pastel.png" alt="hoodie and shoes" className="w-[30%] mb-4" width={300} height={300} />
          <Image src="/brown.png" alt="brown" className="w-[30%] mb-4" width={300} height={300} />
          <Image src="/yellow.png" alt="yellow" className="w-[30%] mb-4" width={300} height={300} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
