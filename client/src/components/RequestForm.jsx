import React from 'react'
import '../index.css'
import { useFormik } from 'formik'
import { requestSchema } from '../Schema'
import { postRequest } from '../services/api'

const requestValue={
    requestName:'',
    requestQuality:'',
    requestQuantity:'',
    requestPhone:'',
    requestLocation:'',
    requestDesc:''
}

const RequestForm = () => {

        const {values,errors,touched,handleSubmit,handleChange,handleBlur} = useFormik({
            initialValues:requestValue,
            validationSchema:requestSchema,
            onSubmit:(values,action)=>{
                console.log(values);
                postRequest(values)
                action.resetForm();
            }
        })

    return (
        <>
            <form className="recieve-form" onSubmit={handleSubmit}>
                <h2>Recieve Food</h2>
                <div className="donate-input">
                    <input
                        type="text"
                        placeholder='Name of the Organization/Individual *'
                        name='requestName'
                        value={values.requestName}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                    />
                    {
                        errors.requestName && touched.requestName ? <span className="form-error-message">{errors.requestName}</span>:null
                    }
                </div>
                <div className="donate-input">
                    <input
                        type="text"
                        placeholder='Quality *'
                        name='requestQuality'
                        value={values.requestQuality}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.requestQuality && touched.requestQuality ? <span className="form-error-message">{errors.requestQuality}</span>:null
                    }
                </div>

                <div className="donate-input">
                    <input
                        type="text"
                        placeholder='Quantity *'
                        name='requestQuantity'
                        value={values.requestQuantity}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.requestQuantity && touched.requestQuantity ? <span className="form-error-message">{errors.requestQuantity}</span>:null
                    }
                </div>

                <div className="donate-input">
                    <input
                        type="tel"
                        placeholder='Phone No. *'
                        name='requestPhone'
                        value={values.requestPhone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.requestPhone && touched.requestPhone ? <span className="form-error-message">{errors.requestPhone}</span>:null
                    }
                </div>

                <div className="donate-input">
                    <input
                        type="text"
                        placeholder='Location *'
                        name='requestLocation'
                        value={values.requestLocation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.requestLocation && touched.requestLocation ? <span className="form-error-message">{errors.requestLocation}</span>:null
                    }
                </div>
                <div className="donate-input">
                    <textarea
                        name="requestDesc"
                        placeholder='Description *'
                        value={values.requestDesc}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.requestDesc && touched.requestDesc ? <span className="form-error-message">{errors.requestDesc}</span>:null
                    }
                </div>

                <button className='nav-btn' type='submit'>Recieve</button>
            </form>
        </>
    )
}

export default RequestForm