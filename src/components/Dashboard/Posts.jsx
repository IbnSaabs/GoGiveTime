import React from "react";
import { MdOutlineMoreVert, MdOutlineShortcut } from "react-icons/md";
import { BsChatText } from "react-icons/bs";
import { SlLike } from 'react-icons/sl'

import UserAvatar from "./UserAvatar";
import UserPostDetails from "./UserPostDetails";
// import user from '../../assets/slider_image_2.png';
import UserPost from "./UserPost";
import UserLikesComments from "./UserLikesComments";
import LikeIcon from '../../assets/post-icon-like.png';
import CelebrateIcon from '../../assets/post-icon-celebrate.png';
import LoveIcon from '../../assets/post-icon-love.png';


export const Posts = ({post}) => {
    const [showOptions, setShowOptions] = React.useState(false);
    const [showEmoji, setShowEmoji] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);    
    const [isLoved, setIsLoved] = React.useState(false);    
    const [isCelebrated, setIsCelebrated] = React.useState(false);
    const [actions, setActions] = React.useState({ 
        like: post.reactions.likes, 
        love: post.reactions.loves, 
        celebrate: post.reactions.celebrations
    })
    const [views, setViews] = React.useState(post.views.count);
    const [comments, setComments] = React.useState(post.comments.count);

    
    const handleLike = () => {
        setActions(isLiked ? {...actions, like: actions.like - 1 } : {...actions, like: actions.like + 1 })
        setIsLiked(!isLiked)
    }
    const handleLove = () => {
        setActions(isLoved ? {...actions, love: actions.love - 1} : {...actions, love:actions.love + 1});
        setIsLoved(!isLoved)
    }
    const handleCelebration = () => {
        setActions(isCelebrated ? {...actions, celebrate: actions.celebrate - 1 }: {...actions, celebrate: actions.celebrate + 1});
        setIsCelebrated(!isCelebrated)
    }

    return(
        <section className="w-full bg-white rounded mt-4 pt-7 pb-5 sm:px-10 px-4">
            <div className="flex justify-between">
                <div className="flex gap-x-3">
                    <UserAvatar 
                        src={post.photo} 
                        alt={post.name+"ggt avatar"} 
                    />
                    <UserPostDetails 
                        user_name={post.name} 
                        post_time={post.duration_posted} 
                    />
                </div>
                
                {/* options (icon)  */}
                <div>
                    <button 
                        id="dropdownMenuIconButton" 
                        onClick={() => setShowOptions(!showOptions)} 
                        data-dropdown-toggle="dropdownDots" 
                        data-dropdown-placement="left-end"
                        className="inline-flex items-center text-2xl font-medium text-center text-gray-700 bg-white hover:cursor-pointer" 
                        type="button"
                    > 
                        <MdOutlineMoreVert aria-hidden="true" />
                    </button>

                    <div id="dropdownDots" className={`ml-[-150px] absolute z-10 float-left ${showOptions ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded shadow w-44`}>
                        <ul className="py-1 text-sm text-gray-700"  aria-labelledby="dropdownMenuIconButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div  className="mt-3">
                <UserPost
                    image={post.posted_photo}
                    video={post.posted_video}
                    text={post.posted_text}
                />
            </div>
            <div>
                <UserLikesComments
                    likesCount={actions.like}
                    lovesCount={actions.love}
                    celebrateCount={actions.celebrate}
                    viewsCount={views}
                    commentsCount={comments}
                />
            </div>
                <hr className="mt-2" />
            <div className="flex gap-x-5 pt-2 items-center text-sm mt-2">
                {/* Like, comment and share buttons  */}
                <button onClick={() => setShowEmoji(!showEmoji)} className="flex gap-x-1 px-3 py-3 hover:bg-gray-100 rounded">
                    <SlLike className="like-icon-btn text-lg" />
                    Like
                </button>
                <div className={`ml-[-5px] mt-[-85px] absolute z-10 float-left ${showEmoji ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded shadow px-3 py-3 w-40`}>
                    <div className="flex justify-between">
                        <button onClick={handleLike}>
                            <img src={LikeIcon} alt="like-icon" className="w-[30px] h-[30px]" />
                        </button>
                        <button onClick={handleLove}>
                            <img src={LoveIcon} alt="love-icon" className="w-[30px] h-[30px]" />
                        </button>
                        <button onClick={handleCelebration}>
                            <img src={CelebrateIcon} alt="celebrate-icon" className="w-[30px] h-[30px]" />
                        </button>
                    </div>
                </div>

                <button className="flex gap-x-1 px-3 py-3 hover:bg-gray-100 rounded">
                    <BsChatText className="text-lg" />
                    Comment
                </button>
                <button className="flex gap-x-1 px-3 py-3 hover:bg-gray-100 rounded">
                    <MdOutlineShortcut className="text-lg" />
                    Share
                </button>
            </div>
        </section>
    )
}