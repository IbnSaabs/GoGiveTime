import React from "react";

import { AuthCard, AuthPageLayout, SubmitButton } from "../../components/Auth";
import Map from "../../assets/auth/map.svg";

export const LocationSetup = () => {
    const handleEnableWorkLocation = () => {}
    const handleEnableHomeLocation = () => {}
    const handleEnableCommonLocation = () => {}

    return(
        <AuthPageLayout text='Sign in' path='/sign-in'>
                <AuthCard
                    src={Map}
                    alt='map icon'
                    text='Enable precise location'
                    googleAuth={false} 
                    subText={<>Let’s find your next event. Stay in tune with what’s happening in your area!</>}
                >
                    <div className="grid justify-center mt-3">
                        {/* Enable work loocation Button */}
                        <SubmitButton
                            className='mt-5 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm object-center  px-5 py-2.5 text-center'
                            type="button"
                            text='Enable Work location'
                            handleClick={handleEnableWorkLocation}
                        />  
                        {/* Enable home location Button */}
                        <SubmitButton
                            className='mt-5 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm  px-5 py-2.5 text-center'
                            type="button"
                            text='Enable Home Location'
                            handleClick={handleEnableHomeLocation}
                        />  
                        {/* Enable common location Button */}
                        <SubmitButton
                            className='mt-5 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm  px-5 py-2.5 text-center'
                            type="button"
                            text='Enable Common Location'
                            handleClick={handleEnableCommonLocation}
                        /> 
                    </div> 
                </AuthCard>
        </AuthPageLayout>
    ) 
}