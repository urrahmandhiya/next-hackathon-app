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
            mx-auto max-w-full
            px-6 lg:px-20 3xl:px-6
            relative z-50 py-5 bg-asparagus'
        >
          <Link href={'/'}
          >
            <Image
                src={'/temp-logo.svg'}
                alt='logo' width={100}
                height={10}
            />
          </Link>
          <ul className='hidden h-full gap-12 lg:flex'>
              <Link className='flex items-center justify-center 
              text-lg text-white font-light pb-1.5 cursor-pointer
              transition-all hover:font-bold'
                  href={'/'} key={'home'}
              >
                  Home
              </Link>
              <Link className='flex items-center justify-center 
              text-lg text-white font-light pb-1.5 cursor-pointer
              transition-all hover:font-bold'
                  href={'/attraction'} key={'attraction'}
              >
                  Attraction
              </Link>
              <Link className='flex items-center justify-center 
              text-lg text-white font-light pb-1.5 cursor-pointer
              transition-all hover:font-bold'
                  href={'/blog'} key={'blog'}
              >
                  Blog
              </Link>
          </ul>
          <div className='lg:flex lg:items-center lg:justify-center hidden'>
            <Link href={'/auth'}>
                <Button
                    type='button'
                    title='Log In'
                    icon='/user.svg'
                    variant='btn_signup'
                />  
            </Link>
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
              bg-olivine text-white
              flex flex-col items-center lg:hidden'>
                  <Link className='block py-4 text-lg font-light 
                  cursor-pointer transition-all hover:font-bold'
                      href={'/'}
                      key={'home'}>
                      Home
                  </Link>
                  <Link className='block py-4 text-lg font-light 
                  cursor-pointer transition-all hover:font-bold'
                      href={'/attraction'}
                      key={'attraction'}>
                      Attraction
                  </Link>
                  <Link className='block py-4 text-lg font-light 
                  cursor-pointer transition-all hover:font-bold'
                      href={'/blog'}
                      key={'blog'}>
                      Blog
                  </Link>
              </ul>
          )}
    </nav>
  )
}

export default NavBar