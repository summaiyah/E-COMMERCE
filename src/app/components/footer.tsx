export default function Footer(){
    return(
        <div>
<footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
      <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
         <img src="/nike.png" alt="logo" className="h-12 w-12" />
          NIKE  
      </a>
      <p className="my-6 text-gray-500 dark:text-gray-400">A global leader in athletic footwear, apparel, and equipment, known for its innovative designs and iconic "Just Do It" slogan.</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Campaigns</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" className="hover:underline">Nike™</a>. All Rights Reserved.</span>
  </div>
</footer>
        </div>
    )
}
