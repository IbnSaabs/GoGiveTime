import React from "react";

import { AuthCard, AuthPageLayout, SubmitButton } from "../../components/Auth";
import Logo from "../../assets/auth/auth-logo.svg";
import './index.css';
import { Link } from "react-router-dom";

export const VerifyEmail = () => {
    const testEmail = 'usmanndako@gmail.com';
    const resendTime = '60 secs';

    const [otp, setOtp] = React.useState(new Array(4).fill(''));

    const handleEmailVerification = () => {}

    return(
        <AuthPageLayout text='Sign in' path='/sign-in'>
                <AuthCard
                    src={Logo}
                    alt='GGT Logo'
                    text='Verify Email'
                    googleAuth={false} 
                    subText={<>A 4 digit OTP code has been sent to <span className="text-blue-400">{testEmail}</span> enter the code to continue.</>}
                >
                    {/* OTP input */}
                    <div className="text-gray-400 mt-5">Enter OTP</div>
                    <div className="mt-3 flex justify-center space-x-2">
                        {otp.map((_, index) => (
                            <React.Fragment key={index}>
                                <input 
                                    type="number" 
                                    className="h-[50px] w-1/4 rounded outline-none text-center border-none bg-[#F1F6F9] font-bold text-l focus:border-blue-200  tansition spin-button-none " />
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Resend OTP */}
                    <p className="text-gray-500 mt-7 font-light text-sm text-center">Resend code in <span className="text-blue-300 font-bold">{resendTime}</span></p>
                    
                    <div className="text-center mt-3">
                        <Link to='/sign-up' className="text-gray-500 text-sm">Wrong Email</Link>
                    </div>
                    
                    {/* Verify Button */}
                    <SubmitButton
                        className='mt-5 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        type="button"
                        text='Verify'
                        handleClick={handleEmailVerification()}
                      />
                </AuthCard>
        </AuthPageLayout>
    ) 
}