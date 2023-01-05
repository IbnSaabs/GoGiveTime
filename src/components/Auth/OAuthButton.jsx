export  const OAuthButton = ({
    authLinkPath,
    authImgSrc,
    authImgAlt,
    authText

}) => {
    return( 
        <a href={authLinkPath} className='flex gap-x-4 shadow-md px-[25px] py-[15px] rounded-[8px] hover:shadow-lg'>
            <img src={authImgSrc} alt={authImgAlt} height={22} width={22} />
            <p  className="text-xs leading-7">{authText}</p>
        </a>
    )
}