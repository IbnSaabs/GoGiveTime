import { MdCircle, MdPublic } from "react-icons/md"

const UserPostDetails = ({ user_name, post_time }) => {
    return(
        <div>
            <h3 className="leading-0 text-[18px] text-gray-600">{user_name}</h3>
            <div className="flex gap-x-1.5 items-center text-gray-300">
                <p className="leading-0 text-[14px]">{post_time}</p>
                <MdCircle className="text-[5px] text-gray-700" />
                <MdPublic className="text-[16px] text-gray-500" />
            </div>
        </div>
    )
} 

export default UserPostDetails;