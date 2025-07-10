import React from 'react';

const Boxes = () => {
  return (
    <div className="flex h-screen w-full container gap-4">
      {/* Left 50% */}
      <div className="w-1/2 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center">
        <div className=" w-full h-full rounded-xl text-white text-xl flex items-center justify-center">
          <img src="https://blingspot.pk/cdn/shop/files/10_251a393c-a102-4265-862d-2fa087c86ce6.png?v=1751888367&width=800" alt="" className='w-full h-full'/>
        </div>
      </div>

      {/* Right 50% */}
      <div className="w-1/2 flex">
        {/* Left side: two stacked boxes */}
        <div className="flex flex-col gap-4 w-1/2">
          <div className=" h-1/2 rounded-xl shadow-lg text-white text-center p-4 flex items-center justify-center">
            <img src="https://blingspot.pk/cdn/shop/files/13_8caeba5f-92e6-4963-9216-8ffa6cb077b2.png?v=1751888377&width=400" alt="" className='w-full h-full' />
          </div>
          <div className="bg-green-400 h-1/2 rounded-xl shadow-lg text-white text-center p-4 flex items-center justify-center">
            Bottom Box
          </div>
        </div>

        {/* Right side: single box */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="bg-purple-500 w-3/4 h-full rounded-xl shadow-lg text-white text-center p-4 flex items-center justify-center">
            Right Side Box
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
