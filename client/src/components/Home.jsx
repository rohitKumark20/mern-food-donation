import React, { useEffect, useState } from 'react'
import Card from './Card'

import RequestForm from './RequestForm'
import DonorForm from './DonorForm'

import { proactiveness } from '../services/api'

const Home = () => {

    useEffect(() => {
        setTimeout(() => {
            if(proactiveness(25,16) == 'veryhigh'){
                console.log('yes')
            }
        }, 5000);
    },[])

        const [donation,setDonation] = useState([]);
        const [request,setRequest] = useState([]);

        const getDonation = async() => {
            const data = await fetch('/home-food-donation');
            const res = await data.json()
            setDonation(res);
        }

        const getRequest = async() => {
            const data = await fetch('/home-food-request');
            const res = await data.json();
            setRequest(res);
        }

        useEffect(()=>{
            getDonation();
            getRequest();
        },[])

    return (
        <>
            <section className='home-form'>
                <div className="form-container">
                    <div className="form-header">
                        <div className="active label"> <label htmlFor="check">Donate</label> </div>
                        <div className='label'> <label htmlFor="check">Recieve</label> </div>
                    </div>

                    <div className="form-body">
                        <input type="checkbox" id='check' />
                        <div className="layer"></div>
                        <DonorForm />
                        <RequestForm />
                    </div>
                </div>
                <div className='donation-qoute'>
                    <div className='qoute-container'>
                    <h1>Food for All. End Hunger.</h1>
                    <p>"Every act of kindness, no matter how small, makes a difference. Your donation has the power to transform lives, uplift communities, and create a brighter future. Together, let us be the change we wish to see in the world. Your generous support will help bring hope, joy, and opportunity to those in need. Thank you for your compassion and for making a meaningful impact through your donation."</p>
                    </div>
                </div>
            </section>

            <section className="donate-content">
                <h1 className='list-heading'>Donation-Lists</h1>
                <div className="main-container-donation">
                    <div className="donation-content-lists">
                        <div className="donation-content-container">
                            {
                                donation.length > 0 ? donation.map((currPost) => {
                                    return (<div key={currPost._id}>
                                        <Card data= {currPost}/>
                                    </div>)
                                }) : <div style={{width:'50%', margin:'auto', textAlign:'center', fontSize:'30px'}}>No Current Donations</div>
                            }
                        </div>
                    </div>
                    <div className='showMore'><a href="/food-donation" className='ui'>Show More Donations</a></div>
                </div>
                <div className="empty-list empty-donate-list-color">
                    <h1>Currently there are no Donations!</h1>
                </div>
            </section>

            <section className='recieve-content'>
                <h1 className='list-heading'>Request-Lists</h1>
                <div className="main-container-reciever">
                    <div className="donation-content-lists">
                        <div className="donation-content-container">
                            {
                                request.length > 0 ? request.map((currPost) => {
                                    return (<div key={currPost._id}>
                                        <Card data = {currPost}/>
                                    </div>)
                                }) : <div style={{width:'50%', margin:'auto', textAlign:'center', fontSize:'30px'}}>No Current Requests</div>
                            }
                        </div>
                    </div>
                    <div className='showMore'><a href="access-food" className="ui">Show More Requests</a></div>
                </div>
                <div className="empty-list empty-recieve-list-color">
                    <h1>Currently there are not Requests!</h1>
                </div>
            </section>
        </>
    )
}

export default Home