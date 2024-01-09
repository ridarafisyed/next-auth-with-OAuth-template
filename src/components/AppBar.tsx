import React from 'react'
import Link from 'next/link'
import SigninButton from './SigninButton'

const AppBar = () => {
  return (
      <nav className='flex flex-1 justify-between  px-8 py-4'>
          <div>
              <Link href="/">AUTH - APP</Link>
          </div>
          <div>
              <SigninButton/>
          </div>
    </nav>
  )
}

export default AppBar