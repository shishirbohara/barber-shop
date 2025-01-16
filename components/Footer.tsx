import { OpeningTime } from "@/utils/footerTime";
import { CiTwitter, CiInstagram, CiFacebook, CiYoutube } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-10 xl:px-52 lg:px-10 px-2 bg-black">
      <div className="text-white grid lg:grid-cols-3">
        <div className="text-[#ABA59F] text-center lg:text-left">
          <h1 className="md:text-2xl text-lg font-bold mb-3 text-white">
            Contact
          </h1>
          <p className="text-sm">44600 Bhanimandal, Lalitpur</p>
          <p className="text-sm">Nepal</p>
          <p className="md:text-xl font-bold text-[#91765A] md:my-4 my-1">
            9812345678
          </p>
          <p className="underline underline-offset-8 decoration-[#91765A] text-sm md:text-base">
            info@abishmagar.com
          </p>
          <div className="my-7 flex justify-center lg:justify-normal gap-3 cursor-pointer text-[#91765A]">
            <CiInstagram size={20} />
            <CiFacebook size={20} />
            <CiYoutube size={20} />
            <CiTwitter size={20} />
            <FaPinterestP size={20} />
          </div>
        </div>

        <div className="lg:max-w-64 text-[#ABA59F]">
          <h1 className="md:text-2xl text-center lg:text-left text-lg font-bold mb-3 text-white">
            Opening Hours
          </h1>
          {OpeningTime.map((timing, index) => (
            <div
              key={index}
              className="flex px-10 md:px-40 lg:px-0 text-sm md:text-base justify-between items-center space-y-2"
            >
              <p>{timing.day}</p>
              <p>{timing.time}</p>
            </div>
          ))}
        </div>

        <div className="lg:max-w-[333px] mt-5 md:mt-8 lg:mt-0">
          <h1 className="lg:text-2xl text-lg text-center lg:text-left font-bold mb-3">
            Subscribe
          </h1>
          <p className="text-[#ABA59F] md:mb-10 mb-3 text-sm md:text-base text-center lg:text-left">
            Subscribe to take advantage of our campaigns and gift certificates.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-[#ABA59F] w-full outline-none bg-black py-3 px-2"
            />
            <button className="bg-[#91765A] hover:bg-[#91765A]/90 hover-transition absolute right-0 px-4 py-3 my-1 mx-1 text-xs font-bold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <hr className="md:mt-10 mt-5 opacity-15" />
      <p className="mt-5 text-xs text-[#91765A]">
        © {new Date().getFullYear()} Barber Shop. All rights reserved.
      </p>
    </div>
  );
}
