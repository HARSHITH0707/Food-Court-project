import React from 'react'

function LandingPage() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center">
    {/* Navbar */}
    <h1 style={{  color: "#ff3d00" }} className="text-orange-500 text-[50px] font-bold text-center mt-10">Food Court BVRIT</h1>
      
      <div  className="flex space-x-10 text-[20px] drop-shadow-xl p-[60px] ml-[50px] text-center justify-between ">
        <div className="hover:text-orange-600 cursor-pointer mr-[100px]">Homepage</div>
        <div className="hover:text-orange-600 cursor-pointer mr-[100px]">Foods</div>
        <div className="hover:text-orange-600 cursor-pointer mr-[100px]">Today Offers</div>
        <div className="hover:text-orange-600 cursor-pointer mr-[100px]">Contact us</div>
        <div className="hover:text-orange-600 cursor-pointer mr-[100px]">About us</div>
      </div>

    {/* Main Section */}
    <div className="flex-grow flex flex-col justify-center items-center relative">
      {/* Food Items */}
      {/* <img src="/cb.png" className="absolute " alt="Biriyani" />
      <img src="/mb.png" className="absolute " alt="Burger" />
      <img src="/pizza.png" className="absolute " alt="Pizza" />
      <img src="/waffles.png" className="absolute " alt="Waffle" /> */}

      {/* Centered Biriyani */}
      <h2 style={{  color: "#808080" }} className=" h-15 text-7xl font-bold drop-shadow-xl opacity-[.67]">బిర్యానీ</h2>
      <h1 style={{  color: "#ff3d00" }} className=" text-6xl font-bold drop-shadow-l -mt-3">Biriyani</h1>
      <p className="text-gray-300 mt-3">Made by Chicken, Rice, and Spices</p>
      <img
        src="/cb.png"
        className="w-52 mt-5 rounded-lg shadow-lg"
        alt="Main Biriyani"
      />
    </div>

    {/* Navigation Arrows */}
    <div className="flex space-x-5 mt-5 mb-10">
      <button className="bg-gray-700 p-4 rounded-full">⬅</button>
      <button className="bg-gray-700 p-4 rounded-full">➡</button>
    </div>
  </div>
  )
}

export default LandingPage