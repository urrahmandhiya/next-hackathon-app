'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'

const NavBar = () => {
    const [menu, setMenu] = useState(false)
    const menuToggle = () => {
        return setMenu(!menu)
    }
    
  return (
      <nav className='flex items-center justify-between 
            mx-auto max-w-[1440px]
            px-6 lg:px-20 3xl:px-0
            relative z-50 py-5'
        >
          <Link href={'/'}
          >
            <Image
                src={'/leuwimalang-logo.svg'}
                alt='logo' width={150}
                height={60}
            />
          </Link>
          <ul className='hidden h-full gap-12 lg:flex'>
              <Link className='flex items-center justify-center 
              text-lg text-gray-50 font-light pb-1.5 cursor-pointer
              transition-all hover:font-bold'
                  href={'/'} key={'home'}
              >
                  Home
              </Link>
              <Link className='flex items-center justify-center 
              text-lg text-gray-50 font-light pb-1.5 cursor-pointer
              transition-all hover:font-bold'
                  href={'/'} key={'about'}
              >
                  About
              </Link>
              <Link className='flex items-center justify-center 
              text-lg text-gray-50 font-light pb-1.5 cursor-pointer
              transition-all hover:font-bold'
                  href={'/'} key={'form'}
              >
                  Form
              </Link>
          </ul>
          <div className='lg:flex lg:items-center lg:justify-center hidden'>
            <Button
                type='button'
                title='Test'
                icon='/user.svg'
                variant='btn_dark_green'
            />  
          </div>
          <Image
              src={'/menu.svg'}
              alt='menu'
              width={32}
              height={32}
              className='inline-block cursor-pointer lg:hidden'
              onClick={menuToggle}
          />
          {/* DONT FORGET TO IMPROVE. THIS PREFERABLY 80% WIDTH ASIDE MENU WITH RIGHT TO LEFT ANIMATION */}
          {/* Dropdown Menu (Mobile) */}
          {menu && (
              <ul className='absolute top-full left-0 w-full 
              bg-gray-800 text-white
              flex flex-col items-center lg:hidden'>
                  <Link className='block py-4 text-lg font-light 
                  cursor-pointer transition-all hover:font-bold'
                      href={'/'}
                      key={'home'}>
                      Home
                  </Link>
                  <Link className='block py-4 text-lg font-light 
                  cursor-pointer transition-all hover:font-bold'
                      href={'/about'}
                      key={'about'}>
                      About
                  </Link>
                  <Link className='block py-4 text-lg font-light 
                  cursor-pointer transition-all hover:font-bold'
                      href={'/form'}
                      key={'form'}>
                      Form
                  </Link>
              </ul>
          )}
    </nav>
  )
}

export default NavBar