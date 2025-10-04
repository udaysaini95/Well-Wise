import React from 'react'
import { useParams } from 'react-router-dom'
import wellImg from '../../assets/Images/wellAi.jpeg'
function User() {
  const { userId } = useParams();
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${wellImg})`,
      }}
    ></section>
  );
}

export default User