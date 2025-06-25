import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <img src={assets.loogoo} className="w-40 sm:w-48 lg:w-56" />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @PromptPixel AI | All right reserved.</p>
      <div className='flex gap-2.5'>
        <img className='cursor-pointer' src={assets.facebook_icon} width={35} />
        <img className='cursor-pointer' src={assets.instagram_icon} width={35} />
        <img className='cursor-pointer' src={assets.twitter_icon} width={35} />
      </div>
    </div>
  )
}

export default Footer