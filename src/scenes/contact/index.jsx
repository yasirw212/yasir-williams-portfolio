import React from "react";
import { Box, TextareaAutosize, TextField, Typography, Container, Button } from "@mui/material";
import {Formik} from 'formik'
import * as yup from 'yup'
import { tokens } from "../../theme";
import emailjs from "@emailjs/browser"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CheckCircleOutline } from "@mui/icons-material";

export default function Contact(){
    const colors = tokens
    React.useEffect(function(){
        AOS.init({duration: 1000})
    },[])
    const form = React.useRef()
    const [formSubmitted, setFormSubmitted] = React.useState(false)

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const userSchema = yup.object().shape({
        firstName: yup.string().required('required'),
        lastName: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
        message: yup.string().required('required')
    })

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qimqb68', 'template_h2pe6kg', form.current, 'QUk80EdPABNDbOcof')
        .then((result) => {
            console.log(result.text)
            const formData = new FormData(document.getElementById('contact-form'))
            setFormSubmitted(true)
            setTimeout(() => {
                setFormSubmitted(false)
            }, 5000)
        }, (error) => {
            console.log(error.text);
        });

    }

    return (
        <Container id='contact' data-aos='fade-in' maxWidth={'md'} className='section__padding' sx={{color: colors.secondary[700]}}>
            <Box  sx={{paddingTop: '6rem', paddingBottom: '6rem'}}>
                <Typography variant="h2" sx={{fontWeight: 400}}>
                    GET IN CONTACT.
                </Typography>
                {
                    formSubmitted ?
                    <Box sx={{textAlign: 'center', marginTop: '5em'}}>
                        <Typography variant="h4">
                            Thank You For Your Message.
                        </Typography>
                        <CheckCircleOutline sx={{marginTop: '1em'}} />
                    </Box>
                    :
                    <Formik
                    initialValues={initialValues}
                    validationSchema={userSchema}
                    
                >
                {({
                    values,
                    errors, 
                    touched, 
                    handleBlur,
                    handleChange,
                    handleSubmit
                })=>(
                    <form
                      
                        name="contact"
                        method="post"
                        data-netlify="true"
                        onSubmit={(e) => sendEmail(e)}
                        ref={form}
                    >
                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, minMax(0, 1fr))',
                            gridGap: '20px',
                            marginTop: '2rem'
                        }}>
                            <TextField
                                fullWidth
                                name={"firstName"}
                                id={"firstName"}
                                value={values.firstName}
                                variant="filled"
                                placeholder="First Name"
                                sx={{gridColumn: 'span 2'}}
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                value={values.lastName}
                                name={"lastName"}
                                id={"lastName"}
                                variant="filled"
                                placeholder="Last Name"
                                sx={{gridColumn: 'span 2'}}
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                value={values.email}
                                name={"email"}
                                id={"email"}
                                variant="filled"
                                placeholder="Email Address"
                                sx={{gridColumn: 'span 4'}}
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                value={values.message}
                                name={"message"}
                                id={"message"}
                                variant="filled"
                                placeholder="Message"
                                multiline rows={4}
                                sx={{gridColumn: 'span 4'}}
                                error={!!touched.message && !!errors.message}
                                helperText={touched.message && errors.message}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                        </Box>
                        <Box
                            sx=
                            {{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                width: '100%',  
                                marginTop: '1.5rem'
                            }}
                            >
                                <Button  type="submit" variant="contained" color="secondary" sx={{padding: '.75rem 3rem', fontSize: '14px', background: colors.secondary[600]}}>
                                    Submit
                                </Button>
                        </Box>
                    </form>
                    )}
                </Formik>
                }
            </Box>
        </Container>
    )
}