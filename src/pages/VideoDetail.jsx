import ReactPlayer from "react-player";
import ChannelDetail from "../componenets/ChannelDetail";
import { useState, useContext, useEffect } from "react";
import Loading from "../componenets/Loading";
import { YouTubeContext } from "../context/youTubeContext";
import { useParams } from "react-router-dom";
import { getData } from "../helpers";
import RelatedContents from "../componenets/RelatedContents";
import SideNav from "../componenets/SideNav";
const VideoDetail = () => {
  const [detail, setDetail] = useState(null);
  const [relatedContents, setRelatedContent] = useState(null);
  const { videoId } = useParams();
  console.log("id", videoId);

  useEffect(() => {
    setDetail(null);
    setRelatedContent(null);
    // videoların detay bilgisini id parametresi ile çekme
    getData(`/video/details/?id=${videoId}`)
      .then((detail) => setDetail(detail))
      .catch((err) => console.log("detail error", err));

    // videoyla alakalı içerikleri alma
    getData(`/video/related-contents/?id=${videoId}`).then((relatedData) =>
      setRelatedContent(relatedData.contents)
    );
  }, [videoId]);
  console.log("state", relatedContents);
  return (
    <div className="flex bg-[#0F0F0F] text-white">
      <SideNav />
      <div className="lg:pr-[100px] flex flex-col gap-4 lg:flex-row  min-h-[95vh] ">
        {/* Player Side */}
        <div className="">
          <ReactPlayer
            width={"100%"}
            height={"500px"}
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
          />
          {!detail ? <Loading /> : <ChannelDetail detail={detail} />}
        </div>

        {/* Related Content */}
        {!relatedContents ? (
          "..."
        ) : (
          <RelatedContents contents={relatedContents} />
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
