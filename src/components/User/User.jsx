import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  let {userid} =   useParams()
  return (
    <div className='bg-slate-500 p-5 text-3xl text-white text-center font-bold'>
      user:{userid}
    </div>
  )
}

export default User
