import React, { useEffect } from 'react'

function Github() {

    const [data, setdata] = React.useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/hiteshchoudhary")
            .then((response) => response.json())
            .then((data) => {
                console.log(data) 
                setdata(data)
            }
            )
    },[])
    return (
      <div className="bg-gray-500 text-3xl text-black text-center py-5">
        Github Followers:{data.followers}
        <img src={data.avatar_url} width={300} alt="img" />
      </div>
    );
}

export default Github