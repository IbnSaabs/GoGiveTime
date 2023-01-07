import React from "react";
import { MdCircle } from "react-icons/md";

import LikeIcon from '../../assets/post-icon-like.png';
import CelebrateIcon from '../../assets/post-icon-celebrate.png';
import LoveIcon from '../../assets/post-icon-love.png';

const UserLikesComments = (props) => {
    const {
        lovesCount,
        likesCount,
        celebrateCount,
        viewsCount,
        commentsCount 
    } = props;

    return(
        <div className="mt-2 py-3 text-xs sm:text-sm text-gray-400 items-center flex gap-x-3">        
            {(likesCount > 0 || lovesCount > 0 || celebrateCount > 0) &&
                <div className="flex gap-x-1 items-center">
                   { (likesCount > 0) && <span><img src={LikeIcon} alt="like-icon" className="h-[20px] w-[20px]" /></span> } 
                   { (lovesCount > 0) && <span><img src={LoveIcon} alt="love-icon" className="h-[21px] w-[21px]" /></span> }
                   { (celebrateCount > 0) && <span><img src={CelebrateIcon} alt="celebrate-icon" className="h-[20px] w-[20px]" /></span> } 
                    <span>{likesCount + lovesCount + celebrateCount}</span>
                </div>
            }
            {(commentsCount > 0) &&
            <>
                <MdCircle className="text-[5px] text-gray-700" />
                <div>{commentsCount} comments</div>
            </>
            }
            {(viewsCount > 0) && 
            <>
                <MdCircle className="text-[5px] text-gray-700" />
                <div>{'20,005'} views</div>
            </>
            }
        </div>
    )
}

export default UserLikesComments;