import React from "react";
// import { Link } from "react-router-dom";

import { AuthCard, AuthPageLayout } from "../../components/Auth";
import Logo from "../../assets/auth/auth-logo.svg";

export const PasswordReset = () => {
    const handleResendEmail = () => {alert('working')}

    return(
        <AuthPageLayout text='Sign in' path='/sign-in'>
                <AuthCard
                    src={Logo}
                    alt='GGT Logo'
                    text='Forgot Password'
                    googleAuth={false} 
                    subText={<>You will receive an email with a link to reset your password. Please check your inbox.</>}
                >                   
                    {/* Resend email link */}
                    <div className="text-center mt-5">
                        <a onClick={handleResendEmail} className="text-[#01B0F1] text-md hover:cursor-pointer">Resend email link</a>
                    </div>
                     {/* change email ID */}
                     <div className="text-center mt-3">
                        <a onClick={handleResendEmail} className="text-[#01B0F1] text-md hover:cursor-pointer">Change email ID</a>
                    </div>
                </AuthCard>
        </AuthPageLayout>
    ) 
}