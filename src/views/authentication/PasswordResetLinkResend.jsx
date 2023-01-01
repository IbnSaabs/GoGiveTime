
import React from "react";
import { Link } from "react-router-dom";

import { AuthCard, AuthPageLayout } from "../../components/Auth";
import Logo from "../../assets/auth/auth-logo.svg";

export const PasswordResetLinkResend = () => {
    
    const handleResendLinkEmail = () => {alert('resend link working')}

    return(
        <AuthPageLayout text='Sign in' path='/sign-in'>
                <AuthCard
                    src={Logo}
                    alt='GGT Logo'
                    text='Forgot Password'
                    googleAuth={false} 
                    subText={<>The email has been resent. You will receive an email with a link to reset your password.</>}
                >                   
                    {/* Resend email link */}
                    <div className="text-center mt-5">
                        <Link to='/forgot-password' className="text-[#01B0F1] text-md hover:cursor-pointer">Resend email link</Link>
                    </div>
                     {/* change email ID */}
                     <div className="text-center mt-3">
                        <a onClick={handleResendLinkEmail} className="text-[#01B0F1] text-md hover:cursor-pointer">Change email ID</a>
                    </div>
                </AuthCard>
        </AuthPageLayout>
    ) 
}