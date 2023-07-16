import React, { useEffect, useState } from 'react'
import DonorCard from './DonorCard';

const NgoList = () => {

    const [user,setUser] = useState([])

    const getNgo = async() =>{
      const res = await fetch('/get-ngos');
      const data = await res.json();

      setUser(data);
    }

    useEffect(() => {
      getNgo()
    },[])
  return (
    <>
    <section className='donor-list-section'>
        <div className='donor-list-header-part'><h1>NGO's</h1></div>
        <div className="donor-list-container">
         {
          user.map((currPost)=>{
            return (
              <div key={currPost._id}>
                <DonorCard data = {currPost}/>
              </div>
            )
          })
         }
        </div>
      </section>
    </>
  )
}

export default NgoList