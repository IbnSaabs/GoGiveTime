import { Player } from "video-react"

const UserPost = ({image, video, text}) => {
    return (
        <>
            {/* post.text  */}
            {text && <p className="text-l text-gray-900 leading-5 font-lighter">{text}</p>}
            {/* post.photo/post.video (if any)  */}
            {(image || video) && 
                <div className="mt-4 mx-auto w-12/12 h-[45vh] sm:h-[55vh] bg-black rounded-lg">
                    { image && 
                        <img 
                            src={image} 
                            alt={''} 
                            className="w-full h-full object-none aspect-[4/3]"  
                        />
                    }
                    { video && 
                        <Player
                            playsInline
                            src={URL.createObjectURL(uploadedVideo)}
                            fluid={false}
                            width={250}
                            height={150}
                            aspectRatio="16:9"
                        />
                    }
                </div>
            }
        </>
    )
}

export default UserPost;