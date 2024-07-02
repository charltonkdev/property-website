import React from 'react'

export const Header = () => {
  return (
    <div className="flex w-full px-24 py-14 relative justify-between">
        <div className="flex">
            <a href="/" className="font-bold uppercase">Property Estate</a>
        </div>
        <div className="block">
            <p>Menu</p>
        </div>
    </div>
  )
}
