import React from 'react'

function Globally() {
  return (
    <>
    <div
        id="mainFoodWater"
        className="h-screen w-screen bg-white flex flex-col mt-[20px] mb-[108px] relative "
      >
        <h1 className="text-blac font-bold text-lg pl-4 sm:text-2xl pl-8 md:text-3xl pl-10">
          Work for Everyone
          <span className="text-[#ed9455]"> Globally</span>
        </h1>
        <img className='w-[calc(100% - 200px)] mx-[100px] mt-[50px] ' src="../../public/image-9.png" alt="" />
        <div className=' bg-[#fffbdb] h-[90px] w-[300px] absolute rounded-r-full top-[35%] left-[30px] flex justify-start items-center pl-[10px]'>
          <div className='h-[80px] w-[80px] rounded-full bg-[#ffec9e] flex justify-center items-center'><img className='h-[60px] ' src="../../public/money1.png" alt="" /></div>
          <div className='h-[80px] flex flex-col justify-center items-start pl-[10px] text-l'>
            <p>Monthly</p>
            <p>₹ 20,000 /- donated</p>
          </div>
        </div>
        <div className=' bg-[#fffbdb] h-[90px] w-[300px] absolute rounded-l-full bottom-[0%] right-[30px] flex justify-start items-center pl-[10px]'>
          <div className='h-[80px] w-[80px] rounded-full bg-[#ffec9e] flex justify-center items-center'><img className='h-[60px] ' src="../../public/money1.png" alt="" /></div>
          <div className='h-[80px] flex flex-col justify-center items-start pl-[10px] text-l'>
            <p>Food Package</p>
            <p>₹ 20,000 /- donated</p>
          </div>
        </div>
        <div className=' bg-[#fffbdb] h-[90px] w-[300px] absolute rounded-full top-[45px] right-[25%] flex justify-start items-center pl-[10px]'>
          <div className='h-[80px] w-[80px] rounded-full bg-[#ffec9e] flex justify-center items-center'><img className='h-[60px] ' src="../../public/money1.png" alt="" /></div>
          <div className='h-[80px] flex flex-col justify-center items-start pl-[10px] text-l'>
            <p>Volunteer</p>
            <p>20K + Member</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Globally