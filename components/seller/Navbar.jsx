import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'

const Navbar = () => {
  const { router } = useAppContext()

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
      {/* Logo */}
      <Image 
        onClick={() => router.push('/')} 
        className='w-28 lg:w-32 cursor-pointer' 
        src={assets.logo} 
        alt="logo" 
      />

      {/* Iconiță user */}
      <Image
        onClick={() => router.push('/SignUpLogin')}  // 👉 duce la pagina de Account/Login
        src={assets.user_icon}
        alt="user icon"
        className="w-8 h-8 cursor-pointer"
      />
    </div>
  )
}

export default Navbar
