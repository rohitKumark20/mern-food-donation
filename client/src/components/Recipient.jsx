import React, { useState, useEffect } from 'react'
import Card from './Card'
import DonorCard from './DonorCard';

const Recipient = () => {

  const [request, setRequest] = useState([]);
  const [currentRequest, setCurrentRequest] = useState([])
  const [pastRequest, setPastRequest] = useState([])
  const [user, setUser] = useState([])

  const getRequest = async () => {
    const res = await fetch(`/access-food-requests`);
    const data = await res.json();
    setRequest(data);
  }

  const getNgo = async () => {
    const res = await fetch('/get-ngos');
    const data = await res.json();

    setUser(data);
  }

  useEffect(() => {
    getNgo()
    getRequest()

  }, [])

  useEffect(() => {
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setDate(twentyFourHoursAgo.getDate() - 1);

    const updatedArray = request.filter((element) => {
      const elementDate = new Date(element.date); // Assuming the date is stored in the 'date' property of each element
      return elementDate > twentyFourHoursAgo;
    });

    const Array = request.filter((element) => {
      const elementDate = new Date(element.date); // Assuming the date is stored in the 'date' property of each element
      return elementDate < twentyFourHoursAgo;
    });

    setCurrentRequest(updatedArray)
    setPastRequest(Array)
  },[request])
  return (
    <>
      <div className='empty-list'>
        No Request Yet!
      </div>

      <div className="donation-content-lists">
        <div className="top-donors">
          <div className="donor-header-top">
            <h1>Top NGO's</h1>

            <div className="top-donors-card-list">
              {
                user.map((currPost) => {
                  return (<div key={currPost._id}><DonorCard data={currPost} /></div>)
                })
              }
            </div>
            <a href="/ngo-organization" className='link-to-donor'>Go to NGO's page</a>
          </div>
        </div>


        <div className="request-header">
          <h2>Current Requests</h2>
        </div>
        <div className="donation-content-container">

          {
            currentRequest.length !== 0 ? currentRequest.map((currPost) => {
              return (<div key={currPost._id}>
                <Card data={currPost} />
              </div>
              )
            }) : <div style={{width:'50%', margin:'auto', textAlign:'center', fontSize:'30px'}}>No Current Requests</div>
          }
        </div>

        <div className="request-header">
          <h2>Past Requests</h2>
        </div>
        <div className="donation-content-container">

          {
            pastRequest.map((currPost) => {
              return (<div key={currPost._id}>
                <Card data={currPost} />
              </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Recipient