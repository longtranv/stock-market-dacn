import React from 'react';
import {BsDiscord, BsReddit, BsFacebook, BsYoutube, BsInstagram} from 'react-icons/bs';

const Footer = () => {

  const communities = [
    {
      icon: <BsDiscord size={22}/> ,
      url: 'https://discord.com/channels/@me'
    },
    {
      icon: <BsReddit size={22}/> ,
      url: 'https://www.reddit.com/'
    },
    {
      icon: <BsFacebook size={22}/> ,
      url: 'https://www.facebook.com/'
    },
    {
      icon: <BsYoutube size={22}/> ,
      url: 'https://www.youtube.com/'
    },
    {
      icon: <BsInstagram size={22}/> ,
      url: 'https://www.instagram.com/'
    },
  ]
  return (
    <footer className="bg-white border-gray-200 py-6 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        <div className="flex flex-col content-evenly">
          <p className='text-lg font-semibold text-gray-800 mb-2'>Community</p>
          <div className='grid gap-5 grid-cols-4 mt-2'>
            {communities.map((item)=>(
              <a href={item.url} target='_blank'>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='text-lg font-semibold text-gray-800 mb-2'>About us</p>
          <p className='text-sm text-gray-600 mt-2'>About</p>
          <p className='text-sm text-gray-600 mt-2'>Business Contact</p>
          <p className='text-sm text-gray-600 mt-2'>Career</p>
          <p className='text-sm text-gray-600 mt-2'>Annoucements</p>
          <p className='text-sm text-gray-600 mt-2'>News</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-lg font-semibold text-gray-800 mb-2'>Product</p>
          <p className='text-sm text-gray-600 mt-2'>Exchange</p>
          <p className='text-sm text-gray-600 mt-2'>Buy stock</p>
          <p className='text-sm text-gray-600 mt-2'>Trading view</p>
          <p className='text-sm text-gray-600 mt-2'>Pay</p>
          <p className='text-sm text-gray-600 mt-2'>Academy</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-lg font-semibold text-gray-800 mb-2'>Services</p>
          <p className='text-sm text-gray-600 mt-2'>Affiliate</p>
          <p className='text-sm text-gray-600 mt-2'>Refferal</p>
          <p className='text-sm text-gray-600 mt-2'>Historical Market Data</p>
          <p className='text-sm text-gray-600 mt-2'>Labs</p>
          <p className='text-sm text-gray-600 mt-2'>Institional and VIP</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-lg font-semibold text-gray-800 mb-2'>Support</p>
          <p className='text-sm text-gray-600 mt-2'>24/7 Chat Support</p>
          <p className='text-sm text-gray-600 mt-2'>Support Center</p>
          <p className='text-sm text-gray-600 mt-2'>Request a Feature</p>
          <p className='text-sm text-gray-600 mt-2'>Fees</p>
          <p className='text-sm text-gray-600 mt-2'>APIs</p>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-6 text-sm text-gray-600 text-center">
        <p>&copy; {new Date().getFullYear()} Stock Market Pro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
