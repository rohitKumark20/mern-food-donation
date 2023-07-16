import React, { useState, useEffect } from 'react'
import DonorCard from './DonorCard';

const DonorList = () => {

  const [donor, setDonor] = useState([]);

  const getDonor = async () => {
    const data = await fetch('/get-donor-list/');
    const res = await data.json();
    setDonor(res);
  }

  useEffect(() => {
    getDonor();
  }, [])

  return (
    <>
      <section className='donor-list-section'>
        <div className='donor-list-header-part'><h1>Donors</h1></div>
        <div className="donor-list-container">
          {
            donor.map((currDonor) => {
              return (<div key={currDonor._id}>
                {<DonorCard data={currDonor} />}
              </div>
              )
            })
          }

        </div>
      </section>
    </>
  )
}

export default DonorList

