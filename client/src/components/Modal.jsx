import React, { useEffect, useState } from 'react'
import donation from '../images/donation.jpg'
import Sentiment from 'sentiment'

import { scaleScore } from '../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
  const { name, quality, quantity, phone, location, description, date, postype } = props.postdata
  const d = new Date(date);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'scroll';
    }
  })

  var sentiment = new Sentiment();
  const [comment, setComment] = useState('')
  var result = comment ?scaleScore(sentiment.analyze(comment).score):0
  console.log(result)


  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleClick = async () => {
    if(comment){
      const res = await fetch('/post-comment', {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, score:result })
      })

      const test = await res.json()
      if(res.ok){
        alert(test)
      }
    }
    setComment('');
  }

  const notify = async() => {
    const res = await fetch('/api/endpoint',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name,phone,postype
        })
    })
    .then(response => {
        if(response.status === 408){
            alert('LogIn required')
        }else if(response.ok){
            alert(`${postype} made successfully!`)
        }

    })
    .catch(err => {
        alert(err.message)
    })
}

  return (
    <>
      <section className="modal">
        <div className="container-modal">
          <div className="close-modal" onClick={props.close}><FontAwesomeIcon icon={faX} /></div>
          <div className="modal-heading">
            <h2>Donated By:- {name}</h2>
          </div>

          <div className="modal-main-content-container">
            <div className="left-modal-content">
              <img src={donation} alt="" />

              <div className='date-time-content'>
                <span>{d.toLocaleTimeString()},</span>
                <span>{d.toLocaleDateString()}</span>
              </div>

              <div>
                <h5>quality</h5>
                <span>{quality}</span>
              </div>

              <div>
                <h5>quantity</h5>
                <span>{quantity}</span>
              </div>
            </div>
            
            <div className="right-modal-content">
              <div>
                <h4>Name</h4>
                <span>{name}</span>
              </div>

              <div>
                <h4>Phone</h4>
                <span>{phone}</span>
              </div>

              <div>
                <h4>Location</h4>
                <span>{location}</span>
              </div>

              <div>
                <h4>Description</h4>
                <span>{description}</span>
              </div>
            </div>
          </div>
          {/* <button className="comment-section" >Comments</button> */}

          <div className="comment-container">
            <span className="comment-icon"><FontAwesomeIcon icon={faPaperPlane} onClick={handleClick}/></span>
            <input
              type="text"
              placeholder='Comment'
              name='comment'
              value={comment}
              onChange={handleChange}
            />
          </div>
          <button className="donate-modal-btn" onClick={notify}>{postype==='Donate'? <p>Request</p> : <p>Donate</p>}</button>
        </div>
      </section>
    </>
  )
}

export default Modal