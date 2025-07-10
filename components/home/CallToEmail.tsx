"use client"
import React, {useState} from 'react'

const CallToEmail = ({heading, desc, btn}:any) => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);


  return (
<div className="w-full flex flex-col items-center justify-center space-y-4 p-6 border-t-[1px] borer-[#b3b2af] mt-[30px]" data-aos="zoom-in">
  <h1 className="text-3xl font-bold text-center text-gray-800">
  Stay informed
  </h1>
  <p className=" text-center textColor max-w-2xl">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, culpa.
  </p>

  <form className="flex sm:flex-row flex-col items-center justify-center sm:space-x-3">
    <input
      type="email"
      placeholder="Email address"
      value={email}
        onChange={(e) => setEmail(e.target.value)}
      className="sm:w-80 h-12 px-4 text-lg border border-[#231f20] rounded-md focus:outline-none focus:ring-1 focus:ring-[#231f20] w-[80%]"
    />
    <button
        type="submit"
        className="bg-[#231f20] text-white sm:w-[210px] sm:mt-0 mt-8 w-[80%] h-12 text-lg rounded-md transition duration-300"
        disabled={loading}
      >
        Subscribe Now
      </button>
  </form>
</div>
  )
}

export default CallToEmail
