import React from "react";

const Routine = () => {
  return (
    <section className="w-full h-[580px] max-w-[1200px] lg:flex h-full mx-auto bg-black lg:bg-[#BDBDBD] lg:flex-row-reverse">
      <div className="w-full lg:w-[50%] overflow-hidden">
        <img
          className=""
          src="https://cdn.shopify.com/s/files/1/0637/6194/0660/files/image_319.png?v=1746792738"
          alt=""
        />
      </div>
      <div className="w-full lg:w-[50%] p-10 md:p-15 md:mx-auto lg:py-10 text-center text-white my-auto bg-transparent absolute top-20 lg:static">
        <div className="flex flex-col gap-3">
          <p className="text-2xl md:text-xl font-md mb-[-10px]">Skincare</p>
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
          <button className="bg-[#00048a] w-[90%] md:w-[80%] lg:w[70%] py-2 px-4 mx-auto font-semibold hover:scale-[1.04] duration-100 ease-in-out">
            <a href="https://www.reginaldmen.com/?utm_source=Quiz&utm_medium=home_direct&utm_campaign=SkinTest#quiz-gWH2J3">
              Take The Quiz
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Routine;
