import React from "react";

const Routine = () => {
  return (
    <section className="w-full h-[auto] lg:h-[580px] lg:flex mx-auto lg:flex-row-reverse lg:bg-[url(https://cdn.shopify.com/s/files/1/0637/6194/0660/files/Group_1000007430.png?v=1746796173)] bg-cover bg-center">
      <div className="w-full lg:w-[50%] overflow-hidden lg:hidden">
        <img
          className=""
          src="https://cdn.shopify.com/s/files/1/0637/6194/0660/files/image_319.png?v=1746792738"
          alt=""
        />
      </div>
      <div className="w-full lg:w-[50%] p-10 md:p-15 md:mx-auto lg:py-10 text-center text-white lg:text-black my-auto  absolute top-40 md:top-80 lg:top-36 lg:left-20 lg:float-left bg-trasparent">
        <div className="flex flex-col gap-2">
          <p className="text-3xl md:text-4xl font-md mb-[-10px]">Skincare</p>
          <h1 className="text-4xl lg:text-5xl w-[100%] text-center font-bold leading-14 tracking-tight ">
            Routine Finder
          </h1>

          <p className="text-2xl md:text-md lg:text-lg  font-bold">
            Let us Help you know your Skin Better
          </p>
          <p className="text-sm lg:text-md">
            Asnwer this short 2 min quiz to understand your skin better and
            reach your grooming goals faster.
          </p>
          <button className="bg-[#00048a] w-[90%] md:w-[80%] lg:w[70%] lg:text-white py-2 px-4 mx-auto font-semibold hover:scale-[1.04] duration-100 ease-in-out">
            <a href="">Take The Quiz</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Routine;
