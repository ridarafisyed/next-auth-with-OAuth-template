'use client'
import React from 'react'
import {signIn, signOut, useSession } from 'next-auth/react'
const SigninButton = () => {
    const { data: session } = useSession()
    if (session && session.user) {
        return (
            <div  className='flex flex-1 space-x-4'>
                <p>{ session.user.name }</p>
                <button onClick={()=>signOut()}>Sign Out</button>
            </div>
        )
    }
    return (
        <button onClick={()=>signIn()}>Sign In</button>
    )
}

export default SigninButton