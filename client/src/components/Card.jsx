import React, { useState } from 'react'
import donation from '../images/donation.jpg'
import Modal from './Modal';

const Card = (props) => {
    const {name,quality,quantity,location} = props.data

    const [click,setClick] = useState(false);
    const closeModal = () => {
        return setClick(false);
    }

  return (
    <>
        <div className="card-container">
            <img src={donation} alt="" />
            <h3>{name}</h3>
            <div>
                <h4>Quality</h4>
                <span>{quality}</span>
            </div>
            <div>
                <h4>Quantity</h4>
                <span>{quantity}</span>
            </div>
            <div>
                <h4>Location</h4>
                <span>{location}</span>
            </div>
            <button className='card-btn' onClick={()=>setClick(true)}>Know More</button>
        </div>

        {
            click && <Modal close={closeModal} postdata = {props.data}/>
        }
    </>
  )
}

export default Card