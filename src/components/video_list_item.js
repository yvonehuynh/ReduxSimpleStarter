import React from "react";

const VideoListItem =({video, onVideoSelect})=>{
/*     const video = props.video */
const imgUrl = video.snippet.thumbnails.default.url
    return (
        <li onClick={()=>{onVideoSelect(video)}} className="list-group-item">
            <div className="video-lis media">
                <div className="media-left">
                    <img src={imgUrl} alt="" className="media-object"/>
                </div>
            </div>

            <div className="media-body">
                <div className="media-heading">
                {video.snippet.title}
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;