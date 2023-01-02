import React from "react";
import { Link } from "react-router-dom";

import { AuthCard, AuthPageLayout } from "../../components/Auth";
import Logo from "../../assets/auth/auth-logo.svg";

export const PasswordUpdated = () => {

    return(
        <AuthPageLayout text='Sign in' path='/sign-in'>
                <AuthCard
                    src={Logo}
                    alt='GGT Logo'
                    text='Password Updated'
                    googleAuth={false} 
                    subText={<>Your password has been updated</>}
                >                   
                   {/* submit button */}
                   <Link
                    className="mt-7 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center shadow-md"
                    to='/sign-in'
                    type="button"
                     >Log in</Link>
                </AuthCard>
        </AuthPageLayout>
    ) 
}