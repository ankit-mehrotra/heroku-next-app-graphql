import React, { useEffect, useState } from 'react'

const DashBoard = () => {
    const[isLoading, setLoading] = useState(true);
    const[data, setData] = useState(null);

    useEffect(() => {
      async function getDashBoardData(){
          const response = await fetch('http://localhost:4000/dashboard');
          const data = await response.json();
          setData(data);
          setLoading(false);
      }
      getDashBoardData();
    },[]);
    if(isLoading){
        return <h3>Loading..</h3>
    }
    return (
        <div>
            <h1>DashBoard Data</h1>
            <h3>Posts: {data.posts}</h3>
            <h3>Likes: {data.likes}</h3>
            <h3>Followers: {data.followers}</h3>
            <h3>Following: {data.following}</h3>
        </div>
    )
}

export default DashBoard
