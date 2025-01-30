import React from 'react'

function LandingPage() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center">
    {/* Navbar */}
    <nav className="w-full flex justify-between items-center px-10 py-5 text-lg">
      <h1 className="text-orange-500 text-2xl font-bold">GREENBITE</h1>
      <ul className="flex space-x-10">
        <li className="text-orange-500 cursor-pointer">Homepage</li>
        <li className="cursor-pointer">Foods</li>
        <li className="cursor-pointer">Today Offers</li>
        <li className="cursor-pointer">Contact us</li>
        <li className="cursor-pointer">About us</li>
      </ul>
    </nav>

    {/* Main Section */}
    <div className="flex-grow flex flex-col justify-center items-center relative">
      {/* Food Items */}
      <img src="/cb.png" className="absolute " alt="Pizza" />
      <img src="/kashmir.jpg" className="absolute " alt="Burger" />
      <img src="/kashmir.jpg" className="absolute " alt="Waffle" />
      <img src="/kashmir.jpg" className="absolute " alt="Biriyani" />

      {/* Centered Biriyani */}
      <h2 className="text-gray-500 text-5xl font-bold">బిర్యానీ</h2>
      <h1 className="text-orange-500 text-6xl font-bold">Biriyani</h1>
      <p className="text-gray-300 mt-3">Made by Chicken, Rice, and Spices</p>
      <img
        src="/kashmir.jpg"
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