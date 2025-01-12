import { OpeningTime } from "@/utils/footerTime";
import { CiTwitter, CiInstagram, CiFacebook, CiYoutube } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="py-10 px-52 bg-black mt-10">
      <div className="text-white grid grid-cols-3">
        <div className="text-[#ABA59F]">
          <h1 className="text-2xl font-bold mb-3 text-white">Contact</h1>
          <p>44600 Bhanimandal, Lalitpur</p>
          <p>Nepal</p>
          <p className="text-xl font-bold text-[#91765A] my-4">9812345678</p>
          <p className="underline underline-offset-8 decoration-[#91765A]">info@abishmagar.com</p>
          <div className="my-7 flex gap-3 cursor-pointer text-[#91765A]">
            <CiInstagram size={20} />
            <CiFacebook size={20} />
            <CiYoutube size={20} />
            <CiTwitter size={20} />
            <FaPinterestP size={20} />
          </div>
        </div>

        <div className="max-w-64 text-[#ABA59F]">
          <h1 className="text-2xl font-bold mb-3 text-white">Opening Hours</h1>
          {
            OpeningTime.map((timing, index) => (
              <div key={index} className="flex justify-between items-center space-y-2">
                <p>{timing.day}</p>
                <p>{timing.time}</p>
              </div>
            ))
          }
        </div>

        <div className="max-w-[333px]">
          <h1 className="text-2xl font-bold mb-3">Subscribe</h1>
          <p className="text-[#ABA59F] mb-10">Subscribe to take advantage of our campaigns and gift certificates.</p>
          <div className="relative">
            <input type="email" placeholder="Enter your email" className="border border-[#ABA59F] w-full outline-none bg-black py-3 px-2" />
            <button className="bg-[#91765A] hover:bg-[#91765A]/90 hover-transition absolute right-0 px-4 py-3 my-1 mx-1 text-xs font-bold">SUBSCRIBE</button>
          </div>
        </div>



      </div>
      <hr className="mt-10 opacity-15"/>
      <p className="mt-5 text-xs text-[#91765A]">© {new Date().getFullYear()} Barber Shop. All rights reserved.</p>
    </div>
  )
}
