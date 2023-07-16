import React, { useEffect, useState } from 'react'
import Card from './Card'
import DonorCard from './DonorCard';

const Donor = () => {
    // getDonations()
    
    const [donation, setDonation] = useState([]);
    const [filteredArray, setFilteredArray] = useState([]);
    const [pastDonation, setPastDonation] = useState([])
    const [donor, setDonor] = useState([]);

    const getDonations = async () => {
        const res = await fetch(`/access-food-donation`);
        const data = await res.json();
        setDonation(data);
    }

    const getDonor = async () => {
        const data = await fetch('/get-donor-list/');
        const res = await data.json();
        setDonor(res);
    }

    useEffect(() => {
        getDonations()
        getDonor();
    }, [])

    useEffect(() => {
        const twentyFourHoursAgo = new Date();
        twentyFourHoursAgo.setDate(twentyFourHoursAgo.getDate() - 1);

        const updatedArray = donation.filter((element) => {
            const elementDate = new Date(element.date); // Assuming the date is stored in the 'date' property of each element
            return elementDate > twentyFourHoursAgo;
        });

        const Array = donation.filter((element) => {
            const elementDate = new Date(element.date); // Assuming the date is stored in the 'date' property of each element
            return elementDate < twentyFourHoursAgo;
        });

        setFilteredArray(updatedArray)
        setPastDonation(Array);
    },[donation])

    return (
        <>
            <div className='empty-list'>
                No Donations Yet!
            </div>

            <div className="donation-content-lists">
                <div className="top-donors">
                    <div className="donor-header-top">
                        <h1>Top Donors</h1>

                        <div className="top-donors-card-list">
                            {
                                donor.map((currPost) => {
                                    return (<div key={currPost._id}><DonorCard data={currPost} /></div>)
                                })
                            }
                        </div>
                        <a href="/donor-list" className='link-to-donor'>Go to donor page</a>
                    </div>
                </div>

                <div className="donor-header-content">
                    <h2>Current Donations</h2>
                </div>
                <div className="donation-content-container">
                    {
                        filteredArray.map((currPost) => {
                            return (<div key={currPost._id}>
                                <Card data={currPost} />
                            </div>
                            )
                        })
                    }
                </div>

                <div className="donor-header-content">
                    <h2>Past Donations</h2>
                </div>
                <div className="donation-content-container">
                    {
                        pastDonation.map((currPost) => {
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

export default Donor