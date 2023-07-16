import React from 'react'
import '../index.css'

import { useFormik } from 'formik'
import { donationSchema } from '../Schema'
import { postDonation } from '../services/api'

const initialValue={
    donorName:'',
    donationQuality:'',
    donationQuantity:'',
    donorPhone:'',
    donorLocation:'',
    donorDesc:''
}
const DonorForm = () => {

    const {values,errors,touched,handleSubmit,handleChange,handleBlur} = useFormik({
        initialValues:initialValue,
        validationSchema:donationSchema,
        onSubmit:(values,action)=>{
            console.log(values);
            postDonation(values)
            action.resetForm();
        }
    })
    return (
        <>
            <form className="donate-form active" onSubmit={handleSubmit}>
                <h2>Donate Food</h2>
                <div className="donate-input">
                    <input
                        type="text"
                        placeholder='Name of the Organization/Individual *'
                        name='donorName'
                        value={values.donorName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.donorName && touched.donorName ? <span className="form-error-message">{errors.donorName}</span> : null
                    }
                </div>
                <div className="donate-input">
                    <input
                        type="text"
                        placeholder='Quality *'
                        name='donationQuality'
                        value={values.donationQuality}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.donationQuality && touched.donationQuality ? <span className="form-error-message">{errors.donationQuality}</span> : null
                    }
                </div>

                <div className="donate-input">
                    <input
                        type="text"
                        placeholder='Quantity *'
                        name='donationQuantity'
                        value={values.donationQuantity}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.donationQuantity && touched.donationQuantity ? <span className="form-error-message">{errors.donationQuantity}</span> : null
                    }
                </div>

                <div className="donate-input">
                    <input
                        type="tel"
                        placeholder='Phone No. *'
                        name='donorPhone'
                        value={values.donorPhone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.donorPhone && touched.donorPhone ? <span className="form-error-message">{errors.donorPhone}</span> : null
                    }
                </div>

                <div className="donate-input">
                    <input
                        type="text"
                        placeholder='Location *'
                        name='donorLocation'
                        value={values.donorLocation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.donorLocation && touched.donorLocation ? <span className="form-error-message">{errors.donorLocation}</span> : null
                    }
                </div>
                <div className="donate-input">
                    <textarea
                        name="donorDesc"
                        placeholder='Description *'
                        value={values.donorDesc}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.donorDesc && touched.donorDesc ? <span className="form-error-message">{errors.donorDesc}</span> : null
                    }
                </div>

                <button className='nav-btn' type='submit'>Donate</button>
            </form>
        </>
    )
}

export default DonorForm