
import React from "react";
import { Link } from "react-router-dom";
import { BsEye, BsEyeSlash, BsLock } from "react-icons/bs";

import { AuthCard, AuthPageLayout, SubmitButton } from "../../components/Auth";
import Logo from "../../assets/auth/auth-logo.svg";

export const PasswordResetLinkResend = () => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false);

    const handlePasswordUpdate = () => {}

    return(
        <AuthPageLayout text='Sign in' path='/sign-in'>
                <AuthCard
                    src={Logo}
                    alt='GGT Logo'
                    text='New Credentials'
                    googleAuth={false} 
                    subText={<>The email has been resent. You will receive an email with a link to reset your password.</>}
                >                   
                    {/* password field  */}
                    <form>
                        <div className="mt-5">
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none  text-md text-gray-500 dark:text-gray-400">
                                    <BsLock />
                                </div>
                                <input 
                                    type="password" 
                                    id="password"
                                    placeholder="Your password"
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                />
                                <button 
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    className="text-gray-900 absolute right-2.5 bottom-2.5 mr-2 focus:outline-none text-md">
                                    { isPasswordVisible ? <BsEye/> : <BsEyeSlash/> }
                                </button>
                            </div>
                            {/* confirm password field  */}
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none  text-md text-gray-500 dark:text-gray-400">
                                    <BsLock />
                                </div>
                                <input 
                                    type="password" 
                                    id="confirm-password"
                                    placeholder="Confirm password"
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                />
                                <button 
                                    onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                    className="text-gray-900 absolute right-2.5 bottom-2.5 mr-2 focus:outline-none text-md">
                                    { isConfirmPasswordVisible ? <BsEye/> : <BsEyeSlash/> }
                                </button>
                            </div>
                            {/* submit button */}
                            <SubmitButton
                                className="mt-7 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                text="Sign Up"
                                type="button"
                                handleSubmit={handlePasswordUpdate}
                                />
                        </div>
                    </form>
                    
                    {/* Cancel link */}
                    <div className="text-center mt-3">
                        <Link to='/sign-in' className="text-[#EC3138] text-md">Cancel</Link>
                    </div>
                </AuthCard>
        </AuthPageLayout>
    ) 
}