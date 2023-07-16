import * as yup from 'yup'

export const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})

export const signupSchema = yup.object({
    username: yup.string().min(3).max(25).required(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], "Password doesn't match")
})

export const donationSchema = yup.object({
    donorName:yup.string().min(3).required(),
    donationQuality:yup.string().required(),
    donationQuantity:yup.string().required(),
    donorPhone:yup.string().required().matches(/^[0-9]{10}$/,'Phone number must be 10 digits'),
    donorLocation:yup.string().required(),
    donorDesc:yup.string().required()
})

export const requestSchema = yup.object({
    requestName:yup.string().min(3).required(),
    requestQuality:yup.string().required(),
    requestQuantity:yup.string().required(),
    requestPhone:yup.string().required().matches(/^[0-9]{10}$/,'Phone number must be 10 digits'),
    requestLocation:yup.string().required(),
    requestDesc:yup.string().required()
})
