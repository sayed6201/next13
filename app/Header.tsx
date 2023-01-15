import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='p-5 bg-blue-500 sticky top-0 z-50'>
        <div className='flex justify-between'>
            <p className='text-dark font-bold text-2xl'>
                <Link className='bg-white p-2 rounded-lg elevation-10 hover:bg-gray-500 transition duration-1000' href={'/'}>
                    Home
                </Link>
            </p>

            <div>
            <Link className='bg-green-500 p-2 rounded-lg elevation-10 hover:bg-gray-500 transition duration-1000 shadow-lg' href={'/todos/'}>
                    TODO
            </Link>
            </div>
        </div>
    </header>
  )
}

export default Header