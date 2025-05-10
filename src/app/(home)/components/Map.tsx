import Image from 'next/image'
import React from 'react'

const Map = () => {
  return (
    <div>
        <Image
          src="/Utils/map.png"
          alt="map"
          width={1000}
          height={1000}
          className="w-full h-auto"/>
    </div>
  )
}

export default Map