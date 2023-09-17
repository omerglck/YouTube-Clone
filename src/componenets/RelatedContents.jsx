import VideoCard from "./VideoCard";

const RelatedContents = ({ className, contents }) => {
  console.log("redsad", contents);
  return (
    <>
      <div className={className}>
        {contents?.map((content) => {
          return <VideoCard video={content?.video} width={150} />;
        })}
      </div>
    </>
  );
};

export default RelatedContents;
