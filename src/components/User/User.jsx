import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const { userId } = useParams();
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg')`,
      }}
    ></section>
  );
}

export default User