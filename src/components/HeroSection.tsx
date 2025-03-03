'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const images = [
  '/image/Exemple5.png',
  '/image/pexels-davidmcbee-730547.jpg',
  '/image/pexels-enginakyurt-10149615.jpg',
  '/image/pexels-karolina-grabowska-4386370.jpg',
  '/image/pexels-sash2s-16886249.jpg',
]

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // change image every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl transition-transform duration-500 hover:scale-105">
        <Image
         src={"/image/Tarhouni EXCHANGE - WHITE png.png"}
         alt=''
         width={300}
         height={300}
        />
        </h2>
        <p className="mt-4 max-w-lg text-white/90 text-base md:mt-6 md:text-lg md:leading-relaxed">
        Bureau de change à Teboulba agréé par la Banque Centrale de Tunisie

        </p>
        <div className="mt-8">
          <a
            href="#Convert"
            className="inline-block rounded-full bg-yellow-500 px-8 py-3 text-sm font-medium text-white shadow-lg transition duration-300 ease-in-out hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400"
          >
            Change Votre Monais
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
