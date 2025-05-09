import React from "react";

const Community = () => {
  return (
    <section className="w-full lg:w-[1200px] lg:flex h-full mx-auto bg-black ">
      <div className="w-full lg:w-[45%] overflow-hidden">
        <img
          className="scale-[1.2]"
          src="https://cdn.shopify.com/s/files/1/0637/6194/0660/files/Group_1000007421.png?v=1746508555"
          alt=""
        />
      </div>
      <div className="w-full lg:w-[55%] p-5 md:p-10 md:mx-auto lg:py-10 lg:pr-20 text-center text-white">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl lg:text-6xl w-[100%] text-center font-bold leading-14 uppercase tracking-tight mb-[-10px]">
            Join The Community
          </h1>
          <p className="text-sm md:text-xl">
            For those who believe that self-care isn't just a trend, it's a part
            of becoming a Man
          </p>
          <ul className="flex flex-row flex-wrap gap-2 align-center justify-center text-[10px] md:text-md lg:text-lg md:text-lg font-semibold">
            <li className="py-2 px-4 bg-[#454545] rounded-sm hover:bg-gray-600">
              Free Trials
            </li>
            <li className="py-2 px-4 bg-[#454545] rounded-sm hover:bg-gray-600">
              Behind The Scenes
            </li>
            <li className="py-2 px-4 bg-[#454545] rounded-sm hover:bg-gray-600">
              Grooming Guides
            </li>
            <li className="py-2 px-4 bg-[#454545] rounded-sm hover:bg-gray-600">
              Expert Skincare Solutions
            </li>
            <li className="py-2 px-4 bg-[#454545] rounded-sm hover:bg-gray-600">
              Early Access To Discounts
            </li>
          </ul>
          <p className="text-[10px] md:text-lg lg:text-lg uppercase">
            A Lot More....
          </p>
          <button className="bg-[#00048a] w-[90%] md:w-[80%] lg:w[70%] py-2 px-4 mx-auto font-semibold hover:scale-[1.04] duration-100 ease-in-out">
            <a href="https://whatsapp.com/channel/0029Vax73bD1XquWwcbc2s1z">
              Joint The Community
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
