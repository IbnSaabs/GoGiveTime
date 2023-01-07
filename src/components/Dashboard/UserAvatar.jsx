const UserAvatar = ({ src, alt }) => {
    return <div className="h-[45px] w-[45px]">
            <img src={src} alt={alt} className="aspect-[1/1] rounded-full" />
        </div>
    
}

export default UserAvatar;