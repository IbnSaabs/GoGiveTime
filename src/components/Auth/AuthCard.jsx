import { OAuthButton } from "./OAuthButton";
import GoogleIcon from "../../assets/auth/google-icon.svg";
import AppleIcon from "../../assets/auth/apple-icon.svg";

import './authStyle.css';

export const AuthCard = ({
    src,
    alt,
    text,
    googleAuth,
    googleAuthText,
    appleAuthText,
    children,
    subText
}) => {
    return(
        <div className='auth-card absolute top-10 px-3 sm:px-32 pt-10 pb-40 object-center rounded-3xl border max-h-[90%] max-w-[700px] min-w-[350px] bg-white z-10'>
            <img className="mx-auto" src={src} alt={alt} />
            <h1 className="h1 mt-5 text-center">{text}</h1>
            {
                googleAuth ?
                <>
                    <div className="grid mt-4 justify-center md:flex md:justify-between ">
                        <OAuthButton
                            authLinkPath=""
                            authImgSrc={GoogleIcon}
                            authImgAlt="google auth"
                            authText={googleAuthText} />
                        <OAuthButton
                            authLinkPath=""
                            authImgSrc={AppleIcon}
                            authImgAlt="apple auth"
                            authText={appleAuthText} />
                    </div>
                    <p className="text-center mt-5 text-gray-400 text-md">OR</p>
                </> : <p className="mt-5 w-8/12 sm:w-10/12 mx-auto text-center text-md text-gray-400">{subText}</p>
           }
            {/* forms, buttons and other dynamic contents */}
            <div>{children}</div>
        </div>
    )
}