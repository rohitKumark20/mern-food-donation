import React, { useEffect, useState } from 'react'
import './donor.css'

import Card from './Card'
import { useParams } from 'react-router-dom'

const DonorPage = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    const getDonor = async () => {
        try {
            const response = await fetch(`/get-donor/${id}/`);
            const res = await response.json();
            setData(res);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching donor data:', error);
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        getDonor();
        console.log(data,'Rohits data')
    }, []);

    const { name, email, phone, totalScore, posts, count } = data;
    console.log(posts)
    return (
        <>
            {
                loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error fetching data. Please try again later</p>
                ) : Object.keys(data).length > 0 ? (
                    <div className="donor-state-main-container">
                        <div className="donor-state-information">
                            <div className="donor-info-page-details">
                                <h3>Organization Name: {name}</h3>
                                <div>
                                    <h3>Contact Details</h3>
                                    <span>Email: {email}</span>
                                    <span>Phone: {phone}</span>
                                </div>

                                <div>
                                    <span>rating: {(totalScore / count).toFixed(1)}</span>
                                </div>

                                <div>
                                    <span>Total Donations: {posts.length > 0 ? posts.length : 0}</span>
                                </div>

                                <div>
                                    <span>Location: {posts.length > 0 ?posts[0].location : <>data not available</>}</span>
                                </div>
                            </div>
                            <button className='mobile-btn-to-donor'><a href="/food-donation">Back to donations</a></button>
                        </div>
                        <div className="right-part-container">
                            <h1>Current Donations:</h1>
                            <button className='web-btn-to-donor'><a href="/donor-list">Back to donations</a></button>
                        </div>

                        <div className="donor-state-container">
                            {
                                posts.length != 0 ? posts.map((currPost) => {
                                    return (
                                        <div className="donor-card" key={currPost._id}><Card data={currPost} /></div>
                                    )
                                }): <p>No Posts Available</p>
                            }

                        </div>

                    </div>
                ) : <p>Data Not available</p>
            }
        </>
    )
}

export default DonorPage