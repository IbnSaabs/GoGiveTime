import React from "react";

import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { BsLock, BsEyeSlash, BsEye } from 'react-icons/bs';

import { AuthCard, AuthPageLayout, SubmitButton } from "../../components/Auth";
import Logo from "../../assets/auth/auth-logo.svg";
import { Link } from "react-router-dom";

export const SignIn = () => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    const handleSignIn = () => {}

    return(
        <div>
            <AuthPageLayout text='Sign up' path="/sign-up" >
                <AuthCard
                    src={Logo}
                    alt='GGT Logo'
                    text='Sign In'
                    googleAuth={true}
                    googleAuthText="Sign in with Google"
                    appleAuthText="Sign in with Apple"
                >
                    <form>
                        <div className="mt-5">
                             
                            {/* email field */}
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-md text-gray-500">
                                    <MdOutlineLocalPostOffice />
                                </div>
                                <input 
                                type="email" 
                                id="email"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " 
                                placeholder="Your Email" />
                            </div>

                            {/* password field  */}
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none  text-md text-gray-500">
                                    <BsLock />
                                </div>
                                <input 
                                  type="password" 
                                  id="password"
                                  placeholder="Your password"
                                  required
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " 
                                />
                                <div 
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    className="text-gray-900 absolute right-2.5 bottom-2.5 mr-2 focus:outline-none text-md hover:cursor-pointer">
                                    { isPasswordVisible ? <BsEye/> : <BsEyeSlash/> }
                                </div>
                            </div>

                            {/* remember me and forgot password  */}
                            <div className="grid md:flex justify-between gap-y-5 ">
                                <label className="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900">Remember Me</span>
                                </label>

                                <Link to="/forgot-password" className="text-[#EC3138] text-sm font-medium">Forgot Password?</Link>
                            </div>

                            {/* submit button */}
                            <SubmitButton
                                className="mt-5 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center"
                                text="Sign In"
                                type="button"
                                handleSubmit={handleSignIn}
                                />

                            <p className="mt-5 text-sm text-center">Don’t have an account? <Link to="/sign-up" className="text-blue-400">Sign up</Link></p>
                        </div>
                    </form>
                </AuthCard>
            </AuthPageLayout>
        </div>
    ) 
}