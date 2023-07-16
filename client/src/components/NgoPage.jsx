import React, { useEffect, useState } from 'react'
import './donor.css'

import Card from './Card'
import { useParams } from 'react-router-dom'

const DonorPage = () => {

    const [data, setData] = useState([]);
    const { id } = useParams();

    const getNgo = async () => {
        try {
            const response = await fetch('/get-ngo');
            const res = await response.json();
            setData(res);
        } catch (error) {
            console.error('Error fetching donor data:', error);
        }
    };

    useEffect(() => {
        getNgo();
    }, []);

    const currId = data.find((ngo) => ngo._id === id);

    if (!currId) {
        return <div style={{marginTop:"50px",fontSize:"50px"}}>Loading...</div>;
    }

    const {name,email,phone,totalScore,} = currId;
    return (
        <>
            <div className="donor-state-main-container">
                <div className="donor-state-information">
                    <h3>Organization Name: {currId.name}</h3>
                    <button className='mobile-btn-to-donor'><a href="/food-donation">Back to donations</a></button>
                </div>
                <div className="right-part-container">
                    <h1>Current Donations:</h1>
                    <button className='web-btn-to-donor'><a href="/donor-list">Back to donations</a></button>
                </div>

                <div className="donor-state-container">
                    {/* <div className="donor-card"><Card /></div>
                        <div className="donor-card"><Card /></div>
                        <div className="donor-card"><Card /></div>
                        <div className="donor-card"><Card /></div>
                        <div className="donor-card"><Card /></div>
                        <div className="donor-card"><Card /></div>
                        <div className="donor-card"><Card /></div> */}


                </div>

            </div>
        </>
    )
}

export default DonorPage