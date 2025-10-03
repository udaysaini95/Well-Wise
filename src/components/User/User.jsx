import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const { userId } = useParams();
  return (
    <div className='bg-orange-500 text-3xl text-black text-center py-5' >User:{ userId}</div>
  )
}

export default User