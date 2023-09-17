import millify from "millify";
import moment from "moment";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import StringArea from "./StringArea";

const ChannelDetail = ({ detail }) => {
  console.log("channeldetail", detail);
  return (
    <>
      {/* video title */}
      <h1 className="mt-3 text-xl font-bold p-3">{detail.title}</h1>
      {/* subscribe area */}
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-3">
          <img
            className="rounded-full w-12 h-12"
            src={detail.author.avatar[0].url}
            alt=""
          />
          <div>
            <h4>{detail.author.title}</h4>
            <p>{detail.author.stats.subscribersText}</p>
          </div>
          <button className="bg-white h-9 rounded-[18px] transition-all cursor-pointer text-black px-4 hover:bg-[#bebebe] ">
            Abone Ol
          </button>
        </div>
        <div className="flex items-center gap-4 rounded-full bg-[#4b4a4a] px-6 py-2">
          <div className="flex items-center gap-2 justify-center border-r-2 border-white pr-3">
            <AiFillLike />
            {/* millify sayıları düzenler */}
            <span>{millify(detail.stats.likes)}</span>
          </div>
          <div className="pl-2">
            <AiFillDislike />
          </div>
        </div>
      </div>
      {/* video about */}
      <div className="bg-[#383838] mt-2 p-3 hover:bg-[#535353] rounded">
        <div className="flex gap-3">
          <p>{millify(detail.stats.views)} görüntülenme</p>
          <p>{moment(detail.publishedDate).fromNow()}</p>
          <ul className="flex gap-1">
            {detail.superTitle.items.slice(0, 3).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <StringArea text={detail.description} maxChar={200} />
      </div>
    </>
  );
};

export default ChannelDetail;
