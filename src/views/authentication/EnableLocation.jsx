import React from "react";

import { AuthCard, AuthPageLayout, SubmitButton } from "../../components/Auth";
import Map from "../../assets/auth/map.svg";

export const EnableLocation = () => {
    const handleLogin = () => {}

    return(
        <AuthPageLayout text='Sign in' path='/sign-in'>
                <AuthCard
                    src={Map}
                    alt='map icon'
                    text='Where are you?'
                    googleAuth={false} 
                    subText={<>You’ll need to enable your location in order to use this app</>}
                >
                        {/* Enable work loocation Button */}
                        <SubmitButton
                            className='mt-5 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm object-center w-full px-5 py-2.5 text-center shadow-md'
                            type="button"
                            text='Log in'
                            handleClick={handleLogin}
                        />   
                </AuthCard>
        </AuthPageLayout>
    ) 
}