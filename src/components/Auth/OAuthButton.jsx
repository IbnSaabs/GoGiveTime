export  const OAuthButton = ({
    authLinkPath,
    authImgSrc,
    authImgAlt,
    authText

}) => {
    return( 
        <a href={authLinkPath} className='flex gap-x-5 shadow-md px-[25px] py-[15px] rounded-[8px] hover:shadow-lg'>
            <img src={authImgSrc} alt={authImgAlt} height={22} width={22} />
            <p  className="text-sm">{authText}</p>
        </a>
    )
}