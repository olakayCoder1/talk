import React from 'react'
import { useAuth } from '../hooks/useAuth';

function UnauthenticatedApp() {

    const { login } = useAuth();

  return (
    <div className=' w-full h-screen text-center py-16 lg:pt-20 bg-gray-900 text-gray-50'>
        <h2 className='text-3xl lg:text-5xl font-bold py-4'>Hello friend Join Olakay's family!</h2>
        <p className='text-sm lg:text-base font-bold py-4'>It's time to talk with friend</p>
        <div>
            <button onClick={login} className="px-4 py-2 lg:px-8 lg:py-4 border border-gray-500 text-blue-600 bg-white text-base rounded-md">
                Login with Google
            </button>
        </div>
    </div>
  )
}

export default UnauthenticatedApp
