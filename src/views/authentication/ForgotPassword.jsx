import React from "react";

import { Link } from "react-router-dom";
import { MdOutlineLocalPostOffice } from "react-icons/md";

import { AuthCard, AuthPageLayout, SubmitButton } from "../../components/Auth";
import Logo from "../../assets/auth/auth-logo.svg";
import './index.css';

export const ForgotPassword = () => {
    const [isHelperText, setIsHelperText] = React.useState(false);

    const handleForgotPassword = () => {}
    const handleInputChange = () => {
        setIsHelperText(true)
    }

    return(
        <AuthPageLayout text='Sign in' path='/sign-in'>
                <AuthCard
                    src={Logo}
                    alt='GGT Logo'
                    text='Forgot Password'
                    googleAuth={false} 
                    subText={<>Provide your account’s email for which you want to rest your password</>}
                >
                    {/* Email input */}
                    <div className="relative mt-7 mb-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-md text-gray-500 dark:text-gray-400">
                            <MdOutlineLocalPostOffice />
                        </div>
                        <input 
                            type="email" 
                            id="email"
                            onChange={handleInputChange}
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Your Email" 
                            />
                    </div>                    
                    {isHelperText ? <p id="helper-text-explanation" class="mt-0 text-sm text-[#EC3138]">Please enter your registered email</p> : null}
                    
                    {/* Verify Button */}
                    <SubmitButton
                        className='mt-5 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        type="button"
                        text='Reset Password'
                        handleClick={handleForgotPassword}
                      />                      
                    {/* Cancel link */}
                    <div className="text-center mt-3">
                        <Link to='/sign-in' className="text-[#EC3138] text-md">Cancel</Link>
                    </div>
                </AuthCard>
        </AuthPageLayout>
    ) 
}