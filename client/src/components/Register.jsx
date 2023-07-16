import React from 'react'
import '../index.css'

import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import { signupSchema } from '../Schema'

const initialValue = {
    username: '',
    email: '',
    phone: '',
    usertype: '',
    password: '',
    confirmPassword: ''
}

const Register = () => {
    const navigate = useNavigate();

    const postUser = async (data) => {
        try {
            const { username, email, usertype, phone, password, confirmPassword } = data;
            console.log(email);
            const res = await fetch(`/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: username, email, usertype, phone, password, confirmPassword })
            })

            console.log(res);
            const response = await res.json();
            
            if(res.ok){
                alert(response.message)
                navigate('/')
            }
        } catch (error) {
            alert('Something went wrong!')
        }
    }

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: initialValue,
        validationSchema: signupSchema,
        onSubmit: (values, action) => {
            console.log(values)
            postUser(values);
            action.resetForm()
        }
    })

    // console.log(errors)
    return (
        <>
            <nav className="navbar">
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <h1 className='header'>Register</h1>
                        <div className="input-tabs">
                            <div className="input-field">
                                <div><label htmlFor="Username">Name</label></div>
                                <input
                                    type="text"
                                    id='Username'
                                    name='username'
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {
                                    errors.username && touched.username ? <span className="form-error-message">{errors.username}</span> : null
                                }
                            </div>

                            <div className="input-field">
                                <div><label htmlFor="email">Email</label></div>
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {
                                    errors.email && touched.email ? <span className="form-error-message">{errors.email}</span> : null
                                }
                            </div>

                            <div className="input-field">
                                <div><label htmlFor="phone">Phone</label></div>
                                <input
                                    type="text"
                                    id='phone'
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {
                                    errors.phone && touched.phone ? <span className="form-error-message">{errors.phone}</span> : null
                                }
                            </div>

                            <div className="input-field">
                                <div>
                                    <p>User-Type</p>
                                </div>
                                <div className='radio-btns'>
                                    <div className='radio-options'>
                                        <input
                                            type="radio"
                                            id='donor'
                                            name='usertype'
                                            value='donor'
                                            checked={values.usertype === 'donor'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <label htmlFor="donor">Donor</label>
                                    </div>
                                    <div className='radio-options'>
                                        <input
                                            type="radio"
                                            id='request'
                                            name='usertype'
                                            value='recipient'
                                            checked={values.usertype === 'recipient'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <label htmlFor="request">Recipient</label>
                                    </div>
                                    <div className='radio-options'>
                                        <input
                                            type="radio"
                                            id='ngo'
                                            name='usertype'
                                            value='ngo'
                                            checked={values.usertype === 'ngo'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <label htmlFor="ngo">NGO</label>
                                    </div>
                                </div>
                            </div>

                            <div className="input-field">
                                <div><label htmlFor="password">Password</label></div>
                                <input
                                    type="password"
                                    id='password'
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {
                                    errors.password && touched.password ? <span className="form-error-message">{errors.password}</span> : null
                                }
                            </div>

                            <div className="input-field">
                                <div><label htmlFor="confirmpassword">Password Confirmation</label></div>
                                <input
                                    type="password"
                                    id='confirmpassword'
                                    name='confirmPassword'
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {
                                    errors.confirmPassword && touched.confirmPassword ? <span className="form-error-message">{errors.confirmPassword}</span> : null
                                }
                            </div>

                        </div>

                        <button className="btn" type='submit'>Sign up</button>
                        <div className='orOption'>
                            <span>OR</span>
                        </div>

                        <button className="btn">Sign up with Google</button>
                        <button className="btn">Sign up with Twitter</button>

                        <div className='termsOfUse'><span>By clicking on "Sign up", you agree to our <a href="/">Terms of Use</a></span></div>
                    </div>

                    <div className='signUp'>
                        <span>Already have an account? <a href="/login">Login</a></span>
                    </div>
                </form>
            </nav>
        </>
    )
}

export default Register