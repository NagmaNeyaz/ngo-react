import React from "react";

function FoodWater() {
  return (
    <>
      <div
        id="mainFoodWater"
        className="h-screen w-screen bg-white flex flex-col mt-[20px] mb-[108px]"
      >
        <h1 className="text-blac font-bold text-lg pl-4 sm:text-2xl pl-8 md:text-3xl pl-10">
          Driven by Our Mission, We Aim to
          <span className="text-[#ed9455]"> Support Them.</span>
        </h1>
        <div className="bg-[url(../../public/image-11.png)] 
        bg-cover
        bg-center 
        h-screen 
        w-screen 
        flex 
        px-[40px] 
        mt-[40px]">
          <div
            className="h-full w-1/2 bg-red-200 flex
            justify-end
            bg-[url(../../public/image-12.png)]
            bg-cover
            bg-center
            relative"  

          >
            <div className="absolute text-[#303030] top-[50px] right-[-40%] z-99 whitespace-nowrap font-medium  flex justify-center items-start leading-0.8 flex-col">
                <p className="text-7xl ">01 <span className="text-5xl">Food & Water</span>
                </p>
                <img className="w-[200px]" src="../../public/arrow.002.png" alt="" />
            </div>
            <p className="w-1/2 absolute text-[16px] bottom-[25px] right-[25px] text-white text-justify  text-center">Volunteers help bridge gaps by providing additional manpower and enthusiasm, helping NGOs extend their reach and impact within communities. In return, volunteers gain valuable life skills, exposure to different cultures and challenges,</p>
          </div>
          <div className="h-full w-1/2 bg-transparent relative">
            <img
              className="w-[60%] absolute bottom-[70px] right-[35px] "
              src="../../public/image-13.png"
              alt=""
            />
            <div className="absolute text-[#3C716B] bottom-[35%] left-[5px] z-99 whitespace-nowrap font-medium  flex justify-center items-end leading-0.8 flex-col">
                <p className="text-4xl ">02 <span className="text-xl">School & Tution</span>
                </p>
                <img className="w-[200px] rotate-180" src="../../public/arrow.002.png" alt="" />
            </div>
          </div>
        </div>
        <button className="h-[40px] w-[100px] bg-[#3C716B] absolute top-[50%] left-[45%] rounded-[8px] text-white  ">Discover</button>
      </div>
    </>
  );
}

export default FoodWater;
