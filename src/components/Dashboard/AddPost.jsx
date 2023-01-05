import React from "react";
import { BsFillGeoAltFill, BsFillPlayBtnFill } from "react-icons/bs"
import { MdInsertPhoto } from "react-icons/md"
import { Player } from "video-react";

import user from '../../assets/slider_image_2.png';
import  API_KEY  from "../../utils/service";

    


export const AddPost = (props) => {
    const [uploadedImage, setUploadedImage] = React.useState(null);
    const [uploadedVideo, setUploadedVideo] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);
   

    const handleAddPost = () => {}

    // Image Upload 
    const imageInput = React.useRef(null);
    const handlePhotoUpload = () => { imageInput.current.click(); }
    const handleImageInputChange = event => {
        const fileUploaded = event.target.files[0];
        setUploadedImage(fileUploaded);
        setUploadedVideo(null)
      };
    const imageDelete = () => setUploadedImage(null)

    // video upload 
    const videoInput = React.useRef(null);
    const handleVideoUpload = () => { videoInput.current.click(); }
    const handleVideoInputChange = event => {
        let fileUploaded = event.target.files[0];
        let fileSize = Math.round((fileUploaded.size/1024))
        setUploadedVideo(fileUploaded);
        setUploadedImage(null)
        // if(fileSize < 125){                // check file size, if it greate than 25MB
        // }else{
        //     alert('File is too large. file size 10MB or less is acceptible!')
        // }
      };
    const videoDelete = () => setUploadedVideo(null);


    // location upload 
    const handleAddLocation = () => {
        const myPosition = navigator.geolocation.getCurrentPosition((position) => {
            let lat  = JSON.stringify(position.coords.latitude)
            let lgt = JSON.stringify(position.coords.longitude);
            fetch(`https://api.radar.io/v1/geocode/reverse?coordinates=${lat},${lgt}`, {
                headers: {'Authorization': API_KEY}
            })
            .then(response => response.json())
            .then(data => {
                setCurrentLocation(`${data.addresses[0].city}, ${data.addresses[0].country}`)
            })
            .catch(err => console.log('err',err))
        })
    }
    const locationDelete = () =>  setCurrentLocation(null) 

    

    return (
        <section className="w-full bg-white pt-2.5 pb-1 rounded">
            <div className="flex w-11/12 gap-x-2 mx-2 my-3 pt-4 pb-10 px-4">
                <div className='w-10 h-10 '><img src={user} alt="user-avatar" className="aspect-[1/1] rounded-full"  /></div> 
                <div className='w-full'>     
                    <div className="flex gap-x-2.5">  
                        <textarea
                            placeholder="Enter text here... "
                            className="w-9/12 text-sm text-gray-400 border-0 focus:ring-0 focus:outline-none py-2 px-2"
                            style={{overflow: 'hidden', resize: 'none'}}> 
                        </textarea>  
                        {currentLocation && 
                            <div className="text-sm flex mx-auto leading-3 gap-x-1 text-gray-600">
                                <BsFillGeoAltFill className="text-sm text-black" /> {currentLocation}
                                <DeleteUpload 
                                    top="top-[-10px]"
                                    right="right-35px]"
                                    handleItemDelete={locationDelete} 
                                />
                            </div>
                        }
                    </div>                 
                    <>
                        { uploadedImage && 
                            <>
                                <img
                                    src={URL.createObjectURL(uploadedImage)}
                                    className='h-[150px] aspect-[16/9] mt-2' 
                                /> 
                                <DeleteUpload 
                                    top="top-[-155px]"
                                    right="right-[-255px]"
                                    handleItemDelete={imageDelete} 
                                />
                            </>
                         }
                    </>
                    <>
                        { uploadedVideo &&
                            <>
                                <Player 
                                    playsInline
                                    src={URL.createObjectURL(uploadedVideo)}
                                    fluid={false}
                                    width={250}
                                    height={150}
                                    aspectRatio="16:9"
                                />
                                <DeleteUpload
                                    top="top-[-157px]"
                                    right="right-[-240px]" 
                                    handleItemDelete={videoDelete} 
                                />
                            </>
                        }
                    </>
                </div>
            </div>
            <div className='w-full bg-white flex justify-between shrink border-t-[0.5px] border-solid border-[rgba(128, 122, 122, 0.5)] py-2.5 px-8'>
                <div className="flex gap-x-7 my-auto">
                    <button className="flex gap-x-1.5 bg-none rounded-0" onClick={handlePhotoUpload}>
                        <MdInsertPhoto className="text-xl text-[#01B0F1]" />
                        <div className="text-xs text-gray-400  leading-5  hidden sm:block">Photo</div>
                    </button>
                    <button className="flex gap-x-1.5" onClick={handleVideoUpload}>
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
            <input
                type='file'
                accept=".png,.jpeg, .jpg"
                ref={imageInput}
                onChange={handleImageInputChange}
                className='hidden' />
            <input
                type='file'
                accept="video/mp4,video/x-m4v,video/*"
                ref={videoInput}
                onChange={handleVideoInputChange}
                className='hidden' />
        </section>
    )
}



const DeleteUpload = ({top, right, handleItemDelete}) => {
    return <div 
                onClick={handleItemDelete}
                className={`relative ${top} ${right}  bg-[#333333] text-gray-300 text-xs h-4 w-4 text-center leading-3 rounded-full hover:cursor-pointer`}>
                    x
            </div>
}






// const cloudDetails = {
//     cloud_name: 'okafohenrie',
//     upload_preset: 'ggt_project'
// }

// let widget = window.cloudinary.createUploadWidget({
//     cloudName: cloudDetails.cloud_name,
//     uploadPreset: cloudDetails.upload_preset
// }, (error, result) => {checkPhotoUploadResult(result)});

// const handlePhotoUploadWidget = (e, widget) => {
//     e.preventDefault();
//     widget.open()
// }
// const checkPhotoUploadResult = (resultEvent) => {
//     if(resultEvent === 'success'){
//         console.log(this.props.currentUser.id);
//         this.props.postPhoto({
//             user_id: this.props.currentUser.id,
//             caption: '',
//             url: resultEvent.info.secure_url
//         }).then(this.props)
//     }
// }


