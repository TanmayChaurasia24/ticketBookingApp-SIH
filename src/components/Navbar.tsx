import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='flex justify-between p-7'>
            <div className='text-white'>
                chatapp
            </div>
            <div>
                <ul className='flex text-white gap-4'>
                    <li>signup</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar
