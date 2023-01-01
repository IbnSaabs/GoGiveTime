import React from "react";

import { Link } from "react-router-dom";
import { MdOutlineLocalPostOffice, MdOutlinePersonOutline } from 'react-icons/md';
import { BsLock, BsEyeSlash, BsEye } from 'react-icons/bs';

import { AuthCard, AuthPageLayout, SubmitButton } from "../../components/Auth";
import Logo from "../../assets/auth/auth-logo.svg";

export const SignUp = () => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false);

    const handleSignUp = () => {}

    return(
        <div>
            <AuthPageLayout text='Sign in' path='/sign-in'>
                <AuthCard
                    src={Logo}
                    alt='GGT Logo'
                    text='Sign up now'
                    googleAuth={true}                    
                    googleAuthText="Sign up with Google"
                    appleAuthText="Sign up
                 with Apple"
                >
                    <form>
                        <div className="mt-5">
                            {/* name field */}
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-md text-gray-500 dark:text-gray-400">
                                    <MdOutlinePersonOutline />
                                </div>
                                <input 
                                 type="text" 
                                 id="fullname"
                                 required
                                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                 placeholder="Full name" />
                            </div>
                            {/* email field */}
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-md text-gray-500 dark:text-gray-400">
                                    <MdOutlineLocalPostOffice />
                                </div>
                                <input 
                                 type="email" 
                                 id="email"
                                 required
                                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                 placeholder="Your Email" />
                            </div>

                            {/* password field  */}
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

                            {/* remember me and forgot password  */}
                            <p className="text-gray-400 text-center text-xs">By creating an account, you agree to the <a href='#' className="underline">Terms of use</a> and <a href='#' className="underline">Privacy Policy.</a> </p>

                            {/* submit button */}
                            <SubmitButton
                                className="mt-7 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                text="Sign Up"
                                type="button"
                                handleSubmit={handleSignUp}
                                />

                            <p className="mt-5 text-sm text-center">Already have an account? <Link to="/sign-in" className="text-blue-400">Sign in</Link></p>
                        </div>
                    </form>
                </AuthCard>
            </AuthPageLayout>
        </div>
    ) 
}