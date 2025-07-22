import React from 'react';

const Contact = () => {
  return (
    <div className="w-full container my-10">
      {/* Left Side - Map */}
      <p className='font-bold text-3xl heading'> Visit Our Store</p>
      <div className='flex md:flex-row flex-col gap-3 mt-3'>



      {/* Right Side - Contact Info */}
      <div className="w-full md:w-[35%] flex flex-col py-2 px-4 rounded-lg shadow-sm">
        <h1 className='text-3xl font-bold heading'>Contact Information</h1>
       <div className="flex flex-col gap-4 mt-[20px]">
  {/* Address */}
  <div className="flex items-start gap-2">
    <h2 className="text-base font-bold min-w-[80px]">Address:</h2>
    <p className="text-sm">
      Safari Mall Bahria Town<br />
      Lahore, Punjab, Pakistan
    </p>
  </div>

  {/* Phone */}
  <div className="flex items-start gap-2">
    <h2 className="text-base font-bold min-w-[80px]">Phone:</h2>
    <p className="text-sm">+92 300 1234567</p>
  </div>

  {/* Email */}
  <div className="flex items-start gap-2">
    <h2 className="text-base font-bold min-w-[80px]">Email:</h2>
    <p className="text-sm">info@example.com</p>
  </div>
</div>

      </div>

            <div className="w-full md:w-[60%] h-[250px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.97653341082!2d74.19230060904927!3d31.387210574167877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffeab665ccdf%3A0x1f2db8a6c43484d3!2sSafari%20Mall!5e0!3m2!1sen!2s!4v1752789124121!5m2!1sen!2s"
          width="100%"
          height="100%"
          className="rounded-lg border-2 border-gray-300"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default Contact;
