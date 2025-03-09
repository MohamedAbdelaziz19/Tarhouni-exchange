'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <header className="bg-white navbar-shadow fixed w-full z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="#" className="flex items-center">
              
              <Image
                src="/image/Tarhouni Logo Text PNG.png"
                alt="Tarhouni Logo"
                width={140}
                height={140}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-base font-medium">
              <li>
                <Link 
                  href="#about"
                  className="text-gray-700 transition duration-200 ease-in-out hover:text-yellow-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#service"
                  className="text-gray-700 transition duration-200 ease-in-out hover:text-yellow-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="#currencytable"
                  className="text-gray-700 transition duration-200 ease-in-out hover:text-yellow-500"
                >
                  Cours de Change
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact"
                  className="text-gray-700 transition duration-200 ease-in-out hover:text-yellow-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Side Icons & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Image
              src="/image/Logo in gold.png"
              alt="Logo in gold"
              width={30}
              height={30}
              className="object-contain"
            />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-md bg-gray-100 p-2 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                {isOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden animate-slideDown">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white navbar-shadow">
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-200 ease-in-out hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#service"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-200 ease-in-out hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#currencytable"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-200 ease-in-out hover:bg-gray-100"
            >
              Cours de Change
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-200 ease-in-out hover:bg-gray-100"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
