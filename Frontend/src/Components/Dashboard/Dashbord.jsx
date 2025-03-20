import React from 'react'
import ProtectedRoute from '../auth/ProtectedRoute'
function Dashbord() {
    return (
        <>
            <div className="bg-black h-screen text-white w-full pt-36 px-10 text-center">
                <h1 className=' text-3xl font-semibold h-48 border  border-red-500  '>you are logend in </h1>
                <ProtectedRoute />
            </div>
        </>
    )
}

export default Dashbord