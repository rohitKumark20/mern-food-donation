import React, { useEffect,useState } from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const DonorCard = (props) => {
    const {name,email,phone,totalScore,count,_id,posts} = props.data
    const [userDonation,setUserDonation] = useState({})

    // const getDonorPost = async() =>{
    //   const data = await fetch(`get-donor-donation?name=${encodeURIComponent(name)}`,{
    //     method:'GET',
    //     headers:{
    //       "Content-Type":"application/json"
    //     }
    //   })

    //   const res = await data.json();
    //   setUserDonation(res);
    // }

    // useEffect(()=>{
    //   getDonorPost()
    // },[name])

    let rating = (totalScore/count).toFixed(1)

  return (
    <>
      {/* <a href="/contact" className='link-to-donor'> */}
        <div className="donor-card">
          <div className="donor-card-container">
            {
              isNaN(rating) ? null:<div className="donor-card-ratings">
              <span>{rating}</span>
            </div>
            }

            <div className="donor-card-header">
              <h3>{name}</h3>
            </div>

            <div className='donor-info'>
              <span><FontAwesomeIcon icon={faLocationDot} /></span>
              <p>{posts.length > 0 ? posts[0].location : <>N/A</>}</p>
            </div>

            <div className='donor-info'>
              <span><FontAwesomeIcon icon={faEnvelope} /></span>
              <a href="mailto:abc@example.com">{email}</a>
            </div>

            <div className='donor-info'>
              <span><FontAwesomeIcon icon={faPhone} /></span>
              <a href="tel:8732322243">{phone}</a>
            </div>

            <a href={`/donor-page/${_id}`} className='explore-donor'>Make donation</a>
          </div>
        </div>
      {/* </a> */}
    </>
  )
}

export default DonorCard