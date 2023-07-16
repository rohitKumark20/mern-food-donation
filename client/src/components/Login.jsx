import React from 'react'
import '../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import { useFormik } from 'formik'
import { loginSchema } from '../Schema';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    email: '',
    password: ''
}

const Login = () => {
    const navigate = useNavigate();

    const loginUser = async (data) => {
        const { email, password } = data;

        try {
            const res = await fetch(`/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
    
            console.log(res);
            const  response = await res.json();
            console.log(response)
            if(res.ok){
                alert('login successful')
                navigate('/')
            }
        } catch (error) {
            alert(error.message)
        }
    }


    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: initialValue,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            loginUser(values)
            action.resetForm()
        }
    })

    return (
        <>
            <nav className="navbar">
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <h1 className='header'>Login</h1>
                        <div className="inputBoxes">
                            <div className="input_box">
                                <div className='input_box-content'>
                                    <FontAwesomeIcon icon={faUser} />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email *'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {
                                    errors.email && touched.email ? <span className='form-error-message login-ui-error'>{errors.email}</span> : null
                                }
                            </div>
                            <div className="input_box">
                                <div className="input_box-content">
                                    <FontAwesomeIcon icon={faLock} />
                                    <input
                                        type="password"
                                        name='password'
                                        placeholder='Password *'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {
                                    errors.password && touched.password ? <span className='form-error-message login-ui-error'>{errors.password}</span> : null
                                }
                            </div>
                        </div>
                        <div className='passwordManager'>
                            <div className='remember'>
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <a href="/password-recovery">Forgot Password</a>
                        </div>
                        <button className="btn" type='submit'>Login</button>

                        <div className='orOption'>
                            <span>OR</span>
                        </div>

                        <button className="btn">Sign in with Google</button>
                        <button className="btn">Sign in with Twitter</button>
                    </div>

                    <div className='signUp'>
                        <span>Don't have an account? <a href="/register">SignUp</a></span>
                    </div>
                </form>
            </nav>
        </>
    )
}

export default Login