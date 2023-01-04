import { BsFillGeoAltFill, BsFillPlayBtnFill } from "react-icons/bs"
import { MdInsertPhoto } from "react-icons/md"

import user from '../../assets/slider_image_2.png';

export const AddPost = (props) => {

    const handleAddPost = () => {}
    const handleAddPhoto = () => {}
    const handleAddVideo = () => {}
    const handleAddLocation = () => {}

    return (
        <section className="w-full bg-white pt-2.5 pb-1 rounded">
            <div className="flex gap-x-2 mx-2 my-3 pt-4 pb-10 px-4">
                <div className='w-10 h-10 '><img src={user} alt="user-avatar" className="aspect-[1/1] rounded-full"  /></div>
                <textarea 
                    type='text' 
                    placeholder='Enter text here...'
                    className="w-9/12 text-sm text-gray-400 border-0 focus:ring-0 focus:outline-none"
                    style={{overflow: 'hidden', resize: 'none'}}>
                </textarea>
            </div>
            <div className='w-full bg-white flex justify-between shrink border-t-[0.5px] border-solid border-[rgba(128, 122, 122, 0.5)] py-2.5 px-8'>
                <div className="flex gap-x-7 my-auto">
                    <button className="flex gap-x-1.5 bg-none rounded-0" onClick={handleAddPhoto}>
                        <MdInsertPhoto className="text-xl text-[#01B0F1]" />
                        <div className="text-xs text-gray-400  leading-5  hidden sm:block">Photo</div>
                    </button>
                    <button className="flex gap-x-1.5" onClick={handleAddVideo}>
                        <BsFillPlayBtnFill className="text-xl text-[#EC3138]" />
                        <div className="text-xs text-gray-400 leading-5  hidden sm:block">Video</div>
                    </button>
                    <button className="flex gap-x-1.5" onClick={handleAddLocation}>
                        <BsFillGeoAltFill className="text-xl text-black" />
                        <div className="text-xs text-gray-400 leading-5 hidden sm:block">Check - In</div>
                    </button>
                </div>
                <div>
                    <button  className="text-white bg-[#01B0F1] rounded py-2.5 px-10 text-xs" onClick={handleAddPost}>Post</button>
                </div>
            </div>
        </section>
    )
}
