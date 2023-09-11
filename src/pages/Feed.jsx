import { useContext } from "react";
import SideNav from "../componenets/SideNav";
import { YouTubeContext } from "../context/youTubeContext";
import Loading from "../componenets/Loading";
import VideoCard from "../componenets/VideoCard";

const Feed = () => {
  const { videos } = useContext(YouTubeContext);
  console.log("video", videos);
  return (
    <div className="flex bg-[#0F0F0F] min-h-screen text-white">
      <SideNav />

      <div className="videos">
        {/*
         * state null ise loading bas
         * veriler geldiyse sadece type video olanları ekrana bas
         */}
        {videos === null ? (
          <Loading />
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard key={item.video.videoId} video={item.video} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
